import { useContext, useMemo, useState } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count.jsx";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom); //performance benefits
  //const [count, setCount] = useRecoilState(countAtom);  //also works tho
  return (
    <div>
      <b>{count}</b>
      {/* <EvenCountRenderer /> */}
    </div>
  );
}

function EvenCountRenderer() {
  const [count, setCount] = useRecoilState(countAtom);
  if (!(count & 1)) return <div>Even</div>;
  else return <div>Odd</div>;
}

function Buttons() {
  const setCount= useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count)=> count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count=> count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
