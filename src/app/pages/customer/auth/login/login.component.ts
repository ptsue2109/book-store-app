import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .auth {
        display: flex;
        justify-content: center;
        margin: 5rem;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {

  constructor(
    private $title: Title
  ) { 
    this.$title.setTitle('LOGIN')
  }

  ngOnInit(): void {
  }

}
