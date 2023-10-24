import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsStatus } from 'src/app/shared/const/prodEnum';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {

  prodForm !: FormGroup

  constructor(private _uuidService : UuidService,
    private _prodService : ProductsService
    
    ) { }

  ngOnInit(): void {
    this.createProdForm()
  }

  createProdForm() {
    this.prodForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pdetails : new FormControl(null, [Validators.required]),
    })
  }

  onProdAdd(){
    if(this.prodForm.valid){
    let newProd : Iproducts = {...this.prodForm.value, id : this._uuidService.create_UUID(),pstatus : ProductsStatus.Inprogress}
    this.prodForm.reset();

    console.log(newProd);
    this._prodService.addProd(newProd);
    
    }
    
  }

}
