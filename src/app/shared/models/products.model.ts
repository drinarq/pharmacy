import { Country } from './country.model';

export interface ProductListItem {
  id: string;
  title: string;
  price: number;
  description: string;
  Country: Country;
  volume: string;
  FormOfIssue: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductEntities {
  data: {
    attributes: ProductListItem;
    id: string;
  }[];
}


export interface ProductEntity {
  data: {
    attributes: ProductListItem;
    id: string;
  };
}
