import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Cdef from "./components/abc/Cdef";
import { Router, Routes } from "react-router-dom";

function App() {
  const navLinks = [
    {
      name: "link one",
    },
    {
      name: "link two",
      children: [
        {
          name: "link two sub",
        },
        {
          name: "link two sub 2",
        },
      ],
    },
    {
      name: "link three",
      children: [
        {
          name: "link three sub",
        },
        {
          name: "link three sub 2",
          children: [
            {
              name: "deep 3",
            },
            {
              name: "deep 2nd 3",
            },
          ],
        },
        {
          name: "link three sub",
        },
      ],
    },
    {
      name: "link four",
    },
    {
      name: "link five",
      children: [
        {
          name: "link five sub 1",
        },
        {
          name: "link five sub 2",
        },
      ],
    },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("copy branch");
  });

  return (
    <>
      <div className="header-parent">
        <header className="header">
              <img className="logo" src={reactLogo} alt="logo" />
              <h2 className="mr-8">React</h2>
              <Navbar />
            <Routes>
            </Routes>
        </header>
      </div>
      <Cdef />
      <button className="bg-blue-500">Add Division</button>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
