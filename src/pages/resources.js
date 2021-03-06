// heavily inspired of https://github.com/facebook/docusaurus/blob/main/website/src/pages/showcase/index.tsx

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';

import { sortBy, toggleListItem } from '../utils';
import { tagList, tags, resources } from '../data/resources';
import ResourcesList from '../components/Resources/ResourcesList';
import ResourcesSelect from '../components/Resources/ResourcesSelect';
import ResourcesCheckbox from '../components/Resources/ResourcesCheckbox';

const TITLE = 'Des ressources intéressantes';
const DESCRIPTION =
	'Une liste de ressources assemblées par les étudiants, alumnis et professeurs';

const Operators = ['OR', 'AND'];

function filterResources(resources, selectedTags = [], operator = 'OR') {
	if (selectedTags.length === 0) return resources;

	return resources.filter((resource) => {
		if (resource.tags.length === 0) return false;

		if (operator === 'AND') {
			return selectedTags.every((tag) => resource.tags.includes(tag));
		} else {
			return selectedTags.some((tag) => resource.tags.includes(tag));
		}
	});
}

function useFilteredResources(resources, selectedTags = [], operator = 'OR') {
	return useMemo(
		() => filterResources(resources, selectedTags, operator),
		[resources, selectedTags, operator]
	);
}

const TagQueryStringKey = 'tags';

function readSearchTags(search) {
	return new URLSearchParams(search).getAll(TagQueryStringKey);
}

function replaceSearchTags(search, newTags) {
	const searchParams = new URLSearchParams(search);
	searchParams.delete(TagQueryStringKey);
	newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
	return searchParams.toString();
}

function useSelectedTags() {
	// The search query-string is the source of truth!
	const location = useLocation();
	const { push } = useHistory();

	// On SSR / first mount (hydration) no tag is selected
	const [selectedTags, setSelectedTags] = useState([]);

	// Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
	useEffect(() => {
		const tags = readSearchTags(location.search);
		setSelectedTags(tags);
	}, [location, setSelectedTags]);

	// Update the QS value
	const toggleTag = useCallback(
		(tag) => {
			const tags = readSearchTags(location.search);
			const newTags = toggleListItem(tags, tag);
			const newSearch = replaceSearchTags(location.search, newTags);
			push({ ...location, search: newSearch });
			// no need to call setSelectedTags, useEffect will do the sync
		},
		[location, push]
	);

	return { selectedTags, toggleTag };
}

function ResourceHeader() {
	return (
		<div className='text--center'>
			<h1>{TITLE}</h1>
			<p>{DESCRIPTION}</p>
			<p>
				<a
					className='button button--primary'
					href='https://github.com/section-ig/wiki/edit/main/src/data/resources.js'
					target='_blank'
				>
					🙏 Ajoute une ressource maintenant!
				</a>
			</p>
		</div>
	);
}

function ResourcesFilters({ selectedTags, toggleTag, operator, setOperator }) {
	return (
		<div className='margin-top--l margin-bottom--md container'>
			<div className='row'>
				{tagList.map((tag) => {
					const { label, description, icon } = tags[tag];
					return (
						<div key={tag} className='col col--2'>
							<ResourcesCheckbox
								title={`${label}: ${description}`}
								name={tag}
								label={
									icon ? (
										<>
											{icon} {label}
										</>
									) : (
										label
									)
								}
								onChange={() => toggleTag(tag)}
								checked={selectedTags.includes(tag)}
							/>
						</div>
					);
				})}
				<div className='col col--2'>
					<ResourcesSelect
						name='operator'
						label='Filtre: '
						value={operator}
						onChange={(e) => setOperator(e.target.value)}
					>
						{Operators.map((op) => (
							<option key={op} value={op}>
								{op}
							</option>
						))}
					</ResourcesSelect>
				</div>
			</div>
		</div>
	);
}

export default function RessourcesPage() {
	const sortedResources = sortBy(resources, (resource) =>
		resource.title.toLowerCase()
	);

	const { selectedTags, toggleTag } = useSelectedTags();
	const [operator, setOperator] = useState('OR');
	const filteredResources = useFilteredResources(
		sortedResources,
		selectedTags,
		operator
	);

	return (
		<Layout title={TITLE} description={DESCRIPTION}>
			<main className='container margin-vert--lg'>
				<ResourceHeader />
				<ResourcesFilters
					selectedTags={selectedTags}
					toggleTag={toggleTag}
					operator={operator}
					setOperator={setOperator}
				/>
				<ResourcesList resources={filteredResources} />
			</main>
		</Layout>
	);
}
