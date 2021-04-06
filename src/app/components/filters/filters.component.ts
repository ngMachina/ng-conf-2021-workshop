import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { FilterOption } from '@components/filters/filters.type';

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

  @Input() filterOptions: FilterOption[] = [];

  form: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.filterOptions.reduce((filterAcc, option) => ({
      ...filterAcc,
      [option.filterId]: option.filterVal
    }), {}));
  }

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
