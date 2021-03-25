import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
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

  private _value: string = '';

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(this._value);
    this.onTouched();
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(value: string): void {
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
