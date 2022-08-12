import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
    // 必须是公共属性，模版绑定中会用到
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
