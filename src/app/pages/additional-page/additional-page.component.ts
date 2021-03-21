import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './additional-page.component.html',
  styleUrls: ['./additional-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
