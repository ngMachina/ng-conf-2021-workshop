import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { save } from '@store/app.actions';
import { AppState } from '@store/app.type';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  readonly form: FormGroup = this.formBuilder.group({
    advancedSearch: {
      search: '',
      filters: [],
    },
  });

  // readonly searchControl: AbstractControl = this.form.controls.search;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    // console.log('this.form', this.form.controls.advancedSearch.get('search'));
    this.onFormChange();
  }

  // private storeSearchFormChange(form: any): void {
  //   this.store.dispatch(save(form));
  // }

  private onFormChange(): void {
    this.form.valueChanges.subscribe((form: AppState) => {
      console.log('123', form);
      // this.storeSearchFormChange(form);
    });
  }
}
