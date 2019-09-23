import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor() {}
  menuHidden = false;
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  ngOnInit() {}
}
