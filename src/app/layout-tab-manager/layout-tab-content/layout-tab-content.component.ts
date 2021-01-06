import {Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

export interface TabContentInput {
  componentRef: any;
  dataRef?: any;
}

@Component({
  selector: 'layout-tab-content',
  templateUrl: './layout-tab-content.component.html',
  styleUrls: ['./layout-tab-content.component.css']
})
export class LayoutTabContentComponent implements OnInit, OnDestroy {
  @ViewChild('container', {
    read: ViewContainerRef,
    static: true
  }) container: ViewContainerRef;

  @Input() set component(v: TabContentInput) {
    if (v.componentRef) {
      console.log('typeOf', typeof v.componentRef);
      this.renderComponent(v.componentRef, v.dataRef);
    }
  }

  componentRef: ComponentRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    console.log('INI TAB CONTENT');
  }

  ngOnDestroy(): void {
  }

  private renderComponent(component: any, dataCom: any) {
    const container = this.container;
    container.clear();
    const injector = container.injector;

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = cfr.resolveComponentFactory<any>(component);
    // const componentRef = container.createComponent(componentFactory, container.length, injector);
    const componentRef = container.createComponent(componentFactory, 0, injector);
    if (componentRef.instance) {
      componentRef.instance.dataRef = dataCom;  //dataCom; // 'Message from container';
    }
    // componentRef.changeDetectorRef.detectChanges();
    this.componentRef = componentRef;
  }


}
