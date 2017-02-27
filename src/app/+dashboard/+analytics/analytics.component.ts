import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { AngularFire } from 'angularfire2';

@FadeInTop()
@Component({
  selector: 'sa-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {

   constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));// user info is inside auth object
  }

  ngOnInit() {
  }

}
