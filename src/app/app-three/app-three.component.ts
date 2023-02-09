import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './app-three.component.html',
  styleUrls: ['./app-three.component.css']
})
export class AppThreeComponent {
  @Input()
  bookDetails:any;

  @Output()
  eventFromChild = new EventEmitter();

  constructor(){
    setTimeout(()=>{
      this.eventFromChild.emit();
    },3000)
  }
  };

