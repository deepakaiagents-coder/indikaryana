export type CreateOrderRequest = {
  addressId: string;
  couponCode?: string;
  paymentMethod: 'COD' | 'UPI' | 'CARD' | 'NETBANKING';
  customerNote?: string;
};

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'READY_FOR_PICKUP'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED';
