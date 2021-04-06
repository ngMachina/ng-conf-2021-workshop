import { Component } from '@angular/core';
import { ApiService } from '@service/api.service';
import { HeaderMenu } from '@components/header/types/header-menu.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-conf-2021-workshop';

  headerResponse$: Observable<HeaderMenu[]> = this.apiService.get<HeaderMenu[]>(
    './assets/mocks/header/cms-response.json'
  );

  constructor(private apiService: ApiService) {}
}
