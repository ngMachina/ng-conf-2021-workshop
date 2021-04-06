import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';

import { FilterOption } from '@components/filters/filters.type';
import { SearchEvent } from '@components/advanced-search/advanced-search.type';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AdvancedSearchComponent,
      multi: true,
    },
  ],
})
export class AdvancedSearchComponent implements ControlValueAccessor {

  @Input() filterOptions: FilterOption[] = [
    {filterLabel: 'Filter 1', filterId: 'filterOne', filterVal: false},
    {filterLabel: 'Filter 2', filterId: 'filterTwo', filterVal: false},
    {filterLabel: 'Filter 3', filterId: 'filterThree', filterVal: false},
    ];

  @Output() searchClicked: EventEmitter<SearchEvent> = new EventEmitter<SearchEvent>();

  readonly form: FormGroup = this.formBuilder.group({
    search: new FormControl(''),
    filters: new FormControl([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  handleFormSubmit(): void {
    this.searchClicked.emit({
      search: this.form.controls.search.value,
      filters: this.form.controls.filters.value,
    });
  }
}
