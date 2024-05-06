import { Injectable } from '@angular/core';
import { MagicType } from '../interfaces/magic/magic-type';
import { HttpClient} from '@angular/common/http';
import { MagicEffect,newMagic,MagicRange,MagicRank,MagicActionSpeed,MagicDuration } from '../interfaces/magic/magic-interfaces'


@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private httpService: HttpClient) { }
  getMagicTypes() {
    return this.httpService.get<MagicType[]>("../../../assets/data/magic-types.json");
  }
  getMagicEffects() {
    return this.httpService.get<MagicEffect[]>("../../../assets/data/magic-effects.json");
  }
  getMagicRange() {
    return this.httpService.get<MagicRange[]>("../../../assets/data/range.json");
  }
  getMagicDuration() {
    return this.httpService.get<MagicDuration[]>("../../../assets/data/duration.json");
  }
  getMagicActionSpeed() {
    return this.httpService.get<MagicActionSpeed[]>("../../../assets/data/action-speed.json");
  }
  getMagicRank() {
    return this.httpService.get<MagicRank[]>("../../../assets/data/magic-rank.json");
  }
}
