import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexFiltersComponent } from './spacex-filters/spacex-filters.component';
import { SpacexDetailsComponent } from './spacex-details/spacex-details.component';

const routes: Routes = [

    {
        path: 'spacex-details',
        component: SpacexDetailsComponent
    },
    {
        path: '',
        redirectTo: 'spacex-details',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }