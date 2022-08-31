import { reviewsReducer } from "./reducers";
import { useReducer, useEffect, useCallback, useState } from "react";
import { getRequest, deleteRequest, sortRequest } from "./api-calls";
import ForumReviewPlacards from "./ForumReviewPlacards";

const initialState = {
  isloading: true,
  isError: false,
  delete: false,
  sort: false,
  data: [],
};

const reviewsUrl = "https://hog-api-r3dspyder.herokuapp.com/api/reviews";
const usersUrl = "https://hog-api-r3dspyder.herokuapp.com/api/users/";

const ForumBoard = () => {
  const [performReviewAction, setPerformReviewAction] = useState(false);
  const [reviewListState, setReviewListState] = useReducer(
    reviewsReducer,
    initialState
  );

  const initiateChangeReviews = useCallback(async () => {
    console.log("triggered", reviewListState);

    if (reviewListState.data.length === 0) {
      try {
        setReviewListState({ type: "FETCH" });

        const result = await getRequest(reviewsUrl, "all");
        console.log("pushed one");
        if (result) {
          console.log(result, "here");
          const cardArray = [];
          for (let item of result) {
            const user = await getRequest(usersUrl + item.owner, "user");

            cardArray.push(
              <ForumReviewPlacards
                review_id={item.review_id}
                title={item.title}
                category={item.category}
                designer={item.designer}
                votes={item.votes}
                avatar={user.avatar_url}
                reviewBody={item.review_body}
                reviewImageUrl={item.review_img_url}
                createdAt={item.created_at}
                userName={user.username}
                realName={user.name}
              />
            );
          }
          if (cardArray.length === result.length) {
            console.log("pushed two");
            // console.log(cardArray);
            setReviewListState({
              type: "ACTION-SUCCESS",
              payload: cardArray,
            });
            setPerformReviewAction(false);
          }
        }
      } catch (error) {
        console.log(error);
        setReviewListState({ type: "ACTION-FALIURE", payload: error });
      }
    } else if (performReviewAction.action === "delete") {
      try {
        setReviewListState({ type: "DELETE" });
        const result = await deleteRequest(
          reviewsUrl,
          reviewListState.data.review_id
        );
        setReviewListState({ type: "ACTION-SUCCESS", payload: result });
      } catch (error) {
        setReviewListState({ type: "ACTION-FALIURE", payload: error });
      }
    } else if (performReviewAction.action === "sort") {
      try {
        setReviewListState({ type: "SORT" });
        const result = await sortRequest(
          reviewsUrl,
          reviewListState.data.review_id,
          "placeholder"
        );
        setReviewListState({ type: "ACTION-SUCCESS", payload: result });
      } catch (error) {
        setReviewListState({ type: "ACTION-FALIURE", payload: error });
      }
    }

    console.log(reviewListState.data.length, "length");
  }, [performReviewAction]);

  useEffect(() => {
    console.log("i ran");
    initiateChangeReviews();
  }, [initiateChangeReviews]);

  return (
    <section>
      {reviewListState.isLoading === false ? (
        reviewListState.data
      ) : (
        <p>Waiting for load....</p>
      )}
      <button
        onClick={() => {
          setPerformReviewAction(true);
        }}
      >
        here
      </button>
    </section>
  );
};

export default ForumBoard;
