import { type Product } from './data';

// Fetch all products
export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Failed to fetch products. Status: ${response.status}`);
  }
  return response.json();
}

// Fetch a single product by ID
export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    if (response.status === 404) {
      return undefined; // Product not found
    }
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }
  return response.json();
}
