import { useState } from "react";
import {
  SelectField,
  TextAreaField,
  Rating,
  TextField,
} from "../common";

export const ReviewForm = ({ onReviewAdded }) => {
  const [userName, setUserName] = useState("");
  const [ratings, setRatings] = useState("");
  const [comment, setComment] = useState("");

  const starRatings = [
    { value: 1, label: "1 stars " },
    { value: 2, label: "2 stars " },
    { value: 3, label: "3 stars " },
    { value: 4, label: "4 stars " },
    { value: 5, label: "5 stars " },
  ];

  return (
    <>
      <form className="w-75 mx-auto border border-gray rounded">
        <legend className="bg-secondary text-white p-2 rounded-top">
          Add Review
        </legend>

        <div className="row mx-auto align-items-center">
          <div className="col-8">
            <TextAreaField
              label="Your Name"
              value={userName}
              setValue={setUserName}
            />
          </div>
          <div className="col-md-auto">
            <SelectField
              label="Rating"
              value={ratings}
              setValue={setRatings}
              options={starRatings}
              optionValueKey="value"
              optionLabelKey="label"
            />
          </div>
          <div className="col">
            <Rating value={ratings} />
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col">
            <TextField
              label="Comment"
              value={comment}
              setValue={setComment}
            />
          </div>
        </div>
        <div className="row mx-auto mb-3">
          <div className="col-12 p">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onReviewAdded(userName, ratings, comment);
                setUserName("");
                setRatings("");
                setComment("");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
