import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order$: Observable<any> | undefined;

  constructor(private fs:FirestoreService,private router:Router) { }

  ngOnInit(): void {
   this.order$ = this.fs.col$(`Product`, ref => ref.where('status', '==', 'Paid'));
}
}
