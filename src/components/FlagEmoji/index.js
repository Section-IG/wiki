import React from 'react';
import styles from './styles.module.css';

const whitelist = ['flag_fr', 'flag_gb'];

export default function FlagEmoji({ name }) {
	if (!whitelist.includes(name)) name = 'logo';

	return <img src={`/img/${name}`} className={styles.emoji} alt={name} />;
}
