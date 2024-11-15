import { SeasonFamily } from '../../interfaces/interfaces-definition';
import { AutumnSubtype } from '../../types/types-definition';
import { warmAutumn } from './warm-autumn';
import { deepAutumn } from './deep-autumn';
import { softAutumn } from './soft-autumn';

export const AUTUMN_SEASONS: SeasonFamily = {
  "Warm Autumn": warmAutumn,
  "Deep Autumn": deepAutumn,
  "Soft Autumn": softAutumn
};

export { warmAutumn, deepAutumn, softAutumn };
