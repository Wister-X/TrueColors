import { SeasonFamily } from '../../interfaces/interfaces-definition';
import { SummerSubtype } from '../../types/types-definition';
import { lightSummer } from './light-summer';
import { coolSummer } from './cool-summer';
import { softSummer } from './soft-summer';

export const SUMMER_SEASONS: SeasonFamily = {
  "Light Summer": lightSummer,
  "Cool Summer": coolSummer,
  "Soft Summer": softSummer
};

export { lightSummer, coolSummer, softSummer };
