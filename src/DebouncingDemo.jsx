import React from "react";
import logo from "./logo.svg";
import "./App.css";
import loadsh from "loadsh";

function DebouncingDemo() {
  React.useEffect(() => {
    window.addEventListener("scroll", debounce(hanlder, 100)); //会自动执行函数只需函数名 functionName 不要加括号

    return () => {
      window.removeEventListener("scroll", debounce);
    };
  }, []);
  function hanlder(e) {
    console.log("Hanlde the event from lodash." + e);
  }

  function debounce(func, wait) {
    let timeID = null;
    return function() {
      //每次滚动都会激活这个匿名函数

      // 首先是清空定时器
      clearTimeout(timeID);
      // 延迟 wait ms后执行真正的事件处理函数
      timeID = setTimeout(func, wait);
    };
  }

  let sendRequest = null;
  const handleInput = e => {
    const data = e.target.value;
    clearTimeout(sendRequest);
    sendRequest = setTimeout(() => {
      console.log(data + "has been sent delay 1s(personal function)");
    }, 1000);
    //sendRequest = debounce(sendReq, 1000)();
    // debounce(sendReq, 100, e.target.value);
  };
  let debounced = null;
  const handleInputLodash = e => {
    const data = e.target.value;
    if (debounced) {
      debounced.cancel();
    }
    debounced = loadsh.debounce(() => {
      hanlder(data);
    }, 1000);
    debounced();
  };
  return (
    <div className="App">
      <span>once you stop input value , the data while sent out</span>
      <input onChange={handleInput} />
      <span>lodash</span>
      <input onChange={handleInputLodash} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default DebouncingDemo;
