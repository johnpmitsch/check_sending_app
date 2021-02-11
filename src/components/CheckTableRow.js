import { useState } from 'react';
import PropTypes from 'prop-types';
import CheckTableCell from './CheckTableCell';
import ActionButton from './ActionButton';
import { toDollars } from '../helpers';

function CheckTableRow({
  info: { id, name, address, amount },
  updateNonprofit,
}) {
  const [editing, setEditing] = useState(false);
  const [newAddress, setNewAddress] = useState(address);
  const confirmAndSend = () => {
    const msg = `Would you like to send a check to ${name} for ${toDollars(
      amount
    )}?`;
    const confirmed = confirm(msg);
    if (confirmed) updateNonprofit(id, 'amount', 0);
  };

  return (
    <tr>
      <CheckTableCell>{name}</CheckTableCell>
      <CheckTableCell>
        {editing ? (
          <input
            type="text"
            aria-label={`${name} address`}
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        ) : (
          address
        )}
      </CheckTableCell>
      <CheckTableCell>{toDollars(amount)}</CheckTableCell>
      <CheckTableCell small={true}>
        {editing ? (
          <>
            <ActionButton
              title={'Save'}
              label={`save ${name}`}
              action={() => {
                updateNonprofit(id, 'address', newAddress);
                setEditing(false);
              }}
            />
            <ActionButton
              title={'Cancel'}
              label={`cancel ${name}`}
              action={() => {
                setNewAddress(address);
                setEditing(false);
              }}
            />
          </>
        ) : (
          <ActionButton
            title={'Edit'}
            label={`edit ${name}`}
            action={() => setEditing(true)}
          />
        )}
      </CheckTableCell>
      <CheckTableCell small={true}>
        <ActionButton
          title={'Send'}
          label={`send ${name}`}
          action={confirmAndSend}
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
