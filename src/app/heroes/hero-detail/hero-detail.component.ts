import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero$!: Observable<Hero>;
  @Input() hero!: Hero;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: HeroService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const r = this.service.getHero(params.get('id')!)
        this.hero$ = r;
        return r;
      }
      )
    ).subscribe(i => this.hero = i);
  }

  gotoHeroes(hero?: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId }]);
  }

  // save(): void {
  //   if (this.hero$) {
  //     this.heroService.updateHero(this.hero$);
  //   }
  // }
}
