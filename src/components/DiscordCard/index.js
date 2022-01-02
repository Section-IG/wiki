import React, { useEffect, useState } from 'react';
import { DiscordInvite } from '@skyra/discord-components-react';

import Loading from '../Loading';
import fetchDiscordInvite from '../../services/discord.utils';

export default function DiscordCard({
	inviteCode,
	title = undefined,
	verified = false,
	partnered = false,
}) {
	if (!inviteCode) throw new Error('No invite code provided');

	const [loading, setLoading] = useState(true);
	const [guildInvite, setGuildInvite] = useState({
		name: '',
		icon: '',
		url: '',
		members: 0,
		online: 0,
	});

	useEffect(() => {
		fetchDiscordInvite(inviteCode)
			.then((data) => {
				setGuildInvite({
					name: data.guild.name,
					icon: `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png`,
					members: data.approximate_member_count,
					online: data.approximate_presence_count,
					url: `https://discordapp.com/invite/${inviteCode}`,
				});

				setLoading(false);
			})
			.catch(console.warn);
	}, []);

	if (loading) return <Loading />;

	return (
		<DiscordInvite
			{...guildInvite}
			joinBtn='Rejoindre'
			inviteTitle={title}
			verified={verified}
			partnered={partnered}
		/>
	);
}
