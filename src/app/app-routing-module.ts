import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainComponent } from './components/main/main.component'
import { DirectorComponent } from './components/director/director.component'
import { ActorComponent } from './components/actor/actor.component'
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'
import { NewsComponent } from './components/news/news.component'

const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'actor', component: ActorComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'director', component: DirectorComponent },
    { path: 'news', component: NewsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }