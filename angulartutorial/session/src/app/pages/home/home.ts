import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { User } from '../../models/user';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Output() logout = new EventEmitter<string>();
  @Input() userList!:User [];
  @Input() currentUser: any = '';

  constructor(private dataService: DataService) {}

  logOut() {
    this.logout.emit();
  }

  delete(index: number) {
    console.log(index);

    this.dataService.removeUser(index);
    this.userList = this.dataService.getusers();
  }
}
