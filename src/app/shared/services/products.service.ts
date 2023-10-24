import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';
import { ProductsStatus } from '../const/prodEnum';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productArray: Array<Iproducts> = [
    {
      pname: "Samsung 31",
      pdetails: "Mobile 128 6",
      pstatus: ProductsStatus.Inprogress,
      id: 'qwerty3456wertyu'
    },
    {
      pname: "Samsung S32",
      pdetails: "Mobile 128 6",
      pstatus: ProductsStatus.Dispached,
      id: 'ghjkl5678rtyui'
    }
  ]

  constructor( private _snackBar : SnackbarService) {

  }

  getAllProd(): Array<Iproducts> {
    return this.productArray;
  }
  
  addProd(prod: Iproducts) {
    this.productArray.push(prod);
    this._snackBar.openSnackBar(`the product ${prod.pname} is added`, 'close')
  }

  updateStatus(id : string, updatedStatus : ProductsStatus){

    for (const prod of this.productArray) {
      if(prod.id === id){
        prod.pstatus = updatedStatus
        break;      
      }
    }
  }
}
