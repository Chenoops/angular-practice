// RxJS v6+
import { timer } from 'rxjs';

test('timer', async () => {
  // 1秒后发出0，然后结束，因为没有提供第二个参数
  const source = timer(1000);
  // 输出: 0
  const subscribe = source.subscribe((val) => console.log(val));

  const a = timer(2000, 1000);

  expect('X').toBe('X')
});
