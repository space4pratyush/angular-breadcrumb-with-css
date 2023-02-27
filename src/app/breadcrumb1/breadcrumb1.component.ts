import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb1',
  templateUrl: './breadcrumb1.component.html',
  styleUrls: ['./breadcrumb1.component.css']
})
export class Breadcrumb1Component {

  public breadcrumbs!: Breadcrumb[];

  /**
  /*.filter(event => event instanceof NavigationEnd)
 .distinctUntilChanged()
 .map(event =>  this.buildBreadCrumb(this.activatedRoute.root)); */

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    let breadcrumb: Breadcrumb = {
      label: 'Login',
      url: '',
    };

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        //set breadcrumbs
        let root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'title';

    if(this.router.url=='/home'){
      breadcrumbs.push({
        label: 'Home',
        url: this.router.url
      });
    }
    if(this.router.url=='/homechild'){
      breadcrumbs.push({
        label: 'Home',
        url: '/home'
      });
      breadcrumbs.push({
        label: 'Home Child',
        url: this.router.url
      });
    }
    
    return breadcrumbs;
  }
}

export interface Breadcrumb {
  label: string;
  url: string;
}
