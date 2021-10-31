import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/' + routePaths.home.route,
      },
      {
        label: 'Form',
        icon: 'pi pi-user',
        routerLink: routePaths.form.route,
      },
    ];
    this.setActiveTabItem();
  }

  private setActiveTabItem(): void {
    let initialLocation = '/';
    if (this.location.path().length > 1) {
      initialLocation = this.location.path().replace('/', '');
    }

    this.items.forEach((item) => {
      if (item.routerLink === initialLocation) {
        this.activeItem = item;
      }
    });
  }
}
