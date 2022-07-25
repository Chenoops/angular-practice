import { Component, OnInit } from '@angular/core';
//
// import { ListService } from '../serves/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // 在组件中注册提供商 ??
  // providers: [ListService]
})
export class HomeComponent implements OnInit {
// 这个构造函数要求注入一个ListService类的实例，并把它存到名为ListService的私有属性中。
  // constructor(private listService : ListService) { }
  constructor() { }
  list: Array<string> | undefined
  ngOnInit(): void {
    // this.list=this.listService.getList()
  }
  addGit() {
    // this.listService.addList('Git')
  }
}
