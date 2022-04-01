import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  detailsList:any;
  detailsId:any;
  constructor(private api:ApiService,private AR:ActivatedRoute,private cartservice:CartService) { }

  ngOnInit(): void {
    // this.AR.params.subscribe(res=>{
    //   this.detailsId = res;
    //   // console.log(this.detailsId)
    //   this.api.getproductDetails(this.detailsId).subscribe(final=>{
    //     console.log(final)
    //     this.detailsList=final
    //   })
    // })
    let id =this.AR.snapshot.params['id']
    this.api.getproductDetails(id).subscribe(final=>{
      console.log(final)
      this.detailsList = final
    })
  }

  addToCart(item:any){
    this.cartservice.addToCart(item)
  }
  


}
