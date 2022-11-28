import { useEffect, useState, useContext } from "react";
import { addReview, getProductById } from "../../api";
import { ReviewList } from "./ReviewList";
import { ReviewForm } from "./ReviewForm";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "./../../context";

export const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const theCartContext = useContext(CartContext);
  useEffect(() => {
    getProductById(params.productId).then((x) => setProduct(x));
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  const onReviewAdded = (userName, rating, comment) => {
    const newReview = {
      userName: userName,
      rating: rating,
      comment: comment,
      date: new Date().toDateString(),
    };

    addReview(product.id, newReview).then(
      setProduct({
        ...product,
        reviews: [...product.reviews, newReview],
      })
    );
  };

  if (!product) {
    return <>Loading...</>;
  }

  // Begin with building the nav bar.
  return (
    <>
      <nav aria-label="breadcrumb" className="w-75 mx-auto bg-light">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link to="/">Tasty snacks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      <div className="position-relative">
      <div className="jumbotron w-75 h-auto mx-auto bg-light">
        <div className="row">
          <div className="col-4 mt-5 mb-5 pb-5">
            <img
              src={product.imageUrl}
              className="img-fluid"
              alt="peanut butter"
            ></img>
          </div>
          <div className="col mt-5 mb-5 pb-5">
            <h1 className="display-4">{product.name}</h1>
            <h3>
              <span className="lead badge bg-primary">
                ${product.price}
              </span>
            </h3>
            <p>{product.description}</p>
            <Link to="/cart" className="btn btn-warning position-absolute bottom-0 self-align-end mb-3" onClick={() => theCartContext.addToCart(product)}>Add to Cart</Link>

          </div>
          
        </div>
      </div>
      </div>
      <div>
        <ReviewList reviews={product.reviews} />
        <ReviewForm onReviewAdded={onReviewAdded} />
      </div>
    </>
  );
};
