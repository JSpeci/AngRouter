// #docplaster
// #docregion
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { InMemoryDataService } from '../in-memory-data.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(InMemoryDataService.crises);

  constructor(private messageService: MessageService) { }

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    alert("getCrisis")
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id)!)
    );
  }

  // #enddocregion
  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = { id: CrisisService.nextCrisisId++, name };
      InMemoryDataService.crises.push(crisis);
      this.crises$.next(InMemoryDataService.crises);
    }
  }
  // #docregion
}