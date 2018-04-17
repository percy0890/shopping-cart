import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router  ) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id !== 'new') {
      this.productsService.getId(this.id).take(1).subscribe(product => this.product = product);
    }

  }

  onSubmit(productObj) {
    (this.id && this.id !== 'new') ?
    this.productsService.update(this.id, productObj) :
    this.productsService.create(productObj);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete?')) {
      return;
    }
    this.productsService.delete(this.id);
    // } else {
    //   return false;
    // }
    this.router.navigate(['/admin/products']);
  }

}
