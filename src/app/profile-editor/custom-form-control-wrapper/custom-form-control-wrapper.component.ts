import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-form-control-wrapper',
  templateUrl: './custom-form-control-wrapper.component.html',
  styleUrls: ['./custom-form-control-wrapper.component.css']
})
export class CustomFormControlWrapperComponent implements OnInit {

  @Input() formControl!: FormControl;

  constructor() { }

  ngOnInit() {
  }

}