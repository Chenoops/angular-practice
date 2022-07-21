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


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent
  ],
  // 声明组件需要的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
