import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ParamMap, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, mergeMap, Observable, of, take } from 'rxjs';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Crisis | Observable<Crisis> | Promise<Crisis> {
    const id = route.paramMap.get("id")!;
    const c = this.cs.getCrisis(id)
      .pipe(
        take(1),
        mergeMap(crisis => {
          if (crisis) {
            return of(crisis);
          } else { // id not found
            this.router.navigate(['/crisis-center']);
            return EMPTY;
          }
        })
      );

    return c;
  }


}
