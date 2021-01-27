import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private _location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }

  returnHome() {
    this.router.navigate([""])
  }
}
