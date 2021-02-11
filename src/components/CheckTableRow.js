import CheckTableCell from './CheckTableCell';
import ActionButton from './ActionButton';

function CheckTableRow({ info: { name, address, amount } }) {
  console.log(name);
  return (
    <tr>
      <CheckTableCell>{name}</CheckTableCell>
      <CheckTableCell>{address}</CheckTableCell>
      <CheckTableCell>{`$${amount.toFixed(2)}`}</CheckTableCell>
      <CheckTableCell>
        <ActionButton title={'Edit'} />
      </CheckTableCell>
      <CheckTableCell>
        <ActionButton title={'Send'} />
      </CheckTableCell>
    </tr>
  );
}

export default CheckTableRow;
