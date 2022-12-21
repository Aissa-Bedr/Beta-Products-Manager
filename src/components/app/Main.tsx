import { nanoid } from "nanoid";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Button from "../build/Button";
import Flex from "../build/Flex";
import Input from "../build/Input";
import getTotal from "../dist/main/app";
import initialData, { Data } from "../dist/main/main";
import Products, { ProductsData } from "./Products";

const Main = () => {
  const [productsData, setProductsData] = useState<ProductsData[]>(
    JSON.parse(`${localStorage.getItem("productsData")}`) || []
  );

  const [data, setData] = useState<Data>(initialData);
  const { title, price, taxes, ads, discount, category, isError, error } = data;

  const titleRef = useRef<HTMLInputElement>(null as any);
  const priceRef = useRef<HTMLInputElement>(null as any);
  const taxesRef = useRef<HTMLInputElement>(null as any);
  const adsRef = useRef<HTMLInputElement>(null as any);
  const discountRef = useRef<HTMLInputElement>(null as any);
  const categoryRef = useRef<HTMLInputElement>(null as any);

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(productsData));
  }, [productsData]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setData((prevState) => ({ ...prevState, isError: false }));
      }, 2500);
    }
  }, [isError]);

  const products = productsData.map((product) => (
    <Products
      key={product.id}
      {...product}
      removeProduct={() => removeProduct(product.id)}
    />
  ));

  function resetInputes(): void {
    setData(initialData);

    titleRef.current.value = "";
    priceRef.current.value = "";
    taxesRef.current.value = "";
    adsRef.current.value = "";
    discountRef.current.value = "";
    categoryRef.current.value = "";
  }

  function addNewProduct(): void {
    if (!title || !price || !taxes || !ads || !discount || !category) {
      setData((prevState) => ({ ...prevState, isError: true }));
      setData((prevState) => ({ ...prevState, error: "it can't be Empty !" }));
      return;
    }

    if (!getTotal(price, taxes, ads, discount)) {
      setData((prevState) => ({ ...prevState, isError: true }));
      setData((prevState) => ({
        ...prevState,
        error: "calculate Error ! please edit your values to continue.",
      }));
      return;
    }

    for (const products of productsData) {
      if (products.title.includes(title)) {
        setData((prevState) => ({ ...prevState, isError: true }));
        setData((prevState) => ({
          ...prevState,
          error: "you can't add the same Product !",
        }));
        return;
      }
    }

    setProductsData((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        title,
        price: getTotal(price, taxes, ads, discount) as number,
        taxes: `$${taxes}` as any,
        ads: `$${ads}` as any,
        discount: `$${discount}` as any,
        category,
      },
    ]);
    resetInputes();
  }

  function removeProduct(id: string): void {
    setProductsData((prevState) =>
      prevState.filter((product) => id !== product.id)
    );
  }

  return (
    <div>
      <Flex className="flex-col gap-2 mt-2">
        <Input
          type="text"
          className="w-full"
          placeholder="title"
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, title: e.target.value }))
          }
          reference={titleRef}
        />
        <Flex className="items-center justify-between gap-2 w-full">
          <Input
            className="w-full"
            type="number"
            placeholder="price"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                price: parseInt(e.target.value),
              }))
            }
            reference={priceRef}
          />
          <Input
            className="w-full"
            type="number"
            placeholder="taxes"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                taxes: parseInt(e.target.value),
              }))
            }
            reference={taxesRef}
          />
          <Input
            className="w-full"
            type="number"
            placeholder="ads"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                ads: parseInt(e.target.value),
              }))
            }
            reference={adsRef}
          />
          <Input
            className="w-full"
            type="number"
            placeholder="discount"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                discount: parseInt(e.target.value),
              }))
            }
            reference={discountRef}
          />
          <div className="w-32 flex gap-1 text-sm font-bold bg-white text-dark-2 dark:bg-dark-2 dark:text-white py-1 px-2 rounded">
            <span className="uppercase">total:</span>
            <p>{getTotal(price, taxes, ads, discount) as number}</p>
          </div>
        </Flex>
        <Input
          type="text"
          className="w-full"
          placeholder="category"
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, category: e.target.value }))
          }
          reference={categoryRef}
        />
        {isError && <p className="text-sm font-bold text-red-500">{error}</p>}
        <Button onClick={() => addNewProduct()}>Create</Button>
      </Flex>
      <div>
        <table className="w-full text-center dark:text-white">
          <thead>
            <tr className="uppercase">
              <th>title</th>
              <th>price</th>
              <th>taxes</th>
              <th>ads</th>
              <th>discount</th>
              <th>category</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="font-medium">{products}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
