import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, Observer} from 'rxjs';
import { switchMap,distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }
  // todos$: Observable<Params> = this.route.params.pipe()
  todos$: Observable<Params> = this.route.params


  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });


  name=''
  ngOnInit() {

    console.log(this.route.params);

    this.route.params.subscribe(params => {
      console.log(params);
    })

  }
}
