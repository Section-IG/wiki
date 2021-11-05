import React from 'react';

import styles from './styles.module.css';

export default function ResourcesSelect({ label, ...props }) {
	const id = `resources_select_id_${props.name};`;
	return (
		<div className={styles.selectContainer}>
			<label htmlFor={id}>{label}</label>
			<select id={id} {...props}>
				{props.children}
			</select>
		</div>
	);
}
