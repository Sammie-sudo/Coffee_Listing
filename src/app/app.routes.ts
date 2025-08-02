import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'c',
        loadComponent: () => import('./main-page/main-page').then(m => m.MainPage)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'c'
    }
];
