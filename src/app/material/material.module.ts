import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule } from '@angular/material/divider'




let matModArr = [
  MatButtonModule,
  MatSnackBarModule,
  MatCardModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModArr
  ],
  exports: [
    ...matModArr
  ]
})
export class MaterialModule { }
