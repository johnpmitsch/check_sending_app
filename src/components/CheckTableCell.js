import PropTypes from 'prop-types';
import './stylesheets/checkTableCell.css';

function CheckTableCell({ children, small }) {
  return (
    <td className={small ? 'small-table-cell' : 'table-cell'}>{children}</td>
  );
}

CheckTableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  small: PropTypes.bool,
};

CheckTableCell.defaultProps = {
  small: false,
};

export default CheckTableCell;
