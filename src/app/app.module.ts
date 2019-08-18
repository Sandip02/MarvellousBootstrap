import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Abc1Component } from './abc1/abc1.component';
import { Abc2Component } from './abc2/abc2.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentCommunticationParentComponent } from './component-communtication-parent/component-communtication-parent.component';
import { ComponentCommunticationChildComponent } from './component-communtication-child/component-communtication-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Abc1Component,
    Abc2Component,
    NavigationComponent,
    ComponentCommunticationParentComponent,
    ComponentCommunticationChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
