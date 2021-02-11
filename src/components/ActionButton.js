import PropTypes from 'prop-types';

function ActionButton({ title, action }) {
  return <button onClick={action}>{title}</button>;
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ActionButton;
