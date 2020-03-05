import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContainerExampleComponent } from './ng-container-example/ng-container-example.component';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';
import { NgContentBaseExampleComponent } from './ng-content-base-example/ng-content-base-example.component';


const routes: Routes = [
  {
    path: 'ngContent',
    component: NgContentBaseExampleComponent
  },
  {
    path: 'ngContainer',
    component: NgContainerExampleComponent
  },
  {
    path: 'ngTemplate',
    component: NgTemplateExampleComponent
  },
  {
    path: 'ngTemplateOutlet',
    component: NgTemplateOutletExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
