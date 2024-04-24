import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MyInfo from "./assets/MyInfo.md";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(MyInfo)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}

export default App;
