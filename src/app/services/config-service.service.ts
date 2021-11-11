import { Injectable } from '@angular/core';
import {IConfig} from '../classDTO/config/config,interface';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
  constructor() { }

  getConfig(): Observable< IConfig> {
      return of( {
          adminName: 'Arthur',
          premissions: ['edit', 'create'],
      });
  }
}
