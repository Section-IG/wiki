import React from 'react';
import Image from '@theme/IdealImage';

import styles from './styles.module.css';

export default function Img({ alt, src, className }) {
	if (!className) {
		className = styles.centeredImage;
	}

	return <Image className={className} img={src} alt={alt} />;
}
