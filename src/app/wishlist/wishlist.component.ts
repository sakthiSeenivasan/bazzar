import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<any> | undefined;
  count: any;
  constructor(private fs: FirestoreService) { }

  ngOnInit(): void {
    this.wishlist$ = this.fs.col$(`Product`, ref => ref.where('wishlist', '==', 'Liked')).pipe(tap(data => {
      this.count = data;
      return data;
    }));

  }

}
