import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[] = [];
  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(private crisisService: CrisisService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises()
      })
    );
    this.crisisService
      .getCrises()
      .subscribe(heroes => this.crises = heroes);
  }
}
