import RollDice, { DiceRollInfo, DiceRollType } from "src/resorces/dice"
import { DamageType } from "./damage"

export class Item{
    name: string
    description: string
    size: number
}

export class Weapon extends Item{

} 

export class NonMagicWeapon extends Weapon{
    members: number
    damage: {numberOfDices: number, numberOfFaces: number}
    damageType: DamageType
    range: number
    weaponPassive: WeaponPassives

    RollWeaponDamage() : number{
        return RollDice(this.damage.numberOfDices, this.damage.numberOfFaces, 0, DiceRollType.Standard).result
    }
}

export enum WeaponPassives{
    Grapple = 0,
    Throwable = 1,
    Pointed = 2,
    Slingshot = 3,
    HeavyHand = 4,
    Demolisher = 5,
    DoubleDefense = 6,
    Polearm = 7,
    Sharp = 8,
    Burst = 9,
    Impact = 10,
    Bows = 11,
    Crossbows = 12,
    Versatile = 13,
    Deadly = 14,
    Cannons = 15,
    Pistols = 16,
    Mounted = 17
}

export class Armor extends Item{
    damageReduction: number
    damageReductionType: DamageType[]
    maxSagaciousBonus: number
    penalty: number
}

export class Shield extends Weapon{
    members: number
    reduction: {numberOfDices: number, numberOfFaces: number}
    passives: ShieldPassives
}

export enum ShieldPassives{
    Tower = 0,
    CriticalDefense = 1,
    DrawTiebreakers = 2,
    WeightOnWings = 3
}

export class ArcaneWeapons extends Weapon{
    arcaneEffect : ArcaneEffect
    passive : ArcaneWeaponPassive
}

export enum ArcaneEffect{
    Duration,
    Range,
    ActionSpeed,
    Transmute,
    SecondaryType,
    SpaceForEffect,
    Restriction,
    BaseValueIncrease,
    PrimaryType,
    AuxiliaryType
}

export enum ArcaneWeaponPassive{
    ElementalAura = 0,
    MagicAim = 1,
    MagicInterference = 2,
    MagicConsistency = 3,
    MagicInscription = 4
}

export class MusicalInstrumental extends Item{
    type: MusicalInstrumentalType
    range: number
    art: ArtType
}

export enum MusicalInstrumentalType{
    Strings = 0,
    Percussion = 1,
    Wind = 2
}

export enum ArtType{
    Music,
    Theater,
    Dance,
}