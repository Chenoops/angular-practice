import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) { }
  weather: Array<string> =  ['thunderstorm','Foggy','Sunny','Windy']
  addListFun( str:string) {
    this.weather.push(str)
  }

  @ViewChild('weatherName') child:any
  addFun() {
    this.child.addBtnFun()
  }

  ngOnInit(): void {
    console.log(this.routeInfo.snapshot.queryParams);
    // console.log(this.routeInfo);

  }




}
