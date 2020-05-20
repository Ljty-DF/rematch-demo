import React, { memo, useCallback } from "react";
import "./styles.css";
import { connect } from "react-redux";

function App(props) {
  console.log("6:", props);
  // const add = useCallback(i => props.add(i), [props]);
  const add = props.add;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h4>{props.count}</h4>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => add(2)}>点我变脸给你看</button>
      <button onClick={props.showLog}>哈哈😄</button>
    </div>
  );
}

let mapState = (state, ownProps) => {
  return { ...state.app };
};
let mapDispatch = dispatch => ({
  add: i => dispatch.app.add(i),
  showLog: () => dispatch.app.logState()
});

export default memo(
  connect(
    mapState,
    mapDispatch
  )(App)
);
