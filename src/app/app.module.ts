import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import { LayoutTabManagerComponent } from './layout-tab-manager/layout-tab-manager.component';
import { LayoutTabContentComponent } from './layout-tab-manager/layout-tab-content/layout-tab-content.component';
import { DynamicCom1Component } from './dynamic-com1/dynamic-com1.component';
import { DynamicCom2Component } from './dynamic-com2/dynamic-com2.component';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutTabManagerComponent,
    LayoutTabContentComponent,
    DynamicCom1Component,
    DynamicCom2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTabsModule,
    NzInputNumberModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
