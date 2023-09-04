import { useState } from 'react';
import { useTextContext } from '../contexts/TextContext';

const Father: React.FC = () => {
  const { setState } = useTextContext();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleUpdateState = () => {
    setState(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleUpdateState}>Set State</button>
    </div>
  );
};

export default Father;