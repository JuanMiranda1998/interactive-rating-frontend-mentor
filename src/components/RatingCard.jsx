import { useState } from "react";
import { ThankYou } from "./ThankYou";
import "./RatingCard.css";

export function RatingCard(){
  const [rate, setRate] = useState(null);
  const [submit, setSubmit] = useState(null);

  function handleRatingClicked(rating){
    setRate(rating);
  }
  function handleSubmitClicked(){
      setSubmit(rate);
  }

  return submit? ( ThankYou(submit) ) : (
    <div className="rating">
      <div className="star-icon">
        <img src="/icon-star.svg" alt="icon star" />
      </div>
      <h1 className="rating_title">How did we do?</h1>
      <p className="rating_text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="rating_button-group">
        {[1,2,3,4,5].map((rating)=>(<button type="button" key={rating} className="rating_button" onClick={()=>handleRatingClicked(rating)}>{rating}</button>))}
      </div>
      <button disabled={rate===undefined} className="rating_submit-button" onClick={()=>{handleSubmitClicked()}}>Submit</button>
    </div>
  )
}