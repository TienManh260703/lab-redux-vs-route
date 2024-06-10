import { useState, useEffect } from "react";
import { getProductList } from "../../service/productService";
import "./Product.scss";
import ProductItem from "./ProductItem";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductList();
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <div className="product">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="product">
              {products.map((item, index) => (
                <>
                  <ProductItem item={item} key={index} />
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Product;
