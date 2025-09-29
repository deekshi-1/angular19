import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from '../../interfaces/user-interface';
import { UserServices } from '../../services/user/user-services';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, CurrencyPipe, TitleCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  userData!: UserInterface;
  id: number = 0

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    const value = localStorage.getItem('user');
    this.id = value ? JSON.parse(value) : 0;
    console.log(this.id);
    this.getData();

  }

  getData() {
    this.userService.checkAcc(this.id).subscribe(item => {
      this.userData = item[0];
    })
  }
  cash = 88
}
