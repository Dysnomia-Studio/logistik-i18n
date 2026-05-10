import en from './en.ts';
import fr from './fr.ts';

const resources: { [key: string]: { [key: string]: { [key: string]: string } } } = {};
resources['en'] = en;
resources['fr'] = fr;

export default resources;