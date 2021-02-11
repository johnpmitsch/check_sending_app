import { useEffect, useState } from 'react';
import CheckTableHeader from './CheckTableHeader';
import CheckTableRow from './CheckTableRow';
import nonprofits from '../data/nonprofits';

function CheckTable() {
  const initalizeState = () =>
    window.localStorage.getItem('nonprofits') || nonprofits;
  const [currentNonprofits, setCurrentNonprofits] = useState(initalizeState());

  useEffect(() => {
    window.localStorage.setItem('nonprofits', nonprofits);
  }, [currentNonprofits]);

  return (
    <table>
      <CheckTableHeader />
      <tbody>
        {currentNonprofits.map(({ id, ...info }) => {
          const { amount } = info;
          // only show nonprofit if it's over zero
          if (amount > 0) {
            return <CheckTableRow key={id} info={info} />;
          }
        })}
      </tbody>
    </table>
  );
}

export default CheckTable;
