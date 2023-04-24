import { Author } from './Review.styled';
import PropTypes from 'prop-types';

export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <div>
      <Author>{author}</Author>
      <p>{content}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
