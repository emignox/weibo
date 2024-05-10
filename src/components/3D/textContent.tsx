import Text from "./text";
import { useNavigate } from "react-router-dom";
import React from "react";

const Content = React.memo(() => {
  const navigate = useNavigate();
  return (
    <>
      <Text
        onClick={() => navigate("/")}
        value="weibo"
        color={"#93e4c1"}
        position={[-7, 9, 0]}
        size={3.5}
        bevelThickness={0.3}
        bevelSize={0.1}
        metalness={1}
        rotation={[0.12, 0, 0]}
      />
      <Text
        value="Men"
        color={"#fcffc1"}
        position={[-9, -4, 10]}
        size={0.7}
        bevelThickness={0.1}
        bevelSize={0.04}
        metalness={0.5}
        rotation={[0, 0, 0]}
      />
      <Text
        value="Women"
        color={"#bbe4e9"}
        position={[-2.1, -4, 10]}
        size={0.7}
        bevelThickness={0.1}
        bevelSize={0.04}
        metalness={0.5}
        rotation={[0, 0, 0]}
      />
      <Text
        value="Children"
        color={"#ef5a5a"}
        position={[5, -4, 10]}
        size={0.7}
        bevelThickness={0.1}
        bevelSize={0.04}
        metalness={0.5}
        rotation={[0, 0, 0]}
      />
    </>
  );
});

export default Content;
