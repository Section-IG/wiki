import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Des informations complètes',
		Svg: require('../../static/img/undraw_book_lover.svg').default,
		description: (
			<>
				Mollit elit eiusmod duis voluptate adipisicing excepteur mollit laboris
				tempor nulla. In et duis tempor duis dolor labore et cupidatat nulla
				anim nisi commodo Lorem laboris. Excepteur do sunt cillum deserunt. Sint
				in laboris commodo laboris commodo dolore nisi veniam. Dolore ea non
				eiusmod sit nulla occaecat commodo elit. Esse dolor aliqua nisi non
				velit eiusmod in laboris culpa.
			</>
		),
	},
	{
		title: 'Un focus sur la qualité',
		Svg: require('../../static/img/undraw_Developer_activity.svg').default,
		description: (
			<>
				Mollit elit eiusmod duis voluptate adipisicing excepteur mollit laboris
				tempor nulla. In et duis tempor duis dolor labore et cupidatat nulla
				anim nisi commodo Lorem laboris. Excepteur do sunt cillum deserunt. Sint
				in laboris commodo laboris commodo dolore nisi veniam. Dolore ea non
				eiusmod sit nulla occaecat commodo elit. Esse dolor aliqua nisi non
				velit eiusmod in laboris culpa.
			</>
		),
	},
	{
		title: 'Une connaissance partagée',
		Svg: require('../../static/img/undraw_Team_spirit.svg').default,
		description: (
			<>
				Mollit elit eiusmod duis voluptate adipisicing excepteur mollit laboris
				tempor nulla. In et duis tempor duis dolor labore et cupidatat nulla
				anim nisi commodo Lorem laboris. Excepteur do sunt cillum deserunt. Sint
				in laboris commodo laboris commodo dolore nisi veniam. Dolore ea non
				eiusmod sit nulla occaecat commodo elit. Esse dolor aliqua nisi non
				velit eiusmod in laboris culpa.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
