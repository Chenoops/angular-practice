import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
// concat静态方法
import { Observable, Observer,of,concat,interval,from,timer,fromEvent} from 'rxjs';
import { map,mapTo,switchMap } from 'rxjs/operators'
// pipe
// import { concat } from "rxjs/operators";



// of
const source = of({name: 'Jack'},[1,2,3],function hello() {
  return 'Hero'
});
const subscribe = source.subscribe(val => console.log(val))

// concat
const sourceOne = of(1, 2, 3);
const sourceTwo = of(4, 5, 6);
// 先发出 sourceOne 的值，当完成时订阅 sourceTwo 不推荐使用
// const example = sourceOne.pipe(concat(sourceTwo));
const example = concat(sourceOne,sourceTwo)
// 输出: 1,2,3,4,5,6
const subscribe1 = example.subscribe(val =>
  console.log('Example: Basic concat:', val)
);


// interval 基于给定时间间隔发出数字序列。
const a = interval(1000)
// const subscribe11 = a.subscribe(val => console.log(val));

// 当 source 永远不完成时，随后的 observables 永远不会运行
// const b = concat(interval(1000), of('This', 'Never', 'Runs'));
// 输出: 0,1,2,3,4....
// const subscribe111 = b.subscribe(val =>
//   console.log(
//     'Example: Source never completes, second observable never runs:',
//     val
//   ))

// from 将数组、promise 或迭代器转换成 observable
const promiseSource = from(new Promise(resolve => resolve('heyyyyy---------')))
const promiseSubscribe = promiseSource.subscribe( val => console.log(val))
const myMap = new Map()
myMap.set(1,"Hi")
myMap.set(2,"Hello")
const mapSource = from(myMap)
const mapSubscribe = mapSource.subscribe(val => console.log(val))
const strSource = from('Hello Hello')
const strSubscribe = strSource.subscribe(val => console.log(val))

// map 对源 observable 的每个值应用投射函数。
const c = from([6,7,8,9,10])
const cExample = c.pipe(map(val => val + 10))
const cSubscribe = cExample.subscribe(val => console.log(val))
const d = from([
  {name: 'sun',color: 'orange'},
  {name: 'moon',color: 'yellow'},
])
const dExample = d.pipe(map(({name}) => name))
//
const dSub = dExample.subscribe(console.log)

// timer
const eExample = timer(2000)
const eSub = eExample.subscribe(console.log)

// switchMap
const f = fromEvent(document,'click')
const fEx = f.pipe(
  switchMap(
    val => interval(2000).pipe(mapTo('I made it!'))
  )
)
const fSub = fEx.subscribe(console.log)

//fromEvent
const aa = fromEvent(document,'click')
const aaEx = aa.pipe(map((event) => `event time: ${event.timeStamp}`))
const aaSub = aaEx.subscribe(console.log)

// mapTo
const g = fromEvent(document,'click')
const gEx = g.pipe(mapTo('Good Morning'))
const gSub = gEx.subscribe(console.log)

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
