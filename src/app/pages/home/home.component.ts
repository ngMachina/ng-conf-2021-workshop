import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchEvent } from '@components/advanced-search/advanced-search.type';
import { AppFacade } from '@store/app.facade';

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

  constructor(private formBuilder: FormBuilder, private appFacade: AppFacade) {}

  handleSearch($event: SearchEvent): void {
    this.appFacade.dispatchSaveForm($event);
    console.log($event);
  }
}
