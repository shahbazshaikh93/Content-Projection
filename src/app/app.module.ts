import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { NgContainerExampleComponent } from './ng-container-example/ng-container-example.component';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';
import { NgContentBaseExampleComponent } from './ng-content-base-example/ng-content-base-example.component';
import { ContentProjectionService } from './content-projection.service';

@NgModule({
  declarations: [
    AppComponent,
    NgContentExampleComponent,
    NgContainerExampleComponent,
    NgTemplateExampleComponent,
    NgTemplateOutletExampleComponent,
    NgContentBaseExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContentProjectionService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // add this line
})
export class AppModule { }
