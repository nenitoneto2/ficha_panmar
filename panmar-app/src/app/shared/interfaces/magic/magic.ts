import { MagicDuration } from './magic-duration';
import { MagicEffect } from './magic-effects';
import { MagicRange } from './magic-range';
import { MagicActionSpeed } from './action-speed';

export interface newMagic {
    main:MagicEffect,
    secondary?:MagicEffect[],
    range:MagicRange[],
    duration:MagicDuration[],
    actionSpeed: MagicActionSpeed[]
}
