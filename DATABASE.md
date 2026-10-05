# Database

PostgreSQL via Prisma. All monetary fields use **integer paise**.

## Core models

User, Address, Category, Product, ProductImage, Inventory, InventoryAdjustment, Cart, CartItem, Order, OrderItem, Payment, Coupon, CouponUsage, Delivery, Notification, Review, AuditLog, OtpSession, RefreshToken.

## Inventory

`available = stockQuantity - reservedQuantity`. Reservations on checkout; release on cancel; stock decrement on DELIVERED.

Migrations: `prisma/migrations/`. Seed: `pnpm db:seed`.
