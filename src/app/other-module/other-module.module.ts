import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentOtherMoComponent} from './component-other-module/component-other-mo.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
  declarations: [ComponentOtherMoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule
  ], exports: [
    ComponentOtherMoComponent
  ]
})
export class OtherModuleModule {
}
