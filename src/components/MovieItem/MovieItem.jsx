import { IMAGE_URL } from 'services/movieApi';
import PropTypes from 'prop-types';

export const MovieCastItem = ({
  movieCastItem: { name, character, profile_path },
}) => {
  return (
    <div>
      {name} - {character}
      <p>
        {profile_path ? (
          <img
            src={`${IMAGE_URL}${profile_path}`}
            alt={`${name}`}
            width="100"
          />
        ) : (
          'No image'
        )}
      </p>
    </div>
  );
};

MovieCastItem.propTypes = {
  movieCastItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
