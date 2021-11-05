import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export default function ResourcesCheckbox({
	title,
	className,
	label,
	...props
}) {
	const id = `resources_checkbox_id_${props.name};`;
	return (
		<div className={clsx(className, styles.checkboxContainer)} title={title}>
			<input type='checkbox' id={id} {...props} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
}
