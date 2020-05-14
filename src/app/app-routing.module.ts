import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InnovationStoriesComponent } from './innovation-stories/innovation-stories.component';




const routes: Routes = [
    { path: '', component: HomeComponent,  pathMatch: 'full' },
    {path: 'innovation-stories', component: InnovationStoriesComponent},
    
  ]; 

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}