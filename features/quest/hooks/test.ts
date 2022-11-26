import { useEffect, useState } from "react";

export const useTest = () => {
  const [text, setText] = useState("alaoa");

  useEffect(() => {
    console.log("useEffect");
  }, [text]);

  console.log("rerun");

  return [text, setText];
};
