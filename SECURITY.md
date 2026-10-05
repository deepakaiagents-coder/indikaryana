# Security

- Secrets only in environment variables (see `.env.example`).
- JWT access + refresh; refresh tokens stored hashed and revocable.
- RBAC on admin and delivery routes; never trust client roles.
- Razorpay webhook HMAC verification; payment signatures verified server-side.
- OTP rate limiting via Redis when available.
