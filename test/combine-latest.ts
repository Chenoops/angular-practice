import {timer,combineLatest} from 'rxjs'
const t1 = timer(1000,4000)
const t2 = timer(2000,4000)
const t3 = timer(3000,4000)
const ex = combineLatest(
  t1,t2,t3,
  (v1,v2,v3) => {
    return `
    timerOne Latest ${v1},
    timerTwo Latest ${v2},
    timerThree Latest ${v3}
    `
  }
)
const sub = ex.subscribe(console.log)
