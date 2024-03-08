import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Cdef from "./components/abc/Cdef";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/logAndSign/Login";
import Home from "./components/Home";
import {MdDarkMode} from "react-icons/md"
import useTheme from "./components/custom/useTheme";

function App() {
  const [theme,setTheme] = useState("#475569")
  // const [theme1,changeTheme] = useTheme(true)
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
        <header className="header flex justify-between">
          <div className="flex items-center">
            <img className="logo" src={reactLogo} alt="logo" />
            <h2 className="mr-8">React</h2>
            <Navbar />
          </div>
          {/* <div className="flex mr-4 cursor-pointer" onClick={() => changeTheme(!theme1)}>
            <MdDarkMode size={25}/>
            <h3>Dark</h3>
          </div> */}
        </header>
      </div>
      {/* [#475569] */}
      <div className={`card bg-[#475569] shadow-lg shadow-current`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <button className="bg-blue-500">Add Division</button> */}
      </div>
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
