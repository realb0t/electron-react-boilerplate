import { PropTypes } from 'react';

export default {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  solved: PropTypes.bool.isRequired,
  solving: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};
