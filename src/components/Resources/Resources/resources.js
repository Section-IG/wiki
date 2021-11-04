const resources = [
	{
		title: 'Coolors',
		description:
			'Un outil pour les gestions des couleurs et ses nuances + le rendu pour les personnes qui souffrent de problème(s) de perception des couleurs',
		tags: ['outil', 'couleurs', 'hexcolor'],
		url: 'https://coolors.co/',
	},
	{
		title: 'bit',
		description:
			'Une librairie open-source partagée de composants pour le web development',
		tags: [
			'frontend',
			'component',
			'shared component cloud',
			'bit.dev',
			'web',
			'open source',
		],
		url: 'https://bit.dev',
	},
	{
		title: 'Postman',
		description: 'Un outil qui permet de tester des requêtes API',
		tags: ['api', 'back-end'],
		url: 'https://www.postman.com/',
	},
	{
		title: 'Auto Rename Tag',
		description:
			'Renome automatiquement les balises HTML/XML, tout comme Visual Studio le fait.',
		tags: ['plugin', 'Visual Studio', 'HTML', 'XML'],
		url: 'https://github.com/formulahendry/vscode-auto-rename-tag',
	},
	{
		title: 'Bootstrap',
		description: 'Une librairie front-end de design',
		tags: ['ui framework', 'css'],
		url: 'https://getbootstrap.com/',
	},
	{
		title: 'Awesome React Components',
		description: 'Une énorme liste de super composants React',
		tags: ['reactjs'],
		url: 'https://github.com/brillout/awesome-react-components',
	},
	{
		title: 'Stack Overflow',
		description:
			"Communauté de développeurs centrée sur l'aide et le partage de connaissances",
		tags: ['aide', 'web'],
		url: 'https://stackoverflow.com',
	},
	{
		title: 'Docusaurus',
		description:
			'Un outil de génération de site statique comme de la documentation, utilisant React et Markdown',
		tags: [
			'frontend',
			'documentation',
			'reactjs',
			'versioning',
			'i18n',
			'markdown',
		],
		url: 'https://docusaurus.io/',
	},
	{
		title: 'Material Angular',
		description: 'Composants Material Design pour Angular',
		tags: ['ui framework', 'css', 'angular'],
		url: 'https://material.angular.io/',
	},
	{
		title: 'Materialize',
		description:
			'Une librairie front-end responsive et moderne basée sur Material Design',
		tags: ['ui framework', 'css'],
		url: 'https://materializecss.com/',
	},
	{
		title: 'Gyazo',
		description:
			"Un outil de capture d'écran (image, GIF, vidéo) prêts à partager",
		tags: ['screenshot', 'online', 'gif'],
		url: 'https://gyazo.com/about',
	},
	{
		title: 'Restore privacy',
		description:
			"Un véritable manuel d'auto défense pour qui se soucie de la protection de ses données et de l'anonymat sur internet.",
		tags: ['Anonymat', 'surveillance', 'éthique', 'web', 'militantisme'],
		url: 'https://restoreprivacy.com/',
	},
	{
		title: 'Figma',
		description: "Designer de maquette d'écran",
		tags: ['ui', 'front-end'],
		url: 'https://www.figma.com/blog/figma-on-figma-how-we-built-figma-dot-coms-design-system/',
	},
	{
		title: 'Primeng',
		description: 'Énorme catalogue de composants Angular en ligne',
		tags: ['angular', 'component', 'library', 'web development', 'frontend'],
		url: 'https://www.primefaces.org/primeng/',
	},
	{
		title: 'Verbes Irreguliers anglais',
		description: '',
		tags: ['anglais'],
		url: 'https://verbes-irreguliers-anglais.fr/',
	},
	{
		title: 'Bootstrap Autocomplete',
		description: "Package Sublime Text 3 d'autocomplétions pour Bootstrap",
		tags: ['css', 'ui framework', 'bootstrap', 'plugin ', 'sublile text 3'],
		url: 'https://packagecontrol.io/packages/Bootstrap%204x%20Autocomplete',
	},
	{
		title: 'Primer React',
		description: 'Une liste de composants React sur base du style GitHub',
		tags: ['github', 'reactjs', 'css', 'components'],
		url: 'https://primer.style/react',
	},
	{
		title: 'Github Education Pack',
		description:
			"Pack éducatif Github, proposant plein d'accès gratuitement à des ressources et outils normalement payants.",
		tags: ['education', 'github'],
		url: 'https://education.github.com/',
	},
	{
		title: 'Ngx-Translate',
		description: 'Un outil de traduction via clé-valeur dans des fichiers JSON',
		tags: [],
		url: 'https://github.com/ngx-translate/core',
	},
	{
		title: 'AG-Grid',
		description: 'Grille personnalisable et très complète',
		tags: ['angular', 'js', 'reactjs', 'vue'],
		url: 'https://www.ag-grid.com/',
	},
	{
		title: 'PowerToys',
		description:
			"Merveilleux programme qui vous donne accès à des outils utiles variées comme un système de renommage de fichiers groupés, un sélecteur de couleurs ou un batch de redimensionnement d'images",
		tags: ['software', 'Microsoft', 'colorpicker', 'tools'],
		url: 'https://github.com/microsoft/PowerToys',
	},
	{
		title: 'Tippy.js',
		description:
			'TippyJS est la solution complète de tooltip, popover, liste déroulante, menu etc. pour le web alimentée par Popper',
		tags: [],
		url: 'https://atomiks.github.io/tippyjs/',
	},
	{
		title: 'GitKraken',
		description: 'Un client Git pour Windows, Mac & Linux',
		tags: ['git', 'ui client', 'windows', 'mac', 'linux', 'free'],
		url: 'https://www.gitkraken.com/',
	},
	{
		title: 'Tabler Icons',
		description: "Librairie d'icônes",
		tags: ['css', 'outil', 'svg', 'png'],
		url: 'https://tabler-icons.io/',
	},
	{
		title: 'Material UI',
		description:
			'Une liste de composants React qui implémente le Material Design de Google',
		tags: ['reactjs', 'material design', 'ui framework', 'material-ui'],
		url: 'https://material-ui.com/',
	},
	{
		title: 'ShareX',
		description: "Capture d'écran, partage de fichier, outil de productivité",
		tags: ['screenshot'],
		url: 'https://getsharex.com/',
	},
	{
		title: 'Screenpresso',
		description:
			"Un outil léger de capture d'écran avec éditeur intégré, générateur de documents et fonctionnalités de partage.",
		tags: ['screenshot', 'Windows'],
		url: 'https://www.screenpresso.com/',
	},
	{
		title: 'Firebase',
		description:
			"Une plateforme de développement d'applications complète par Google",
		tags: [
			'dev platform',
			'database',
			'cloud',
			'machine learning',
			'authentification',
		],
		url: 'https://firebase.google.com',
	},
	{
		title: 'Supabase',
		description:
			"Supabase, c'est l'alternative open-source de Firebase, une plateforme de développement d'applications. Base de données en temps réel, système d'authentification, d'emailing...",
		tags: [
			'realtime db',
			'cloud',
			'authentification',
			'dev platform',
			'database',
		],
		url: 'https://supabase.io',
	},
	{
		title: 'IG-Scheduler',
		description:
			"Générateur de calendrier personnel sur base des cours de ton PAE à l'IESN (pour la section IG)",
		tags: ['horaires', 'scheduler', 'agenda', 'calendar'],
		url: 'https://iesn.thibaultclaude.be/',
	},
];

export default resources;
