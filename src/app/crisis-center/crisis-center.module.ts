import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crises-list/crises-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule { }
