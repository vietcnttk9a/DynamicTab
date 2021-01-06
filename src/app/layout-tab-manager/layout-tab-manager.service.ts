import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {TabDataType} from './TabDataType';
import {Observable} from 'rxjs';

interface ILayoutTabManagerState {
  listTab: TabDataType[];
  currentTabIndex: number;
}

const initialState: ILayoutTabManagerState = {
  currentTabIndex: 0,
  listTab: [
    {
      title: 'Dashboard',
      iconClass: 'fas fa-home',
      key: '',
      viewRef: ''
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class LayoutTabManagerService extends StateService<ILayoutTabManagerState> {
  $listTab: Observable<TabDataType[]> = this.select(x => x.listTab);
  $currentTabIndex: Observable<number> = this.select(x => x.currentTabIndex);

  constructor() {
    super(initialState);
  }

  addTab(input: TabDataType) {
    const lstTab = this.state.listTab;
    const ide = lstTab.findIndex(x => x.key === input.key);
    if (ide === -1 || input.showMultiTab) {
      lstTab.push(input);
      this.setState({
        currentTabIndex: lstTab.length,
        listTab: lstTab
      });
    } else {
      this.setState({
        currentTabIndex: ide,
      });
    }
  }


  closeTab(index: number) {
    const tabs = this.state.listTab;
    tabs.splice(index, 1);
    this.setState({
      // currentTabIndex: lstTab.length,
      listTab: tabs
    });
  }

  changeTab($event: number) {
    this.setState({
      currentTabIndex: $event,
    });
  }
}
