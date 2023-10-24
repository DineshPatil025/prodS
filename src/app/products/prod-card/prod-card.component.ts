import { Component, Input, OnInit } from '@angular/core';
import { ProductsStatus } from 'src/app/shared/const/prodEnum';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {

  @Input() prodObj !: Iproducts;

  prodStatus !: ProductsStatus;

  constructor(private _prodSrvice: ProductsService,
    private _snackBar : SnackbarService
    ) { }

  ngOnInit(): void {
  }

  onProgressUpd() {
    this._prodSrvice.updateStatus(this.prodObj.id, ProductsStatus.Inprogress)
    this._snackBar.openSnackBar(` ${this.prodObj.pname} is in ${this.prodObj.pstatus}`,'close')


  }
  onDispatchUpd(){
    this._prodSrvice.updateStatus(this.prodObj.id, ProductsStatus.Dispached)
    this._snackBar.openSnackBar(`${this.prodObj.pname} is  ${this.prodObj.pstatus}`,'close')

  }

  onDelivUpd(){
    this._prodSrvice.updateStatus(this.prodObj.id, ProductsStatus.Delivered)
    this._snackBar.openSnackBar(` ${this.prodObj.pname} is ${this.prodObj.pstatus}`,'close')
  }

  // onStatusUpdate(prodStatus:any){
  //   this._prodSrvice.updateStatus(this.prodObj.id, prodStatus)
  //   console.log(prodStatus);
    
    
  // }

}
