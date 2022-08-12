import { Injectable } from '@angular/core';
import { UserModule } from '../user/user.module'

import {Hero} from '../hero'
import {HEROES} from '../mock-hero'

import { Observable,of } from 'rxjs'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler.js';

import { MessageService } from '../message.service';


@Injectable({
  // 指定 Angular 应该在根注入器中提供该服务。 null/模块名
  providedIn: 'root'
  // providedIn: UserModule
})
export class ListService {
  constructor(
    public messageService: MessageService
  ) { }
  list: Array<string> = ['react','angular','vue']
  getList() {
    return this.list
  }
  addList(str:string) {
    this.list.push(str)
  }
  // getHero(): Hero[] {
  //   return HEROES
  // }

  getHero(): Observable<Hero[]> {
    const hero = of(HEROES)
    this.messageService.add('heroService: fetched heroes')
    return hero
  }
}
