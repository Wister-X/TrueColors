import { SeasonFamily } from '../../interfaces/interfaces-definition';
import { SpringSubtype } from '../../types/types-definition';
import { lightSpring, clearSpring, warmSpring } from './spring-exports';

export const SPRING_SEASONS: SeasonFamily = {
  "Light Spring": lightSpring,
  "Clear Spring": clearSpring,
  "Warm Spring": warmSpring
} as const;

export { lightSpring, clearSpring, warmSpring };
