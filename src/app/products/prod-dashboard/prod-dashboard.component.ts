import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {


  prodArr: Array<Iproducts> = [];
  constructor(private _prodServices: ProductsService) { }

  ngOnInit(): void {
    this.prodArr = this._prodServices.getAllProd()
  }

}
