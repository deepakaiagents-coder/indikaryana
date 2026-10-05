export type CartLine = {
  id: string;
  productId: string;
  quantity: number;
  lineTotalPaise: number;
  product: {
    id: string;
    name: string;
    imageUrl: string | null;
    unit: string;
    mrpPaise: number;
    sellingPricePaise: number;
    availableQuantity: number;
  };
};

export type CartResponse = {
  id: string;
  items: CartLine[];
  subtotalPaise: number;
  itemCount: number;
};
