import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-test',
  //templateUrl: './interpolation-test.component.html',
  // ng g c  createcomponent
  template: `
<div>
{{firstName}}
<h2> {{4 + 6 + 10 }}</h2>
<h2> {{6 == 6}}</h2>
<h2> {{6 === 6}}</h2>
<h2> {{ 'Okay, ' + firstName}}</h2>
<h2>{{getFirstName()}} </h2>
<!--<h2> {{firstName = "Change Name"}} </h2> Error: Template parse errors-->
<h2> Hello, buddy {{firstName}}</h2>
<!--<h2>{{window.location.href}}</h2> TypeError: Cannot read property 'location' of undefined-->
<h2>{{ publicUrl }}</h2>
</div>`,
  styleUrls: ['./interpolation-test.component.css']
})
export class InterpolationTestComponent implements OnInit {
  public firstName = "This is first Name";
  public publicUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  getFirstName() {
    return this.firstName;
  }
}
