import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@service/api.service';
import { HeaderMenu } from './types/header-menu.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  response$: Observable<HeaderMenu[]> | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.response$ = this.apiService.get<HeaderMenu[]>(
      './assets/mocks/header/cms-response.json'
    );
  }
}
