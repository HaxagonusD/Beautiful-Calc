/** @jsxImportSource @emotion/react */
import { useState } from "react";
import tw from "twin.macro";

function App() {
  const [expression, setExpression] = useState("");
  const [thinking, setThinking] = useState(false);

  const ACorCE = thinking ? "CE" : "AC";

  const handleCalcButtonClick = (event) => {
    event.preventDefault();
    setExpression(expression + event.target.value);
    setThinking(true);
  };

  const evaluate = (event) => {
    event.preventDefault();
    setExpression(eval(expression));
    setThinking(false);
  };

  const clear = () => {
    if (thinking) {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression("");
    }
  };

  const BaseButton = tw.button`rounded py-1.5 text-sm bg-gray-200 text-center px-6 m-1 hover:bg-gray-100`;
  const BlueButton = tw.button`rounded py-1.5 text-sm bg-blue-600 text-center px-6 m-1 text-white hover:bg-blue-500`;
  const OpButton = tw.button`rounded py-1.5 text-sm bg-gray-400 text-center px-6 m-1 hover:bg-gray-300`;

  return (
    <div
      className="App"
      tw="bg-gray-100 h-screen flex justify-center items-center"
    >
      <form tw="flex flex-col">
        <input
          tw="h-8 mx-1 my-2 text-right px-2"
          value={expression}
          onChange={(event) => {
            setExpression(event.target.value);
            console.log(expression);
          }}
        ></input>
        <div tw="flex">
          <div tw="flex flex-col">
            <OpButton onClick={handleCalcButtonClick} value="(">
              (
            </OpButton>
            <BaseButton
              onClick={handleCalcButtonClick}
              value="7"
              tw="rounded py-1.5 text-sm bg-gray-200 text-center px-6 m-1"
            >
              7
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="4">
              4
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="1">
              1
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="0">
              0
            </BaseButton>
          </div>
          <div tw="flex flex-col">
            <OpButton onClick={handleCalcButtonClick} value=")">
              )
            </OpButton>
            <BaseButton onClick={handleCalcButtonClick} value="8">
              8
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="5">
              5
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="2">
              2
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value=".">
              .
            </BaseButton>
          </div>
          <div tw="flex flex-col">
            <OpButton onClick={handleCalcButtonClick} value="**">
              ^
            </OpButton>
            <BaseButton onClick={handleCalcButtonClick} value="9">
              9
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="6">
              6
            </BaseButton>
            <BaseButton onClick={handleCalcButtonClick} value="3">
              3
            </BaseButton>
            <BlueButton onClick={evaluate} value="=">
              =
            </BlueButton>
          </div>
          <div tw="flex flex-col">
            <OpButton onClick={clear} value="">
              {ACorCE}
            </OpButton>
            <OpButton onClick={handleCalcButtonClick} value="/">
              /
            </OpButton>
            <OpButton onClick={handleCalcButtonClick} value="*">
              x
            </OpButton>
            <OpButton onClick={handleCalcButtonClick} value="-">
              -
            </OpButton>
            <OpButton onClick={handleCalcButtonClick} value="+">
              +
            </OpButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
