export type ProductListItem = {
  id: string;
  name: string;
  slug: string;
  brand: string | null;
  unit: string;
  mrpPaise: number;
  sellingPricePaise: number;
  discountPaise: number;
  imageUrl: string | null;
  inStock: boolean;
  availableQuantity: number;
};

export type PaginatedProducts = {
  items: ProductListItem[];
  page: number;
  limit: number;
  total: number;
};
