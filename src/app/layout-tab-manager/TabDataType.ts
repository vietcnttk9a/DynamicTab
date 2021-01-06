import {Component, ComponentRef, TemplateRef} from '@angular/core';

export class TabDataType {
  id?: string;
  title: string | TemplateRef<any>;
  iconClass?: string; // iconClass
  key: string; // router-link
  viewRef: TemplateRef<any> | ComponentRef<any> | string | undefined | any;
  dataRef?: any;
  viewType?: 'component' | 'template' | 'html';
  showMultiTab?: boolean;

  constructor(input: TabDataType) {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    this.id = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    this.title = input.title;
    this.iconClass = input.iconClass;
    this.key = input.key;
    this.viewRef = input.viewRef;
    this.dataRef = input.dataRef;
    this.viewType = input.viewType ? input.viewType : 'component';
    this.showMultiTab = (input.showMultiTab === null || input.showMultiTab === undefined) ? false : input.showMultiTab;
  }
}
