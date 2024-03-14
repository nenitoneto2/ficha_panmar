import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderConfig } from 'src/app/shared/interfaces/header-options';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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





