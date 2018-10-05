import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-test',
  //selector: '.app-test',
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  //template: '<div>In Line template </div>',
  template: `<div>
  Inline template
</div>`,
  //styleUrls: ['./test.component.css']
  styles: [`
div {
color : green;
}
`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
