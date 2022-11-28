import { useEffect, useState } from "react";
import { getProduct } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const theCartContext = useContext(CartContext);

  const navigate = useNavigate();
  const redirectProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    getProduct().then((x) => setProducts(x));
  }, []);

  if (products.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="container">
        <div className="d-flex bg-dark w-90 mx-auto align-items-center p-3">
          <h5 className="text-white m-0">Store</h5>
        </div>
        <nav
          aria-label="breadcrumb"
          className="w-90 mx-auto bg-light"
        >
          <ol className="breadcrumb p-3 m-0">
            <li className="breadcrumb-item">
              <a href="#home">Tasty snacks</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
            >
              {products.name}
            </li>
          </ol>
        </nav>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-4" key={index}>
              <div className="card mt-3 h-100">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <img
                      src={product.imageUrl}
                      className="img-fluid mt-3"
                      alt="products"
                    />
                  </div>
                  <div className="col align-self-end">
                    <span className="lead badge bg-success">
                      ${product.price}
                    </span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="h-50 d-flex justify-content-center">
                    <h4 className="card-title">{product.name}</h4>
                  </div>
                  <Link
                    type="button"
                    className="btn btn-info text-white w-100"
                    onClick={() => redirectProductDetails(product.id)}
                    to={"/products/" + product.id}
                  >
                    Product Details
                  </Link>
                  <Link
                    className="btn btn-warning w-100 mt-2"
                    onClick={() => theCartContext.addToCart(product)}
                    to="/cart"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
