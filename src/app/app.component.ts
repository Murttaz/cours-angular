import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl: "./app.component.html"
})
export class AppComponent {
  user={
    name:'coco',
    age:67,
  };
  book={
    title:'Golem',
    pages:535,
    author:'Elvire Murail',
    parution:2003,

  };
}