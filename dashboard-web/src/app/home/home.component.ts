import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const activeTabs = document.getElementsByClassName('default-active');
    for (let i = 0; i < activeTabs.length; i++) {
      (<HTMLElement>activeTabs[i]).click();
    }
  }

  tabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.h-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.h-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    //document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  vTabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.v-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.v-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    //document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
