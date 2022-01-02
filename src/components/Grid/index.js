import React from 'react';

import styles from './styles.module.css';

export default function Grid({ children }) {
	return <section className={styles.grid}>{children}</section>;
}
