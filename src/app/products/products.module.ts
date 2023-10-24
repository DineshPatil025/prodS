import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdDashboardComponent } from './prod-dashboard/prod-dashboard.component';
import { ProdFormComponent } from './prod-form/prod-form.component';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProdDashboardComponent,
    ProdFormComponent,
    ProdCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ProdDashboardComponent
  ]
})
export class ProductsModule { }
