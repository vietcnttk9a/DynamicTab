import {Component, ComponentRef, TemplateRef} from '@angular/core';
import {LayoutTabManagerService} from './layout-tab-manager/layout-tab-manager.service';
import {TabDataType} from './layout-tab-manager/TabDataType';
import {DynamicCom1Component} from './dynamic-com1/dynamic-com1.component';
import { ComponentOtherMoComponent } from './other-module/component-other-module/component-other-mo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  $curTab = this.tabService.$currentTabIndex;

  constructor(private tabService: LayoutTabManagerService) {
  }

  newTab1() {
    const input = new TabDataType({
      title: 'dynamic COm1',
      iconClass: 'fas fa-camera',
      key: 'com1',
      viewRef: DynamicCom1Component,
      dataRef: {
        data1: 'test1',
        data2: 'test2',
      }
    });
    this.tabService.addTab(input);
  }


  newTab2() {
    const input = new TabDataType({
      title: 'dynamic COm1',
      iconClass: 'fas fa-camera',
      key: 'com-ther-2',
      viewRef: ComponentOtherMoComponent,
      dataRef: {
        data1: 'test1',
        data2: 'test2',
      }
    });
    this.tabService.addTab(input);
  }

  newTemlateRef(templateRef: TemplateRef<any>) {
    const input = new TabDataType({
      title: 'Temlate Tab',
      key: 'templateView',
      viewRef: templateRef,
      viewType: 'template'
    });
    this.tabService.addTab(input);
  }

  newHtml() {
    const input = new TabDataType({
      title: 'HTML TAB',
      key: 'htmlView',
      viewRef: `<strong>Nội dung HTML</strong>`,
      viewType: 'html'
    });
    this.tabService.addTab(input);
  }

  newHtmlMulti() {
    const input = new TabDataType({
      title: 'HTML MULti TAB',
      key: 'htmlViewMulti',
      viewRef: `<strong>Nội dung HTML Multi Tab</strong>`,
      viewType: 'html',
      showMultiTab: true
    });
    this.tabService.addTab(input);
  }

}
