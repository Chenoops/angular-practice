// 实例方法
// import {merge} from 'rxjs/operators'
// import {interval} from 'rxjs'
// const first = interval(2500)
// const second = interval(1000)
// const ex = first.pipe(merge(second))
// const sub= ex.subscribe(console.log)

// 静态方法
import {merge,interval} from 'rxjs'
import { mapTo } from 'rxjs'
const first = interval(2500)
const second = interval(2000)
const third = interval(1500)
const fourth = interval(1000)
const ex = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
)
const sub = ex.subscribe(console.log)
