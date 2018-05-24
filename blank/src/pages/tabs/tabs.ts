import { Component } from '@angular/core';
import { ChatPage } from '../chat/chat';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DisplayTourismListPage } from '../display-tourism-list/display-tourism-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = DisplayTourismListPage;
  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
