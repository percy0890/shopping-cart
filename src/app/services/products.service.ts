import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  create(productObj) {
    this.db.list('/products').push(productObj);
    alert('saved');
  }

  getAll() {
    return this.db.list('/products');
  }

  getId(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, productObj) {
    return this.db.object('/products/' + productId).update(productObj);
  }

  delete(productId) {
    console.log(productId);
    return this.db.object('/products/' + productId).remove();
  }

}
