import { NavLink } from "react-router-dom";

const ForumReviewPlacards = ({
  review_id,
  title,
  category,
  designer,
  votes,
  avatar,
  reviewBody,
  reviewImageUrl,
  createdAt,
  userName,
  realName,
}) => {
  return (
    <NavLink to={`/reviews/review/${review_id}`} className="cards">
      <div>
        <img src={reviewImageUrl} height="100px" width="100px" />
        <ul>
          <li>
            <b>Title: </b>
            {title}
          </li>
          <li>
            <b>Category:</b>
            {category}
          </li>
        </ul>
      </div>
      <span>
        <b>Votes:</b>
        {votes}
        <b>ID:</b>
        {review_id}
      </span>
    </NavLink>
  );
};

export default ForumReviewPlacards;
