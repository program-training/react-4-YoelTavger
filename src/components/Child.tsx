import { useTextContext } from "../contexts/TextContext";

const Child: React.FC = () => {
  const { state } = useTextContext();

  return <h1>Child: {state}</h1>;
};

export default Child;
