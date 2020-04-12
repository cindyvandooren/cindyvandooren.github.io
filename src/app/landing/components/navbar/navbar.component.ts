import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'c-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @HostBinding('class.open') navOpen: boolean;

  openNav() {
    this.navOpen = !this.navOpen;
  }
}
