import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((t) => t.active === true);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((t) => (t.active = false));
    tab.active = true;
    return false; // To Prevent default Behavior
  }

  setActiveClass(tab: TabComponent) {
    return {
      'hover:text-indigo-400': !tab.active,
      'hover:text-white text-white bg-indigo-400': tab.active,
    };
  }
}
