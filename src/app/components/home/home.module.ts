import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared/index';
import {MaterialModule} from '../../material/material.module';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {
}