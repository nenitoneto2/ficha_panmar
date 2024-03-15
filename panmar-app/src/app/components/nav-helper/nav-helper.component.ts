import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderConfig } from 'src/app/shared/interfaces/header-options';

@Component({
  selector: 'nav-helper',
  templateUrl: './nav-helper.component.html',
  styleUrls: ['./nav-helper.component.scss']
})
export class NavHelperComponent {
  activeHeaderConfig: HeaderConfig | undefined = undefined;
  constructor(private router: Router) {  }
  
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateHeaderConfig(event.urlAfterRedirects);
    });

  }

  updateHeaderConfig(url: string) {
    const routeData = this.router.config.find(route => route.path === url.slice(1,url.length))?.data;
    if (routeData && routeData.header) {
      this.activeHeaderConfig = routeData.header;
    } else {
      this.activeHeaderConfig = { title: 'Default Header' };
    }
  }
}
