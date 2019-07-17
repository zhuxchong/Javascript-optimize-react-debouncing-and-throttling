import React from "react";
import logo from "./logo.svg";
import "./App.css";
import De from "./DebouncingDemo";

import Sc from "./ThrottleInfiniteImport";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// throttle：将一个函数的调用频率限制在一定阈值内，例如 1s 内一个函数不能被调用两次。
// debounce：当调用函数n秒后，才会执行该动作，若在这n秒内又调用该函数则将取消前一次并重新计算执行时间

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/th" exact component={Sc} />

          <Route path="/de" exact component={De} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
