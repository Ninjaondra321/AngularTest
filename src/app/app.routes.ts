import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DuplicatorComponent } from './duplicator/duplicator.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ProductsHomepageComponent } from './products-homepage/products-homepage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuoteComponent } from './quote/quote.component';


export const routes: Routes = [
    {path: 'calculator', component: CalculatorComponent},
    {path: 'calc', redirectTo:"calculator"},

    {path: 'duplicator', component: DuplicatorComponent},
    {path: 'dup', redirectTo:"duplicator"},
    
    {path: 'products', component: ProductsHomepageComponent},
    {path: 'prod', redirectTo:"products"},
    
    {path: 'products/:productName', component: ProductDetailComponent},
    
    {path: 'quote', component: QuoteComponent},

    {path: '', component: HomepageComponent},
];
