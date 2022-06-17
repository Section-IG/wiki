import React from 'react';

import styles from './styles.module.css';
import Img from '../Image';

const whitelist = ['flag_fr', 'flag_gb'];

export default function FlagEmoji({ name }) {
	if (!whitelist.includes(name)) name = 'logo';

	return <Img src={`/img/${name}`} className={styles.emoji} alt={name} />;
}
