import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomFormControlComponent),
    },
  ],
})
export class CustomFormControlComponent implements OnInit, ControlValueAccessor {
  
  value: string | null = null

  onChange: any = () => { }
  onTouch: any = () => { }
  touched = false
  disabled = false

  ngOnInit() {
  }

  changes(event: Event) {
    if (this.disabled) return
    this.markAsTouched()
    this.value = event?.target ? (event?.target as HTMLTextAreaElement).value : ''
    this.onChange(this.value)
  }

  /* Methods needed by ControlValueAccessor to transform this component into a "form friendly" component */

  registerOnChange(providedFunction: any) {
    this.onChange = providedFunction
  }

  registerOnTouched(providedFunction: any) {
    this.onTouch = providedFunction
  }

  writeValue(providedValue: any) {
    this.value = providedValue
  }

  setDisabledState(providedDisabledVal: any) {
    this.disabled = providedDisabledVal
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouch()
      this.touched = true
    }
  }
}
