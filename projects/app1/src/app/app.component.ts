import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../../src/app/services/test.service';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: { name: string; city: string }[] = [];

  constructor(
    private readonly service: TestService,
  ) {}

  ngOnInit() {
    this.service.getData()
      .subscribe((res: { name: string; city: string }[]) => {
        this.data = cloneDeep(res)
      });
  }

  title = 'app1';
}
