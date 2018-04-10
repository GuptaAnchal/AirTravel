import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Flights } from '../../interfaces/flightDetails';
@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css']
})
export class DisplayContainerComponent implements OnInit {
  @Output() fly = new EventEmitter<boolean>();
  @Input() refinedPrice: number = 10000;
  /**
   * Page variables
   */
  showLoader: boolean = true;
  public fly1Way: Flights;
  public fly2Way: Flights;
  public total: number = 0;
  constructor(public _searchService: SearchService) {
  }

  ngOnInit() {
    setTimeout(()=>{
      this.showLoader = false;
    },2000);
  }
  get1Way(input:Flights){
    this.fly1Way= input;
    this.sum( this.fly1Way.amount);
  }
  get2Way(input:Flights){
    this.fly2Way= input;
    this.sum( this.fly2Way.amount);
  }
  /**
   * Adding the cost for two way flights 
   */
  sum(num:any){
    this.total = this.total + parseFloat(num);
    console.log("amount", this.total)
  }

  /**
   * Click handler for book button
   */
   public bookThisFlight() {
    this.fly.emit(true);
  }
}
