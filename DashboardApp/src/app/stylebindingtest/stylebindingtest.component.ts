import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebindingtest',
  template: `
<h1>Welcome to {{trainingName}}</h1>
<h2 [style.color] = "'orange'">Example first</h2>
<h2 [style.color] = "hasError ? 'red' :'orange'">Example second</h2>
<h2 [style.color] = "styleColorBlue">Example third</h2>
<h2 [ngStyle] = "styleClass">Example fourth ngStyle Directive</h2>
`,
  styles:[]
  //templateUrl: './stylebindingtest.component.html',
  //styleUrls: ['./stylebindingtest.component.css']
})
export class StylebindingtestComponent implements OnInit {
  public trainingName = "Style Binding";
  public styleColorBlue = "blue";
  public hasError = true;
  public styleClass = {
    color: 'green',
    fontStyle:'italic'
  };
  constructor() { }

  ngOnInit() {
  }

}
