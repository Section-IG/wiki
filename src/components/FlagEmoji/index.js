import React from 'react';

import styles from './styles.module.css';
import Img from '../Image';

const whitelist = ['discord/flag_fr.svg', 'discord/flag_gb.svg'];

export default function FlagEmoji({ name }) {
    if (!whitelist.includes(name)) name = 'logo';

    return <Img src={`/img/${name}`} className={styles.emoji} alt={name} />;
}
