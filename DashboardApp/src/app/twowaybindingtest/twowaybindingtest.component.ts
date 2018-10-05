import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twowaybindingtest',
  template: `
<p>
Two Way Binding with ng model
</p>
{{name}}
<input [(ngModel)] = "name" type="text" value = "hi">
` ,
  styles: []
  //templateUrl: './twowaybindingtest.component.html',
  //styleUrls: ['./twowaybindingtest.component.css']
})
export class TwowaybindingtestComponent implements OnInit {
  public name = "Enter name";
  constructor() { }
  ngOnInit() {
  }

}
