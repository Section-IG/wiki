import React from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { tagList, tags } from '../../../data/resources';
import { sortBy } from '../../../utils';
import styles from './index.module.css';

function TagIcon({ label, description, icon }) {
	return (
		<span className={styles.tagIcon} title={`${label}: ${description}`}>
			{icon}
		</span>
	);
}

function ResourceCardTagIcons(resource) {
	let tagObjects = resource.tags
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
		<div className='col col--4 margin-bottom--lg'>
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
				<div className='card__footer'>
					<div className='button-group button-group--block'>
						<a
							className='button button--small button--secondary button--block'
							href={url}
							target='_blank'
							rel='noreferrer noopener'
						>
							Ouvrir le lien
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ResourcesList({ resources }) {
	return (
		<section className='container margin-top--lg'>
			<h2>
				{resources.length} ressource{resources.length > 1 ? 's' : ''}
			</h2>
			<div className='margin-top--lg'>
				{resources.length > 0 ? (
					<div className='row'>
						{resources.map((resource, index) => (
							<ResourceItem key={index} {...resource} />
						))}
					</div>
				) : (
					<div className='padding-vert--md text--center'>
						<h3>Aucun résultat</h3>
					</div>
				)}
			</div>
		</section>
	);
}
