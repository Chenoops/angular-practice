import {of} from 'rxjs'
import {scan} from 'rxjs/operators'

const source = of(1,2,3)
const ex = source.pipe(
  scan((acc,curr) => acc+curr,0)
)
const sub = ex.subscribe(console.log)
