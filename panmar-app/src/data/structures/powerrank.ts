enum Rank {
    Base1 = 0,
    Base2 = 1,
    Base3 = 2,
    Bronze1 = 3,
    Bronze2 = 4,
    Bronze3 = 5,
    Silver1 = 6,
    Silver2 = 7,
    Silver3 = 8,
    Gold1 = 9,
    Gold2 = 10,
    Gold3 = 11,
    Gold4 = 12,
    Gold5 = 13,
    Apex1 = 14,
    Apex2 = 15,
    Apex3 = 16,
    Apex4 = 17,
    Apex5 = 18,
    SmallerStar = 19,
    MediumStar = 20,
    BiggerStar = 21,
    Supernova = 22,
    Illuminated = 23
}

export function GetRankValues(rank : Rank) {
    switch (rank) {
        case Rank.Base1:
            return {points:1, life:2, mana:2, crystalCost:0, daysOfTraining: 7, KnowledgePoints:0, successes:0}
        case Rank.Base2:
            return {points:1, life:1, mana:1, crystalCost:1, daysOfTraining: 7, KnowledgePoints:5, successes:5}
        case Rank.Base3:
            return {points:1, life:1, mana:1, crystalCost:10, daysOfTraining: 7, KnowledgePoints:5, successes:5}
        case Rank.Bronze1:
            return {points:1, life:1, mana:1, crystalCost:20, daysOfTraining: 14, KnowledgePoints:10, successes:10}  
        case Rank.Bronze2:
            return {points:1, life:1, mana:1, crystalCost:30, daysOfTraining: 14, KnowledgePoints:10, successes:10}  
        case Rank.Bronze3:
            return {points:1, life:1, mana:1, crystalCost:50, daysOfTraining: 14, KnowledgePoints:10, successes:10}     
        case Rank.Silver1:
            return {points:1, life:2, mana:2, crystalCost:80, daysOfTraining: 30, KnowledgePoints:15, successes:20}  
        case Rank.Silver2:
            return {points:1, life:2, mana:2, crystalCost:130, daysOfTraining: 30, KnowledgePoints:15, successes:20}   
        case Rank.Silver3:
            return {points:1, life:2, mana:2, crystalCost:210, daysOfTraining: 30, KnowledgePoints:15, successes:20}   
        case Rank.Gold1:
            return {points:1, life:2, mana:2, crystalCost:340, daysOfTraining: 90, KnowledgePoints:15, successes:45}  
        case Rank.Gold2:
            return {points:1, life:2, mana:2, crystalCost:550, daysOfTraining: 90, KnowledgePoints:15, successes:45}  
        case Rank.Gold3:
            return {points:1, life:2, mana:2, crystalCost:890, daysOfTraining: 90, KnowledgePoints:15, successes:45}   
        case Rank.Gold4:
            return {points:1, life:2, mana:2, crystalCost:1440, daysOfTraining: 90, KnowledgePoints:15, successes:45} 
        case Rank.Gold5:
            return {points:1, life:2, mana:2, crystalCost:2330, daysOfTraining: 90, KnowledgePoints:15, successes:45} 
        case Rank.Apex1:
            return {points:1, life:3, mana:3, crystalCost:3770, daysOfTraining: 180, KnowledgePoints:15, successes:120}
        case Rank.Apex2:
            return {points:1, life:3, mana:3, crystalCost:6100, daysOfTraining: 180, KnowledgePoints:15, successes:120}
        case Rank.Apex3:
            return {points:1, life:3, mana:3, crystalCost:9870, daysOfTraining: 180, KnowledgePoints:15, successes:120}
        case Rank.Apex4:
            return {points:1, life:3, mana:3, crystalCost:15970, daysOfTraining: 180, KnowledgePoints:15, successes:120}
        case Rank.Apex5:
            return {points:1, life:3, mana:3, crystalCost:25840, daysOfTraining: 180, KnowledgePoints:15, successes:120}
        case Rank.SmallerStar:
            return {points:3, life:5, mana:5, crystalCost:41810, daysOfTraining: 365, KnowledgePoints:30, successes:250}
        case Rank.MediumStar:
            return {points:3, life:5, mana:5, crystalCost:67650, daysOfTraining: 730, KnowledgePoints:30, successes:450}
        case Rank.BiggerStar:
            return {points:3, life:5, mana:5, crystalCost:109460, daysOfTraining: 1095, KnowledgePoints:30, successes:650}
        case Rank.Supernova:
            return {points:3, life:7, mana:7, crystalCost:177110, daysOfTraining: 1825, KnowledgePoints:45, successes:1000}
        case Rank.Illuminated:
            return {points:3, life:10, mana:10, crystalCost:286570, daysOfTraining: 2555, KnowledgePoints:60, successes:1400}
    }
}

export function GetTotalLifeDices(rank: Rank) {
    let diceNum = 0;

    for (let r in Rank) {
        if (parseRank(r) <= rank) {
            diceNum += GetRankValues(parseRank(r)).life
        }
    }

    return diceNum;
}

export function GetTotalManaDices(rank: Rank) {
    let diceNum = 0;

    for (let r in Rank) {
        if (parseRank(r) <= rank) {
            diceNum += GetRankValues(parseRank(r)).mana
        }
    }

    return diceNum;
}

export function GetTotalKnowledge(rank: Rank) {
    let diceNum = 0;

    for (let r in Rank) {
        if (parseRank(r) <= rank) {
            diceNum += GetRankValues(parseRank(r)).KnowledgePoints
        }
    }

    return diceNum;
}

function parseRank(str: string): Rank | undefined {
    const enumKey: keyof typeof Rank = str as keyof typeof Rank;
    const enumValue: Rank = Rank[enumKey];
    return enumValue;
}

export default Rank