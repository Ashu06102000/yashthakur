import { useContext } from "react";
import { NameContext } from "./App";

const Grandchild = () => {
  const { setName } = useContext(NameContext);
  return (
    <div>
      <button onClick={() => setName("thakur")}>click</button>
    </div>
  );
};
export default Grandchild;
