import { interval } from "rxjs";
import { mapTo } from "rxjs/operators";

const source = interval(3000)
const ex = source.pipe(mapTo("Good Night"))
const sub = ex.subscribe(console.log)
