import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GETPRODCUT, AddItemToCart } from "../Actions/Actions";

export default function ProductDetail() {
  const { id } = useParams();
  const dispathmethod = useDispatch();
  const productData: any = useSelector((state: any) => {
    return state.GetProduct;
  });
  const cartData = useSelector((state: any) => state.Cart);
  const loginData = useSelector((state: any) => state.logindata);
  let isCurrentProductPresent =
    cartData.filter((item: any) => {
      return item.id === productData.id;
    }).length > 0;
  const addItemToCart = (value: number) => {
    dispathmethod(AddItemToCart({ ...productData, productCount: value }));
  };
  const getProductDetail = async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resdata) => {
        console.log("resdata", resdata);
        dispathmethod(GETPRODCUT(resdata));
      });
    console.log("productData", productData);
  };
  useLayoutEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <h1>Welcome to the specific product {id}</h1>

      {productData && (
        <div className="row">
          <div key="index" className="col-4">
            <img alt={`${productData?.title}`} src={productData?.image} style={{ width: "100%", height: "80%" }} className="img-fluid"></img>
          </div>
          <div className="col-4">
            <h3>{productData?.title}</h3>
            <p>{productData?.description}</p>
            <h3>Price: Rs {productData?.price}</h3>
          </div>
          <div className="col-4">
            {loginData.loginStatus && (
              <>
                {!isCurrentProductPresent ? (
                  <button
                    className="bg-success text-white p-2 m-2"
                    onClick={() => {
                      addItemToCart(1);
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <Link to="/cart" className="bg-success text-white p-2 m-2">
                    Go to cart
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
