import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  currentUser;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.registerSvgIcons();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  registerSvgIcons() {
    this.matIconRegistry.addSvgIcon(
      "cash-register",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/cash-register.svg"));
    this.matIconRegistry.addSvgIcon(
      "chart-line",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/chart-line.svg"));
    this.matIconRegistry.addSvgIcon(
      "clipboard",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/clipboard.svg"));
    this.matIconRegistry.addSvgIcon(
      "comments",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/comments.svg"));
    this.matIconRegistry.addSvgIcon(
      "users-cog",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/users-cog.svg"));
    this.matIconRegistry.addSvgIcon(
      "shopping-cart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/shopping-cart.svg"));
    this.matIconRegistry.addSvgIcon(
      "heart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/heart.svg"));
    this.matIconRegistry.addSvgIcon(
      "user",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/user.svg"));
    this.matIconRegistry.addSvgIcon(
      "cog",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icon/cog.svg"));
  }
}
