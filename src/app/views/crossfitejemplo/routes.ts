import { Routes } from '@angular/router';
import { CrossfitejemploComponent } from './crossfitejemplo.component'



export const routes: Routes = [
  {
    path: '',
    component: CrossfitejemploComponent,
    data: {
      title: 'crossfit'
    }
  }
];