import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor(private productService:ProductService) { }
  productsArray!:product[]
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
