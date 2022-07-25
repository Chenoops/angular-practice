import { Injectable } from '@angular/core';
import { UserModule } from '../user/user.module'


@Injectable({
  // 指定 Angular 应该在根注入器中提供该服务。 null/模块名
  providedIn: 'root'
  // providedIn: UserModule
})
export class ListService {
// 这个构造函数要求注入一个ListService类的实例，并把它存到名为ListService的私有属性中。
  constructor() { }
  list: Array<string> = ['react','angular','vue']
  getList() {
    return this.list
  }
  addList(str:string) {
    this.list.push(str)
  }

}
