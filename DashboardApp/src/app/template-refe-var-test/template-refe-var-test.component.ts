import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refe-var-test',
  template: `
 <input #Name type = "text"/>
 <button (click)= "getName(Name.value)">Get Name</button>
`,
  styles:[]
  //templateUrl: './template-refe-var-test.component.html',
  //styleUrls: ['./template-refe-var-test.component.css']
})
export class TemplateRefeVarTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getName(name) {
    console.log(name);
  }
}
