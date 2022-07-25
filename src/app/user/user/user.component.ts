import { Component, OnInit } from '@angular/core';
// import { ListService } from 'src/app/serves/list.service';
// import { ListService } from '../../serves/list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  // constructor(private listService:ListService) { }

  // list: Array<string> | undefined
  ngOnInit(): void {
    // this.list=this.listService.getList()

  }
  addGit() {
    // this.listService.addList('git')
  }
}

