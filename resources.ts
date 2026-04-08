// This file is needed because vite doesn't like dynamic import when exporting ...
import achievements_en from './achievements/en.json';
import credits_en from './credits/en.json';
import gameplay_errors_en from './gameplay-errors/en.json';
import menu_en from './menu/en.json';
import toolbelt_en from './toolbelt/en.json';

import achievements_fr from './achievements/fr.json';
import credits_fr from './credits/fr.json';
import gameplay_errors_fr from './gameplay-errors/fr.json';
import menu_fr from './menu/fr.json';
import toolbelt_fr from './toolbelt/fr.json';

import config from './config.json';

const resources: { [key: string]: { [key: string]: { [key: string]: string } } } = {};
resources['en'] = {
	achievements: achievements_en,
	'gameplay-errors': gameplay_errors_en,
	credits: credits_en,
	languages: config.languages,
	menu: menu_en,
	toolbelt: toolbelt_en,
};
resources['fr'] = {
	achievements: achievements_fr,
	'gameplay-errors': gameplay_errors_fr,
	credits: credits_fr,
	languages: config.languages,
	menu: menu_fr,
	toolbelt: toolbelt_fr,
};

export default resources;