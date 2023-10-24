import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnck: MatSnackBar) { }

  openSnackBar(msg: string, action: string) {
    this._matSnck.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }


}
