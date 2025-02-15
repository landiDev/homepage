// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Adin',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Guten Morgen!',
	greetingAfternoon: 'Guten Tag,',
	greetingEvening: 'Guten Abend!,',
	greetingNight: 'Zeit zum Schlafen,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '5c47c23c3dca61eca3dc2258c1c3fdc4', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'de', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '51.538521',
	defaultLongitude: '7.219260',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '08:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '2',
			name: 'GitHub',
			icon: 'github',
			link: 'https://www.github.com/',
		},
		{
			id: '3',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '4',
			name: 'ChatGPT',
			icon: 'bot',
			link: 'https://www.chatgpt.com/',
		},
		{
			id: '5',
			name: 'Stack Overflow',
			icon: 'library-big',
			link: 'https://www.stackoverflow.com/',
		},
		{
			id: '6',
			name: 'Chefkoch',
			icon: 'chef-hat',
			link: 'https://www.chefkoch.de/',
		},
	],

	secondButtonsContainer: [
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'school',
			id: '1',
			links: [
				{
					name: 'Teams',
					link: 'https://teams.microsoft.com/',
				},
				{
					name: 'Untis',
					link: 'https://borys.webuntis.com/timetable/my-student',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/',
				},
				{
					name: 'Canva',
					link: 'https://www.canva.com/',
				},
			],
		},
		{
			icon: 'globe',
			id: '2',
			links: [
				{
					name: 'Amazon',
					link: 'https://www.amazon.com',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com',
				},
				{
					name: 'Wikipedia',
					link: 'https://www.wikipedia.org',
				},
				{
					name: 'Kleinanzeigen',
					link: 'https://www.kleinanzeigen.de',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
	],
};
