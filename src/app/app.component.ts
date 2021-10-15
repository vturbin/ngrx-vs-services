import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { routePaths } from 'src/constants/routes.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: MenuItem[] = [];
  public activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Personal info',
        icon: 'pi pi-user',
        routerLink: routePaths.personalInfo.route,
      },
      {
        label: 'Address',
        icon: 'pi pi-globe',
        routerLink: routePaths.adress.route,
      },
      {
        label: 'Vote',
        icon: 'pi pi-thumbs-up',
        routerLink: routePaths.vote.route,
      },
    ];
    this.activeItem = this.items[0];
  }
}
