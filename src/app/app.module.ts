import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ReactiveFormsModule动态表单控件
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
// ListService自动生成的命名
import { ListService } from './serves/list.service';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
//
import {UserModule} from './user/user.module';
import { MyheroesComponent } from './myheroes/myheroes.component'
// aui
import { ButtonModule,InputModule } from '@alauda/ui';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    MyheroesComponent,
    HeroDetailComponent,
    MessageComponent
  ],
  // 声明组件需要的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //
    UserModule,
    // aui
    ButtonModule,
    InputModule
  ],
  //
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
