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
  Country: product.data.attributes.Country,
  volume: product.data.attributes.volume,
  FormOfIssue: product.data.attributes.FormOfIssue,
  image: product.data.attributes.image,
});
