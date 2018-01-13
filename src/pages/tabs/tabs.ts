import { Component } from '@angular/core';

import { NewPage } from '../new/new';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { ChartPage } from '../chart/chart';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewPage;
  tab3Root = SearchPage;
  tab4Root = ChartPage;
  tab5Root = MePage;

  constructor() {

  }
}
