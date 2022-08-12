// SecondComponent中
import { fromEvent } from "rxjs";
import {map} from 'rxjs/operators'

const a = fromEvent(document,'click')
const aEx = a.pipe(map((event) =>`event time: ${event.timeStamp}`))
const aSub = aEx.subscribe(console.log)

