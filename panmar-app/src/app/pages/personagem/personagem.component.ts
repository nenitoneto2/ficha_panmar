import { AfterViewChecked, Component, OnInit, StaticClassSansProvider, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonagemBasisComponent } from 'src/app/components/personagem-basis/personagem-basis.component';
import { Character } from 'src/app/shared/classes/character/character';

import { CharacterDataStorageService } from 'src/app/shared/services/character.data-storage';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit, AfterViewChecked{
  @ViewChild('f', { static: false }) slForm: NgForm;
  @ViewChild('characterBasis') characterBasis: PersonagemBasisComponent
  character: Character
  characterForm: FormGroup

  id:number
  isNewCharacter = false

  constructor(private route: ActivatedRoute, private charService: CharacterService, 
    private charDataStoreage: CharacterDataStorageService,
    private router: Router,){
    
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.isNewCharacter = params['id'] == null
      this.initCharacter()
    })
    
    
  }

  ngAfterViewChecked(): void {
    this.characterBasis.characterName = this.character.name
    this.characterBasis.formLevelRank = this.character.rank
    this.characterBasis.characterSpecie = this.character.species
    this.characterBasis.primaryElement = this.character.primaryElement
    this.characterBasis.secondaryElement = this.character.secondaryElement

    this.characterBasis.onValueChange.subscribe((basicInfo) => {
      this.character.name = basicInfo.characterName,
      this.character.rank = basicInfo.formLevelRank,
      this.character.species = basicInfo.characterSpecie,
      this.character.primaryElement = basicInfo.primaryElement,
      this.character.secondaryElement = basicInfo.secondaryElement
    })
  }

  onSubmit(){
    if(this.isNewCharacter){
      this.charService.AddCharacter(this.character);
      this.charDataStoreage.storeCharacters()
    this.router.navigate(['personagens']);
    }
    else{
      this.charService.UpdateCharacter(this.id, this.character)
      this.charDataStoreage.storeCharacters()
    }
    
  }

  

  private initCharacter(){
    this.character= this.isNewCharacter ? new Character() : this.charService.GetCharacter(this.id)
  
    this.characterForm = new FormGroup({
      'name': new FormControl(this.character.name, Validators.required),
      'rank': new FormControl(this.character.rank, Validators.required),
      'species': new FormControl(this.character.species, Validators.required),
      'primaryElement': new FormControl(this.character.primaryElement, Validators.required),
      'secondaryElement': new FormControl(this.character.secondaryElement),
      'PO': new FormControl(this.character.PO),
      'Crystal': new FormControl(this.character.Crystals),
      'characterDescription': new FormControl(this.character.characterDescription),
    })
  }
}
