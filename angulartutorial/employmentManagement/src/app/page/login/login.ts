import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../servicess/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = {
    email: '',
    password: '',
  };

  constructor(private dataService: DataService, private router: Router) { }


  goToPage(page: string) {
    this.router.navigate([page]);
  }

  login() {
    this.dataService.findUser(this.user).subscribe((item) => {
      console.log(item);

      if (item.length) {
        alert('login Sucess');
        this.dataService.setLocal(item[0]);
        this.goToPage('home');
      } else {
        alert('login Sucess');
      }
    });
  }
}
