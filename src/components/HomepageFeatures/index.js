import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const FeatureList = [
	{
		title: 'Des informations complètes',
		Svg: require('../../../static/img/undraw_book_lover.svg').default,
		description: (
			<>
				Le contenu est vérifié par d'autres étudiants et validé par les
				professeurs.
			</>
		),
	},
	{
		title: 'Un focus sur la qualité',
		Svg: require('../../../static/img/undraw_Developer_activity.svg').default,
		description: (
			<>
				Fournir des informations correctes, complètes et compréhensibles est la
				priorité du projet.
			</>
		),
	},
	{
		title: 'Une connaissance partagée',
		Svg: require('../../../static/img/undraw_Team_spirit.svg').default,
		description: (
			<>
				Ce wiki est écrit par les étudiants pour les étudiants. Que tu sois en
				première, seconde ou dernière année, participe et aide tes camarades!
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
