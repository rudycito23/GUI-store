import { useEffect, useState } from "react";
import { getProductById } from "../../api";
import { ReviewList } from "./ReviewList";
import { ReviewForm } from "./ReviewForm";

export const ProductDetails = () => {
  const [product, setProduct] = useState("");

  const onReviewAdded = (userName, rating, comment) => {
    setProduct({
      ...product,
      reviews: [
        ...product.reviews,
        {
          userName: userName,
          rating: rating,
          comment: comment,
          date: new Date().toDateString(),
        },
      ],
    });
  };

  useEffect(() => {
    getProductById(1).then((x) => setProduct(x));
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  // Begin with building the nav bar.
  return (
    <>
      <nav aria-label="breadcrumb" className="w-75 mx-auto bg-light">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <a href="#home">Tasty snacks</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
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
