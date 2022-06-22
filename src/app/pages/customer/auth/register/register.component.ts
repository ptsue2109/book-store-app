import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
      .auth {
        display: flex;
        justify-content: center;
        margin: 3rem;
      }
    `,
  ],
})
export class RegisterComponent implements OnInit {
  constructor(private $title: Title) {
    this.$title.setTitle('REGISTER');
  }

  ngOnInit(): void {}
}
