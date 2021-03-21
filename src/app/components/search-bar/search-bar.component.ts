import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchBarComponent,
      multi: true,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor {
  @Output() buttonClicked = new EventEmitter<void>();

  private _value: any = ''; // this is the updated value that the class accesses

  get value(): any {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(this._value);
    this.onTouched();
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this._value = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
