import { Routes } from '@angular/router';
import { CelsiusComponent } from './celsius/celsius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';

const routes: Routes = [
  { path: '', redirectTo: '/celsius', pathMatch: 'full' },
  { path: 'celsius', component: CelsiusComponent },
  { path: 'fahrenheit', component: FahrenheitComponent },
];

export { routes };
