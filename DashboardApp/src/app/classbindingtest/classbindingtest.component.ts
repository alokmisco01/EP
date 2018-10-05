import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindingtest',
  template: `
<h2> Welcome {{studentName}} Class Binding Test </h2>
<h3 class = "text-success">Punjab</h3>
<h3 [class] = "successClass">Mumbai</h3>
<h3 class = "text-success" [class] = "yellowClass">Goa</h3>
<h4 [class.text-danger] = "isDanger"> Expression class Bindig </h4>
<h5 [ngClass]="messageClass">messageClass Angualr directive name [ngClass]</h5>
`,
  styles: [`
.text-success {color : green;}
.text-danger {color : red; }
.text-yellow {color : yellow; }
.text-special {font-style : italic}
`]


  //templateUrl: './classbindingtest.component.html',
  //styleUrls: ['./classbindingtest.component.css']
})
export class ClassbindingtestComponent implements OnInit {
  public studentName = "Jenkins";
  public successClass = "text-success";
  public dangerClass = "text-danger";
  public yellowClass = "text-yellow";
  public isDanger = false;
  public isError = false;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.isError,
    "text-danger": this.isError,
    "text-special": this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

}
