import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../info/info.component'
import { AboutComponent } from '../about/about.component'
import { AppComponent } from '../app.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'info',
        component: InfoComponent,
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
