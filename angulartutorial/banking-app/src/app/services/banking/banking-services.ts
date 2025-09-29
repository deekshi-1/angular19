import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingServices {

  constructor(private http: HttpClient) { }
  api = environment.transUrl;

  addTransaction(sender: number, receiver: number, recieverName: string, amount: number) {
    const data = {
      sender: sender,
      receiver: receiver,
      receiverName: recieverName,
      amount: amount,
      date: new Date()
    };
    return this.http.post<any>(this.api, data)
  }

  get(accNo: number) {
    return this.http.get<any[]>(this.api + '?sender=' + accNo)
      .pipe(
        mergeMap(senderTxns =>
          this.http.get<any[]>(this.api + '?receiver=' + accNo).pipe(
            map(receiverTxns => [...senderTxns, ...receiverTxns])
          )
        )
      );
  }

}
