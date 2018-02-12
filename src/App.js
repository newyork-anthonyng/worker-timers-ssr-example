import React from "react";
// This import will break when run on the server
import * as workerTimers from "worker-timers";

class App extends React.Component {
  render() {
    return <p>Some component that uses worker-timers</p>
  }
}

export default App;