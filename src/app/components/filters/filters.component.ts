import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FiltersComponent,
      multi: true,
    },
  ],
})
export class FiltersComponent implements OnInit, ControlValueAccessor {
  readonly form: FormGroup = this.formBuilder.group({
    filterOne: false,
    filterTwo: false,
    filterThree: false,
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
