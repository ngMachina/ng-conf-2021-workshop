import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly form: FormGroup = this.formBuilder.group({
    advancedSearch: {
      search: '',
      filters: [],
    },
  });

  constructor(private formBuilder: FormBuilder) {}
}
