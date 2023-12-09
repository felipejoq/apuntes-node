import { findHeroById } from './services/hero';

const hero = findHeroById(3);

console.log(hero?.name ?? 'Hero not found!!!');