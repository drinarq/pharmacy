import {
  Product,
  ProductEntity,
  ProductListItem,
} from '../models/products.model';

export const productMapperIn = (product: any): Product => ({
  id: product.id,
  title: product.attributes.title,
  price: product.attributes.price,
  description: product.attributes.description,
  image: product.attributes.image,
});

export const fullProductMapperIn = (
  product: ProductEntity
): ProductListItem => ({
  id: product.data.id,
  title: product.data.attributes.title,
  description: product.data.attributes.description,
  price: product.data.attributes.price,
  country: product.data.attributes.country,
  volume: product.data.attributes.volume,
  formOfIssue: product.data.attributes.formOfIssue,
  image: product.data.attributes.image,
  inStock: product.data.attributes.inStock,
});
