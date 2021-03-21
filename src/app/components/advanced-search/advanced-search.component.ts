import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { save } from '@store/app.actions';
import { selectSearch, selectAdvancedSearch } from '@store/app.selectors';

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
  readonly form: FormGroup = this.formBuilder.group({
    search: new FormControl(''),
    filters: new FormControl([]),
  });

  books$ = this.store.pipe(select(selectSearch));

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.books$.subscribe((v) => console.log('vvv', v));
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
    this.storeAdvancedSearchFormChanges({
      search: this.form.controls.search.value,
      filters: this.form.controls.filters.value,
    });
  }

  private storeAdvancedSearchFormChanges(form: { search: string; filters: string[] }): void {
    this.store.dispatch(save(form));
  }
}
