import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { CrisisListComponent } from './crises-list/crises-list.component';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [],
      },
      {
        path: ':id',
        canDeactivate: [CanDeactivateGuard],
        component: CrisisDetailComponent,
        resolve: {
          crisis: CrisisDetailResolverService
        }
      },
      {
        path: '',
        component: CrisisCenterHomeComponent
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }