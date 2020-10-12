import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private store: Store) {
    this.store.select('defaultLang').subscribe((res: string) => {
      this.translate.setDefaultLang(res);
      this.translate.use(res);
    });
  }
}
