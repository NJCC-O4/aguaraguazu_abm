import { Routes } from '@angular/router';
import { DetallePrimeravistaComponent } from './detalle-primeravista.component';


export const routes: Routes = [
  {
    path: '',
    component: DetallePrimeravistaComponent,
    data: {
      title: 'inicio'
    }
  }
];
