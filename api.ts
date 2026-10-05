const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:4000';

export async function apiFetch<T>(
  path: string,
  options: RequestInit & { token?: string } = {},
): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (options.token) headers.set('Authorization', `Bearer ${options.token}`);

  const res = await fetch(`${API_BASE}/api/v1${path}`, {
    ...options,
    headers,
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error?.message ?? 'Request failed');
  }
  return json.data as T;
}

export { API_BASE };
