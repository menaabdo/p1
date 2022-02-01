import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  productsArray!: product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getAll()
  }
  getAll(){
    this.productService.getAllProducts().subscribe(
  
      (res)=>{this.productsArray=res.product;
        for(let i=0;i<this.productsArray.length;i++){
          this.productsArray[i].rep=1;
        }
      
      }
        ,
      (err)=>{console.log(err)}
    )
    
  }

}
