import React from 'react';
import Image from '@theme/IdealImage';

import styles from './styles.module.css';

export default function Img({ alt, src, className }) {
	if (!className) {
		className = styles.centeredImage;
	}
	
	if (!src.startsWith("/")) src = `/${src}`;
	if (!src.startsWith("/wiki")) src = `/wiki${src}`;

	return <Image className={className} img={src} alt={alt} />;
}
