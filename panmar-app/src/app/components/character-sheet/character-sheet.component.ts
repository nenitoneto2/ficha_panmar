import { Component } from '@angular/core';
import Rank from 'src/data/structures/powerrank';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Symbols from 'src/data/structures/symbols';
import LivingCharacter, { CharacterOrigins, CharacterStats } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import { Proficiencies } from 'src/data/structures/proficiencies';
//import { KnowledgeCollection } from 'src/data/structures/knowledge';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {
  
  character: Character = {
    specie: PlayableSpecies.Hanaku,
    element: [MagicElement.Lightning, MagicElement.Reflection],
    rank: Rank.Base1,
    stats: new CharacterStats(0, 0, 0, 0, 0, 1),
    talents: [Talents.Meditate, Talents.MagicalLearn, Talents.SmallTricks],
    origins: CharacterOrigins.OrchidInstitute,
    weapons: [],
    inventory: [],
    symbols: Symbols.None,
    proficiencies: new Proficiencies([]),
    styles: [],
    magics: [],
    //knowledges: new KnowledgeCollection(),
    name: "Aurelius Nocturne"
    }

  livingCharacher: LivingCharacter ={
    characterInfo: this.character,
    lifeDices: GetTotalLifeDices(this.character.rank),
    manaDices: GetTotalManaDices(this.character.rank),
    talentPoints: 1,
    maxLife: 4,
    currentLife: 2,
    maxMana: 8,
    currentMana: 4,
    knowledge: GetTotalKnowledge(this.character.rank)
    }
}
