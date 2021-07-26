import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { AppRoutingModule } from './app-routing.module';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    Module1Module,
    Module2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
