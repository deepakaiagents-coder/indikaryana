# Business rules

- Prices and totals are always computed server-side from product records.
- Coupons validated for expiry, minimum order, usage limits, and per-user limits.
- Order and delivery status changes follow defined state machines only.
- Reviews require a DELIVERED order containing the product.
- COD orders auto-confirm after placement; online payments require Razorpay verification + webhook idempotency.
