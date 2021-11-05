import React from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { tags, tagList } from '../../../pages/ressources/resources';
import styles from './index.module.css';
import { sortBy } from '../../../utils';

function TagIcon({ label, description, icon }) {
	return (
		<span className={styles.tagIcon} title={`${label}: ${description}`}>
			{icon}
		</span>
	);
}

function ResourceCardTagIcons(resource) {
	const tagObjects = resource.tags
		.map((tag) => ({ tag, ...tags[tag] }))
		.filter((tagObject) => !!tagObject.icon);
	const sortedTagObjects = sortBy(tagObjects, (tagObject) =>
		tagList.indexOf(tagObject.tag)
	);
	return (
		<>
			{sortedTagObjects.map((tagObject, index) => (
				<TagIcon key={index} {...tagObject} />
			))}
		</>
	);
}

function ResourceItem({ id, url, title, description, tags }) {
	return (
		<div className={clsx('card', styles.resourceCard)} key={id}>
			<div className='card__image'>
				<div className={styles.allCardImage}>
					<BrowserOnly fallback={<div>Cannot be loaded with SSR.</div>}>
						{() => {
							const { ReactTinyLink } = require('react-tiny-link');
							return (
								<ReactTinyLink
									showGraphic={true}
									url={url}
									cardSize='small'
									proxyUrl='https://cors.team-radiateur.fun:6443'
								/>
							);
						}}
					</BrowserOnly>
				</div>
			</div>
			<div className='card__body'>
				{(title || description) && (
					<div className='avatar'>
						<div className='avatar__intro margin-left--none'>
							<div className={styles.titleIconsRow}>
								<div className={styles.titleIconsRowTitle}>
									{title && <h4 className='avatar__name'>{title}</h4>}
								</div>
								{tags && tags.length > 0 && (
									<div className={styles.titleIconsRowIcons}>
										<ResourceCardTagIcons tags={tags} />
									</div>
								)}
							</div>
							{description && (
								<small className='avatar__subtitle'>{description}</small>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default function Resources({ resources }) {
	return (
		<div className='margin-top--l margin-bottom--md container'>
			<div className='row'>
				{resources.map((resource, index) => (
					<div className='col col--4 margin-bottom--lg' key={index}>
						<ResourceItem {...resource} />
					</div>
				))}
			</div>
		</div>
	);
}
