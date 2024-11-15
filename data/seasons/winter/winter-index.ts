import { SeasonFamily } from '../../interfaces/interfaces-definition';
import { WinterSubtype } from '../../types/types-definition';
import { coolWinter } from './cool-winter';
import { clearWinter } from './clear-winter';
import { deepWinter } from './deep-winter';

export const WINTER_SEASONS: SeasonFamily = {
  "Cool Winter": coolWinter,
  "Clear Winter": clearWinter,
  "Deep Winter": deepWinter
};

export { coolWinter, clearWinter, deepWinter };
