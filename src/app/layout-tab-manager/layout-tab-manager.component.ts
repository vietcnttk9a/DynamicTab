import {Component, OnInit} from '@angular/core';
import {LayoutTabManagerService} from './layout-tab-manager.service';
import {Observable} from 'rxjs';
import {TabDataType} from './TabDataType';

@Component({
  selector: 'layout-tab-manager',
  templateUrl: './layout-tab-manager.component.html',
  styleUrls: ['./layout-tab-manager.component.css']
})
export class LayoutTabManagerComponent implements OnInit {
  index = 0;
  $curentTab = this.tabService.$currentTabIndex;
  $listTab: Observable<TabDataType[]> = this.tabService.$listTab;

  constructor(private tabService: LayoutTabManagerService) {
  }

  ngOnInit(): void {
  }

  // closeTab({index}: { index: number }): void {
  //   this.tabs.splice(index, 1);
  // }
  //
  // newTab(): void {
  //   this.tabs.push('New Tab');
  //   this.index = this.tabs.length - 1;
  // }

  // newTab() {
  //
  // }

  closeTab($event: { index: number }) {
    this.tabService.closeTab($event.index);
  }

  changeTab($event: number) {
    this.tabService.changeTab($event);
  }
}
