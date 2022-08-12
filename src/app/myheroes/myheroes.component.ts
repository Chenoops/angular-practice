import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { ListService } from '../serves/list.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.css']
})
export class MyheroesComponent implements OnInit {

  constructor(
    private heroService: ListService,
    private messageService: MessageService
  ) { }

  hero: Hero[]= []
  selectedHero?: Hero

  ngOnInit(): void {
    this.getHero()
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.messageService.add(`MyheroComponent: Selected hero id=${hero.id}`)
  }
  getHero() {
    this.heroService.getHero()
    .subscribe(hero => this.hero = hero)
  }
}
