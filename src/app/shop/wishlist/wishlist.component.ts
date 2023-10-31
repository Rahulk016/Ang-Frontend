import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: Product[] = [];

  constructor(private _cartService: CartService, public _productsService: ProductsService,
    private _wishlistService: WishlistService) { }


  ngOnInit(): void {
    this._wishlistService.getItems().subscribe(res => {
      this.wishlistItems = res;
    });
  }

  removeItem(item: Product) {
    this._wishlistService.removeFromWishlist(item);
  }

  addToCartFromWishlist(product: Product) {
    this._cartService.addToCart(product);
    this._wishlistService.removeFromWishlist(product);
  }

}
