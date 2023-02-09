import { Component, Input } from "@angular/core";

@Component({
    selector:'app-one',
    templateUrl: "./app-one.component.html"
  })
export class AppOneComponent {
  @Input()
  userFromParent:any;

}