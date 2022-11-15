import "../common";
import { Rating } from "../common";

export const ReviewList = ({ reviews }) => {
  if (reviews === undefined) {
    return <></>;
  }
  return (
    <>
      <div className="row w-75 mx-auto pt-2">
        <h4>Product Reviews ({reviews.length})</h4>
      </div>

      {reviews.length > 0 ? (
        reviews.map((data, index) => {
          return (
            <div
              key={index}
              className="card w-75 mx-auto mb-3 bg-light"
            >
              <div className="card-header rounded-top">
                <p>
                  <Rating value={data.rating} />
                </p>
              </div>
              <div className="card-body bg-light">
                <div className="row justify-content-between">
                  <div className="col-2">
                    <p className="card-title text-muted">
                      {data.userName}
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="card-title text-muted">
                      {data.date}
                    </p>
                  </div>
                </div>
                <p className="pt-3">"{data.comment}"</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="row w-75 mx-auto">
          <h4>Be the first to review!</h4>
        </div>
      )}
    </>
  );
};
