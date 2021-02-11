import { useState } from 'react';
import CheckTableCell from './CheckTableCell';
import ActionButton from './ActionButton';

function CheckTableRow({
  info: { id, name, address, amount },
  updateNonprofit,
}) {
  const [editing, setEditing] = useState(false);
  const [newAddress, setNewAddress] = useState(address);

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
      <CheckTableCell>{`$${amount.toFixed(2)}`}</CheckTableCell>
      <CheckTableCell>
        {editing ? (
          <>
            <ActionButton
              title={'Save'}
              action={() => {
                updateNonprofit(id, 'address', newAddress);
                setEditing(false);
              }}
            />
            <ActionButton title={'Cancel'} action={() => setEditing(false)} />
          </>
        ) : (
          <ActionButton title={'Edit'} action={() => setEditing(true)} />
        )}
      </CheckTableCell>
      <CheckTableCell>
        <ActionButton
          title={'Send'}
          action={() => updateNonprofit(id, 'amount', 0)}
        />
      </CheckTableCell>
    </tr>
  );
}

export default CheckTableRow;
