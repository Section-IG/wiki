import React from 'react';
import Layout from '@theme/Layout';

import Resources from '../../components/Resources';

function ResourceHeader() {
	return (
		<div className='text--center'>
			<h1>Des ressources intéressantes</h1>
			<p>
				Une liste de ressources assemblées par les étudiants, alumnis et
				professeurs
			</p>
			<p>
				<a
					className={'button button--primary'}
					href='https://github.com/section-ig/wiki/edit/main/src/components/Resources/resources.json'
					target={'_blank'}
				>
					🙏 Ajoute une ressource maintenant!
				</a>
			</p>
		</div>
	);
}

export default function RessourcesPage() {
	return (
		<Layout>
			<main className='container margin-vert--lg'>
				<ResourceHeader />
				<Resources />
			</main>
		</Layout>
	);
}
