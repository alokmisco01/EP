import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindingtest',
  template: `
<h1>Event Binding Examples</h1>
<button (click) = "hitMe()">Click me</button>
{{message}}
<button (click) = "eventLog($event)">See event log</button>
<button (click) = "message= 'Clicked by me'"> Another Click</button>
`,
  styles:[]
  //templateUrl: './eventbindingtest.component.html',
  //styleUrls: ['./eventbindingtest.component.css']
})
export class EventbindingtestComponent implements OnInit {

  public message = "Welcome to paradise!";
  constructor() { }

  ngOnInit() {
  }

  hitMe() {
    console.log("This is button hit!");
    this.message = "Thanks";
  }

  eventLog(event) {
    console.log(event);
    this.message = event.type;
  }
}
