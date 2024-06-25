import { Routes } from '@angular/router';
import { BmiCalculatorComponent } from './calculator/calculator.component';
import { DuplicatorComponent } from './duplicator/duplicator.component';

import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
    {path: 'calculator', component: BmiCalculatorComponent},
    {path: 'calc', component: BmiCalculatorComponent},

    {path: 'duplicator', component: DuplicatorComponent},
    {path: 'dup', component: DuplicatorComponent},

    {path: '', component: HomepageComponent},
];
