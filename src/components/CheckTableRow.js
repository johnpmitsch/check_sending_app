import { useState } from 'react';
import PropTypes from 'prop-types';
import CheckTableCell from './CheckTableCell';
import ActionButton from './ActionButton';

function CheckTableRow({
  info: { id, name, address, amount },
  updateNonprofit,
}) {
  const [editing, setEditing] = useState(false);
  const [newAddress, setNewAddress] = useState(address);
  const dollarAmount = `$${amount.toFixed(2)}`;

  return (
    <tr>
      <CheckTableCell>{name}</CheckTableCell>
      <CheckTableCell>
        {editing ? (
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        ) : (
          address
        )}
      </CheckTableCell>
      <CheckTableCell>{dollarAmount}</CheckTableCell>
      <CheckTableCell small={true}>
        {editing ? (
          <>
            <ActionButton
              title={'Save'}
              action={() => {
                updateNonprofit(id, 'address', newAddress);
                setEditing(false);
              }}
            />
            <ActionButton
              title={'Cancel'}
              action={() => {
                setNewAddress(address);
                setEditing(false);
              }}
            />
          </>
        ) : (
          <ActionButton title={'Edit'} action={() => setEditing(true)} />
        )}
      </CheckTableCell>
      <CheckTableCell small={true}>
        <ActionButton
          title={'Send'}
          action={() => {
            const msg = `Would you like to send a check to ${name} for ${dollarAmount}?`;
            const confirmed = confirm(msg);
            if (confirmed) updateNonprofit(id, 'amount', 0);
          }}
        />
      </CheckTableCell>
    </tr>
  );
}

CheckTableRow.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
  updateNonprofit: PropTypes.func.isRequired,
};

export default CheckTableRow;
