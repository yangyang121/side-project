import React, { useState, useCallback } from "react";
import KeyBoard from "../component/KeyBoard";
import { Button } from "antd";

function KeyBoardWrap() {
  const [visible, setVisible] = useState<boolean>(false);
  const passwordCount = 6;
  const handleChange = useCallback((arr: number[]) => {
    console.log("change", arr);
    if (arr.length === passwordCount) {
      setVisible(false);
    }
  }, []);

  return (
    <>
      {!visible && (
        <Button type="primary" onClick={() => setVisible(true)}>
          pay
        </Button>
      )}
      <KeyBoard
        visible={visible}
        className="my-keyboard-wrap"
        handleChange={handleChange}
      />
    </>
  );
}

export default KeyBoardWrap;
