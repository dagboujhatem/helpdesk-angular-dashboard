import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // toaster global config
  public config: ToasterConfig =
    new ToasterConfig({
      animation: 'fade',
      showCloseButton: false,
      tapToDismiss: true,
      timeout: 5000,
      mouseoverTimerStop: true
    });

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });


  }
}
