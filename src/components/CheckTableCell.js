import PropTypes from 'prop-types';

function CheckTableCell({ children }) {
  return <td>{children}</td>;
}

CheckTableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};

export default CheckTableCell;
