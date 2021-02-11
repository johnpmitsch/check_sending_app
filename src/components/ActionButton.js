import PropTypes from 'prop-types';

function ActionButton({ label, title, action }) {
  return (
    <button aria-label={label} onClick={action}>
      {title}
    </button>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ActionButton;
