import React, { FC } from "react";
import Button from "../build/Button";

export interface ProductsData {
  id: string;
  title: string;
  price: number;
  taxes: number;
  ads: number;
  discount: number;
  category: string;
}

interface ProductsProps extends ProductsData {
  removeProduct: (id: string) => void;
}

const Products: FC<ProductsProps> = ({
  id,
  title,
  price,
  taxes,
  ads,
  discount,
  category,
  removeProduct,
}) => {
  return (
    <>
      <tr key={id}>
        <td>{title}</td>
        <td>{price}</td>
        <td>{taxes}</td>
        <td>{ads}</td>
        <td>{discount}</td>
        <td>{category}</td>
        <td>
          <Button className="w-full" onClick={() => removeProduct(id)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Products;
