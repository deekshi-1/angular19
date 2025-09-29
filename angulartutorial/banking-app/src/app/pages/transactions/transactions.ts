import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BankingServices } from '../../services/banking/banking-services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [MatCardModule, MatTableModule, DatePipe],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {
  displayedColumns: string[] = ['sender', 'amount', 'reciever', 'date'];
  tableData!: any
  accNo: number = 0
  constructor(private transService: BankingServices) {
    const value = localStorage.getItem('user');
    this.accNo = value ? JSON.parse(value) : 0;
    transService.get(this.accNo).subscribe(item => {
      this.tableData = item;
      console.log(this.tableData);
    })
  }
}
