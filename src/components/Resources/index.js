import React from 'react';
import clsx from 'clsx';
import { ReactTinyLink } from 'react-tiny-link';

import styles from './index.module.css';
import { resources } from './resources.json';

function ResourceItem({ id, url, title, description, tags }) {
	return (
		<div className={clsx('card', styles.resourceCard)} key={id}>
			<div className='card__image'>
				<div className={styles.allCardImage}>
					<ReactTinyLink
						showGraphic={true}
						url={url}
						cardSize='small'
						proxyUrl='https://cors.team-radiateur.fun:6443'
					/>
				</div>
			</div>
			<div className='card__body'>
				{(title || description) && (
					<div className='avatar'>
						<div className='avatar__intro margin-left--none'>
							{title && <h4 className='avatar__name'>{title}</h4>}
							{description && <p className='avatar__subtitle'>{description}</p>}
						</div>
					</div>
				)}
			</div>
			{tags && tags.length > 0 && (
				<div className='card__footer'>Tags: {tags.join(', ')}</div>
			)}
		</div>
	);
}

export default function Resources() {
	return (
		<div className='margin-top--l margin-bottom--md container'>
			<div className='row'>
				{resources
					.sort((firstResource, secondResource) => {
						const resourceOneTitle = firstResource.title.toLowerCase();
						const resourceTwoTitle = secondResource.title.toLowerCase();
						if (resourceOneTitle < resourceTwoTitle) return -1;
						if (resourceOneTitle > resourceTwoTitle) return 1;
						return 0;
					})
					.map((resource, index) => (
						<div className='col col--4 margin-bottom--lg' key={index}>
							<ResourceItem {...resource} />
						</div>
					))}
			</div>
		</div>
	);
}
