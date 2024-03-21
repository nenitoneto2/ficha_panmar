import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Elements } from 'src/app/shared/enums/element';
import { LeveledRank, Rank } from 'src/app/shared/enums/rank';
import { Species } from 'src/app/shared/enums/specie';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit{
  characterForm: FormGroup
  leveledRanks = Object.values(LeveledRank)
  ranks = Object.values(Rank)
  species = Object.values(Species)
  hanaku = 'Hanaku'
  magicElements = Object.values(Elements)

  ngOnInit(): void {
    this.initForm()
  }

  onSubmit(){
    console.log(this.characterForm)
  }

  GetMaxHP(){
    return this.characterForm.value.lifeRolled
  }

  GetMaxMana(){
    return this.characterForm.value.manaRolled
  }

  GetLandMovement(){
    return this.characterForm.value.landMovement
  }

  GetSwimMovement(){
    return this.characterForm.value.swimMovement
  }

  GetFlyMovement(){
    return this.characterForm.value.flyMovement
  }

  GetBurrowMovement(){
    return this.characterForm.value.burrowMovement
  }

  get statsControls(){
    return(this.characterForm.get('stats') as FormArray).controls
  }

  get skillsControls(){
    return(this.characterForm.get('skills') as FormArray).controls
  }

  get meridiansControls(){
    return(this.characterForm.get('meridians') as FormArray).controls
  }

  private initForm(){
    let name = 'Character Name'
    let rank = ''
    let species = ''
    let symbol = ''
    let primaryElement = ''
    let secondaryElement = ''
    let PO = 0
    let crystals = 0
    let hairColor = ''
    let height = ''
    let eyeColor = ''
    let weight = 0
    let lifeRolled = 0
    let lifeCurrent = 0 // remember to add lifeTotal as a calc
    let manaRolled = 0
    let manaCurrent = 0 // remember to add manaTotal as a calc
    let landMovement = 0 // remember to add movement as a calc
    let swimMovement = 0 // remember to add movement as a calc
    let flyMovement = 0 // remember to add movement as a calc
    let burrowMovement = 0 // remember to add movement as a calc
    let deathMark = 0 
    let trainingSucesses = 0

    let combatant = 0
    let keen = 0
    let protector = 0
    let magic = 0
    let create = 0
    let eloquence = 0

    let bonusCombatant = 0
    let bonusKeen = 0
    let bonusProtector = 0
    let bonusMagic = 0
    let bonusCreate = 0
    let bonusEloquence = 0

    let terrain = ''
    let sacred = ''
    let solar = ''
    let heart = ''
    let neck = ''
    let thirdEye = ''
    let crown = ''
    let aligning = ''

    let martial = 0
    let arcane = 0
    let sneak = 0
    let creation = 0
    let concentration = 0
    let act = 0
    let meridians = 0
    let acrobatics = 0
    let training = 0
    let athletics = 0
    let presence = 0
    let perception = 0
    let world = 0
    let medicine = 0
    let smoothTalk = 0
    let sleightOfHand = 0
    let survival = 0
    let investigate = 0
    let monsters = 0
    let cultural = 0
    let will = 0


    this.characterForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'rank': new FormControl(rank, Validators.required),
      'species': new FormControl(species, Validators.required),
      'symbol': new FormControl(symbol),
      'primaryElement': new FormControl(primaryElement, Validators.required),
      'secondaryElement': new FormControl(secondaryElement, Validators.required),
      'PO': new FormControl(PO, Validators.required),
      'crystals': new FormControl(crystals, Validators.required),
      'hairColor': new FormControl(hairColor),
      'height': new FormControl(height),
      'eyeColor': new FormControl(eyeColor),
      'weight': new FormControl(weight),
      'lifeRolled': new FormControl(lifeRolled, Validators.required),
      'lifeCurrent': new FormControl(lifeCurrent, Validators.required),
      'manaRolled': new FormControl(manaRolled, Validators.required),
      'manaCurrent': new FormControl(manaCurrent, Validators.required),
      'landMovement': new FormControl(landMovement, Validators.required),
      'swimMovement': new FormControl(swimMovement, Validators.required),
      'flyMovement': new FormControl(flyMovement, Validators.required),
      'burrowMovement': new FormControl(burrowMovement, Validators.required),
      'deathMark': new FormControl(deathMark),
      'trainingSuccesses': new FormControl(trainingSucesses),

      'combatant': new FormControl(combatant, Validators.required),
      'bonusCombatant': new FormControl(bonusCombatant, Validators.required),
      'keen': new FormControl(keen, Validators.required),
      'bonusKeen': new FormControl(bonusKeen, Validators.required),
      'protector': new FormControl(protector, Validators.required),
      'bonusProtector': new FormControl(bonusProtector, Validators.required),
      'magic': new FormControl(magic, Validators.required),
      'bonusMagic': new FormControl(bonusMagic, Validators.required),
      'create': new FormControl(create, Validators.required),
      'bonusCreate': new FormControl(bonusCreate, Validators.required),
      'eloquence': new FormControl(eloquence, Validators.required),
      'bonusEloquence': new FormControl(bonusEloquence, Validators.required),

      'terrain': new FormControl(terrain, Validators.required),
      'sacred': new FormControl(sacred, Validators.required),
      'solar': new FormControl(solar, Validators.required),
      'heart': new FormControl(heart, Validators.required),
      'neck': new FormControl(neck, Validators.required),
      'thirdEye': new FormControl(thirdEye, Validators.required),
      'crown': new FormControl(crown, Validators.required),
      'aligning': new FormControl(aligning, Validators.required),

      'martial' : new FormControl(martial, Validators.required),
      'arcane' : new FormControl(arcane, Validators.required),
      'sneak' : new FormControl(sneak, Validators.required),
      'creation' : new FormControl(creation, Validators.required),
      'concentration' : new FormControl(concentration, Validators.required),
      'act' : new FormControl(act, Validators.required),
      'meridians' : new FormControl(meridians, Validators.required),
      'acrobatics' : new FormControl(acrobatics, Validators.required),
      'training' : new FormControl(training, Validators.required),
      'athletics' : new FormControl(athletics, Validators.required),
      'presence' : new FormControl(presence, Validators.required),
      'perception' : new FormControl(perception, Validators.required),
      'world' : new FormControl(world, Validators.required),
      'medicine' : new FormControl(medicine, Validators.required),
      'smoothTalk' : new FormControl(smoothTalk, Validators.required),
      'sleightOfHand' : new FormControl(sleightOfHand, Validators.required),
      'survival' : new FormControl(survival, Validators.required),
      'investigate' : new FormControl(investigate, Validators.required),
      'monsters' : new FormControl(monsters, Validators.required),
      'cultural' : new FormControl(cultural, Validators.required),
      'will' : new FormControl(will, Validators.required),
    })
  }
}
