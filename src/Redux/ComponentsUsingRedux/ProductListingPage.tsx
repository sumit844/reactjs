import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GETALLPRODCUTS } from "../Actions/Actions";
import { ALLPRODUCTS, PRODUCTDETAIL } from "../Constant/ActionTypeConstant";
import { Link } from "react-router-dom";

export default function ProductListingPage() {
  const dispathMethod = useDispatch();

  const storeData = useSelector((state: any) => {
    return state.GetProducts;
  });

  const fetchDataFromAPI = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispathMethod(GETALLPRODCUTS(resData));
      });
  };
  useEffect(() => {
    console.log(storeData);
    fetchDataFromAPI();
  }, []);
  return (
    <div>
      <h1>Welcome to the product list</h1>
      <div className="row container">
        {storeData?.map((item: any, index: number) => {
          return (
            <div key="index" className="col-4">
              <Link to={`/productdetail/${item.id}`}>
                <img alt={`${item.title}`} src={item?.image} style={{ width: "100%", height: "50%" }}></img>
                <h1>{item.id}</h1>
                <p>{item.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
