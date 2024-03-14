import { Duration } from './duration';
import { MagicEffect } from './magic-effects';
import { MagicRange } from './magic-range';
import { ActionSpeed } from './action-speed';

export interface newMagic {
    main:MagicEffect,
    secondary?:MagicEffect[],
    range:MagicRange[],
    duration:Duration,
    actionSpeed: ActionSpeed
}
