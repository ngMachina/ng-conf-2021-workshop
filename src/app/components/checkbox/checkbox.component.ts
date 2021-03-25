import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() name = '';
  @Input() id = '';

  // tslint:disable-next-line:variable-name
  private _value: any;

  get value(): any {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(this._value);
    this.onTouched();
  }

  toggle(event: KeyboardEvent): void {
    if (event.code === 'Space' || event.code === 'Enter') {
      this.writeValue(!this._value);
    }
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
