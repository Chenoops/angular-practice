import { NgModule } from '@angular/core';
//
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'heros',
        component: HeroesComponent,
      }
    ]
  },
  {
    path: 'second-component/:id',
    component: SecondComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
