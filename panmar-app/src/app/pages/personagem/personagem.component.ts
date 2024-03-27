import { Component, OnInit, StaticClassSansProvider, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/shared/classes/character/character';
import { DeathSaves } from 'src/app/shared/classes/character/death-saves';
import { Meridians } from 'src/app/shared/classes/character/meridians/meridians';
import { Skills } from 'src/app/shared/classes/character/skills/skills';
import { Stats } from 'src/app/shared/classes/character/stats/stats';
import { Health } from 'src/app/shared/classes/character/vitals/health';
import { Mana } from 'src/app/shared/classes/character/vitals/mana';
import { Elements } from 'src/app/shared/enums/element';
import { LeveledRank, Rank } from 'src/app/shared/enums/rank';
import { Species } from 'src/app/shared/enums/specie';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit{
  @ViewChild('f', { static: false }) slForm: NgForm;
  leveledRanks = Object.values(LeveledRank)
  ranks = Object.values(Rank)
  species = Object.values(Species)
  hanaku = 'Hanaku'
  magicElements = Object.values(Elements)
  character: Character
  characterForm: FormGroup

  id:number
  isNewCharacter = false

  constructor(private route: ActivatedRoute, private charService: CharacterService){
    
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.isNewCharacter = params['id'] == null
      this.initCharacter()
    })
    
  }

  onSubmit(){
    console.log(this.characterForm)
  }

  

  private initCharacter(){
    this.character= this.isNewCharacter ? new Character() : this.charService.GetCharacter(this.id)
  
    this.characterForm = new FormGroup({
      'name': new FormControl(this.character.name, Validators.required),
      'rank': new FormControl(this.character.rank, Validators.required),
      'species': new FormControl(this.character.species, Validators.required),
      'primaryElement': new FormControl(this.character.primaryElement, Validators.required),
      'secondaryElement': new FormControl(this.character.secondaryElement),
    })
  }
}
