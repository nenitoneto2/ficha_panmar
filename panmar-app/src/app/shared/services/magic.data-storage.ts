import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

const path: string = 'https://pan-mar-development-default-rtdb.firebaseio.com/magic/'

Injectable()
export class MagicDataStorageService{

    constructor(private http: HttpClient){

    }

}