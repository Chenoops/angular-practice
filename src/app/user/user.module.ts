import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../serves/list.service';



@NgModule({
  providers: [ListService],
  declarations: [
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
