import { useEffect, useState } from 'react';
import CheckTableHeader from './CheckTableHeader';
import CheckTableRow from './CheckTableRow';
import nonprofits from '../data/nonprofits';

function CheckTable() {
  const [currentNonprofits, setCurrentNonprofits] = useState([]);

  useEffect(() => {
    // Set nonprofits to the fixed list on first load, then we can use and manipulate from state
    // This would be where an API call would happen
    setCurrentNonprofits(nonprofits);
  }, []);

  // Update an attribute in a nonprofit object and save back to state
  const updateNonprofit = (updateId, attribute, newValue) => {
    const updatedNonProfits = currentNonprofits.map((np) => {
      const { id } = np;
      return id === updateId ? { ...np, [attribute]: newValue } : np;
    });
    setCurrentNonprofits(updatedNonProfits);
  };

  return (
    <table>
      <CheckTableHeader />
      <tbody>
        {currentNonprofits.map((info) => {
          const { id, amount } = info;
          if (amount > 0) {
            return (
              <CheckTableRow
                key={id}
                info={info}
                setCurrentNonprofits={setCurrentNonprofits}
                updateNonprofit={updateNonprofit}
              />
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default CheckTable;
