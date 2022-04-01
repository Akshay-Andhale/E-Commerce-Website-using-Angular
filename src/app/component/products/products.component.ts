import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist:any;
  public filterCategory:any;
  prodId :any;
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productlist=res;
      console.log(this.productlist)
      this.filterCategory = res

    this.productlist.forEach((a:any)=>{
      if(a.category==="women's clothing" || a.category==="men's clothing"){
        a.category = "clothing"
      }
      Object.assign(a,{quantity:1,total:a.price})
    })
    })
  }

  addToCart(item:any){
    this.cartservice.addToCart(item)
  }

  filter(category:string){
    this.filterCategory = this.productlist.filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
    })
  }

  sendId(id:any){
    this.prodId = id
    
  }

}
