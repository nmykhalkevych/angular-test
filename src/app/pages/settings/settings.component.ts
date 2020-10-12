import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  languages: string[] = [];
  selectedLang: string;
  constructor(private store: Store, private translate: TranslateService) {
    this.store.select('languages').subscribe((res: string[]) => {
      this.languages = res;
    });
    this.store.select('defaultLang').subscribe((res: string) => {
      this.selectedLang = res;
    });
  }

  ngOnInit(): void {}

  changeLanguage(lang): void {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
