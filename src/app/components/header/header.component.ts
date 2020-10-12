import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  isLoggedIn: Observable<boolean>;
  constructor(private store: Store, private authService: AuthService) {
    this.isLoggedIn = this.store.select('isLoggedIn');
    this.store.select('languages').subscribe((res: string[]) => {
      this.languages = res;
    });
    this.store.select('defaultLang').subscribe((res: string) => {
      this.selectedLang = res;
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.signOut().subscribe();
  }
}
