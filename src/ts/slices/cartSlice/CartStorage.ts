import { ICartState } from './interfaces';

class CartStorage {
    initCartStateData = (): ICartState => {
      return localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart') as string)
        : { items: [] }
    }
  }
  
  export const cartSTORAGE = new CartStorage().initCartStateData().items