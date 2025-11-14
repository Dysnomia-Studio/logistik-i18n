// This file is needed because vite doesn't like dynamic import when exporting ...
import achievements_en from './achievements/en.json';
import menu_en from './menu/en.json';
import toolbelt_en from './toolbelt/en.json';

import achievements_fr from './achievements/fr.json';
import menu_fr from './menu/fr.json';
import toolbelt_fr from './toolbelt/fr.json';

import config from './config.json';

const resources: { [key: string]: { [key: string]: { [key: string]: string } } } = {};
resources['en'] = {
	achievements: achievements_en,
	languages: config.languages,
	menu: menu_en,
	toolbelt: toolbelt_en,
};
resources['fr'] = {
	achievements: achievements_fr,
	languages: config.languages,
	menu: menu_fr,
	toolbelt: toolbelt_fr,
};

export default resources;