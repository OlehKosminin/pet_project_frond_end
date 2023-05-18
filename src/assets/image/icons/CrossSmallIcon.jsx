import PropTypes from 'prop-types';

export const CrossSmallIcon = ({ id, className, onClick }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          onClick={onClick}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24" 
          viewBox="0 0 24 24"
        >
            <title>cross-small</title>
            <path d="M19 5L5 19M5.00004 5L19 19" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
  
CrossSmallIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
