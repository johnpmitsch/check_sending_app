import CheckTableHeader from './CheckTableHeader';
import nonProfits from '../data/nonprofits';

function CheckTable() {
  return (
    <table>
      <CheckTableHeader />
      {nonProfits.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </table>
  );
}

export default CheckTable;
