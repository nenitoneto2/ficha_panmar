import RollDice, { DiceRollInfo, DiceRollType } from "src/resorces/dice"
import { DamageType } from "./damage"

export class Item{
    name: string
    description: string
    size: number
    itemType: ItemType = ItemType.Item
}

export class Weapon extends Item{

} 

export class NonMagicWeapon extends Weapon{
    override itemType: ItemType = ItemType.ArcaneWeapons
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
    override itemType: ItemType = ItemType.Armor
    damageReduction: number
    damageReductionType: DamageType[]
    maxSagaciousBonus: number
    penalty: number
}

export class Shield extends Weapon{
    override itemType: ItemType = ItemType.Shield
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
    override itemType: ItemType = ItemType.ArcaneWeapons
    arcaneEffect : ArcaneEffect
    passive : ArcaneWeaponPassive
}

export enum ArcaneEffect{
    Duration = 0,
    Range = 1,
    ActionSpeed = 2,
    Transmute = 3,
    SecondaryType = 4,
    SpaceForEffect = 5,
    Restriction = 6,
    BaseValueIncrease = 7,
    PrimaryType = 8,
    AuxiliaryType = 9
}

export enum ArcaneWeaponPassive{
    ElementalAura = 0,
    MagicAim = 1,
    MagicInterference = 2,
    MagicConsistency = 3,
    MagicInscription = 4
}

export class MusicalInstrumental extends Item{
    override itemType: ItemType = ItemType.MusicalInstrumental
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

export class CraftingItem extends Item{
    override itemType: ItemType = ItemType.CraftingItem
    stars: number
}

export enum ItemType{
    Item = 0,
    NonMagicWeapon = 1,
    Armor = 2,
    Shield = 3,
    ArcaneWeapons = 4,
    MusicalInstrumental = 5,
    CraftingItem = 6
}