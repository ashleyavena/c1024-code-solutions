import { type Product } from './data';

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }
  return response.json();
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }
  return response.json();
}
