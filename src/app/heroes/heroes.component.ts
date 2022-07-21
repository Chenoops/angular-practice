import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // id: number
  // name: string
  // url: string
  // constructor() {
  //   this.id=0;
  //   this.name=''
  //   this.url=''
  // }

  // constructor(
  //   public id: number,
  //   public name: string,
  //   public url: string,
  //   public alexa?: number
  // ) {}??

  constructor() {}
  box='hello'
  name: string = 'www'
  isActive=true
  currentItem: number=3
  colors: Array<string> = ['red','orange','pink','green']
  title: string = ''
  age: FormControl= new FormControl('')
  // e要指明类型
  clickFun(e:Event) {
    console.log(e);

  }
  inputChange(e:Event) {
    console.log(e);

  }
  getUserName(a:string) {
    console.log(a);

  }
  ageChange() {
    // setValue更新表单控件的值
    this.age.setValue(100)
  }

  ngOnInit(): void {
  }


}
