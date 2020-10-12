import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Store } from 'src/app/store/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languages: string[] = [];
  selectedLang: string;
  user: User;
  isLoggedIn: Observable<boolean>;
  constructor(
    private store: Store,
    private authService: AuthService,
    private translate: TranslateService
  ) {
    this.isLoggedIn = this.store.select('isLoggedIn');
    this.store.select('languages').subscribe((res: string[]) => {
      this.languages = res;
    });
    this.store.select('defaultLang').subscribe((res: string) => {
      this.selectedLang = res;
    });
    this.store.select('user').subscribe((res: User) => {
      this.user = res;
    });
  }

  ngOnInit(): void {}

  changeLanguage(lang): void {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  logout(): void {
    this.authService.signOut().subscribe();
  }
}
