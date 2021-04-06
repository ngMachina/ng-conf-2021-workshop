import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HeaderMenu } from './types/header-menu.type';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() headerLinks: HeaderMenu[] | null = [];
}
