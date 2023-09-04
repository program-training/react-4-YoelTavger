import { TextContextProvider } from "../../contexts/TextContext";
import Father from "./Father";
import Child from "./Child";

const Grandpa: React.FC = () => {
  return (
    <TextContextProvider>
      <div>
        <Father />
        <Child />
      </div>
    </TextContextProvider>
  );
};

export default Grandpa;
