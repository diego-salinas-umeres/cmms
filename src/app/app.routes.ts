import { Routes } from '@angular/router';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component'; //agregar componentes 

export const routes: Routes = [
    { path: 'c1', component: C1Component },
    { path: 'c2', component: C2Component }
];
