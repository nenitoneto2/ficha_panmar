import ActionSpeed from "./actions"
import MagicElement from "./elements"

interface Magic{
    name: String,
    element: MagicElement,
    type: MagicType,
    rangeType: RangeType,
    rangeValue: number,
    duration: String,
    actionSpeed: ActionSpeed,
    effectConsequence: Effect[]
    restrictions: Restriction[]
    elementalEffect: Text   // this will probabily change once thing start to call method
}

enum MagicType{
    Reinforcement,
    Emission,
    Transmutation,
    Manipulation,
    Conjuration,
    Specialist
}

enum RangeType{
    Personal,
    Imbue,
    Ingestion,
    Burst,
    RangedTouch,
    Cone,
    Hearing,
    Olfaction,
    Explosion,
    Touch,
    Look,
    Aura,
    Area,
    Versatile,
    Bond,
    Domain
}

enum EffectConsequence{
    SkillTest,
    Modifier,
    Debuff,
    Damage,
    Heal,
    Regeneration,
    Seal,
    Pull,
    Push,
    Clean,
    Bind,
    Stun,
    Paralize,
    Exhaustion,
    Enchant,
    Blindness,
    Deafness,
    Scare,
    Petrify,
    KnockDown,
    Restrict,
    Disease,
    Poison,
    MeridianAttack,
    Slowness,
    Accelerate,
    Mark,
    Create,
    Hit,
    Defense,
    Invoke,
    Alter,
    Enviromental,
    Grow,
    Decrease,
    Displacement,
    Barrier,
    Reduction,
    Countermeasure,
    Manipulation,
    Versatility,
    Ricochet,
    Penetrating,
    Weaken,
    Absorb,
    Flight,
    Climb,
    Swim,
    Dig,
    Move, 
    DamageOverTime,
    Critical,
    CriticalFaliure,
    Invisibility,
    TrueVision,
    Illuminate,
    Sensory,
    SteathAttack,
    Communication,
    AlterWeather,
    DamageLimb,
    AmputateLimb,
    ExtraMenbers,
    FreeMovement,
    ReceiveEffect,
    ForceAction,
    AugmentedEffect,
    Charge,
    Multielemental,
    Prediction,
    Transmutation,
    Advantage,
    Disadvantage,
    GuaranteedSuccess,
    GuaranteedFaluire,
    Versatile
}

interface Effect{
    name: String,
    description: Text,
    effectConsequence: EffectConsequence
}

enum RestrictionType{
    Item,
    CrushingDamage,
    SlashingDamage,
    PiercingDamage,
    SingleTest,
    SkillTest,
    StealthMagic,
    Artifact,
    RequiredSense,
    Channel,
    Weather,
    Area,
    TargetSize,
    CriticalMagic,
    FuriousMagic,
    TargetType,
    ElementalTarget,
    EnemyTarget,
    OrganizationTarget,
    AllyTarget,
    SpeciedTarget,
    SingleTarget,
    ObjectTarget,
    OutOfCombat,
    Randomness,
    BoundMagic,
    Tie,
    Bounce,
    Material,
    spiritual,
    Symbol,
    Style,
    Art,
    LossOfControl,
    Domain
}

interface Restriction{
    type: RestrictionType,
    reduction: number,
    description: Text
}


export default Magic