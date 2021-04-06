import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';

import { AppFacade } from '@store/app.facade';
import { FilterOption } from '@components/filters/filters.type';

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
export class AdvancedSearchComponent implements OnInit, ControlValueAccessor {

  @Input() filterOptions: FilterOption[] = [
    {filterLabel: 'Filter 1', filterId: 'filterOne', filterVal: false},
    {filterLabel: 'Filter 2', filterId: 'filterTwo', filterVal: false},
    {filterLabel: 'Filter 3', filterId: 'filterThree', filterVal: false},
    ];

  readonly form: FormGroup = this.formBuilder.group({
    search: new FormControl(''),
    filters: new FormControl([]),
  });

  constructor(private formBuilder: FormBuilder, private appFacade: AppFacade) {}

  ngOnInit(): void {
    this.appFacade.advancedSearchState$.subscribe((state) =>
      console.log('advancedSearchState$', state)
    );
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

  handleFormSubmit(): void {
    this.appFacade.dispatchSaveForm({
      search: this.form.controls.search.value,
      filters: this.form.controls.filters.value,
    });
  }
}
