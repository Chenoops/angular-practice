import {timer,interval} from 'rxjs'
import {switchMap} from 'rxjs/operators'

const a = timer(0,5000)
const aEx = a.pipe(switchMap(() => interval(500)))
// const aSub = aEx.subscribe(console.log)

