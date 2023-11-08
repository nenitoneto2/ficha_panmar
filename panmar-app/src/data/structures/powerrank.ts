enum Rank {
    Base1,
    Base2,
    Base3,
    Bronze1,
    Bronze2,
    Bronze3,
    Silver1,
    Silver2,
    Silver3,
    Gold1,
    Gold2,
    Gold3,
    Gold4,
    Gold5,
    Apex1,
    Apex2,
    Apex3,
    Apex4,
    Apex5,
    SmallerStar,
    MediumStar,
    BiggerStar,
    Supernova,
    Illuminated
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


export default Rank