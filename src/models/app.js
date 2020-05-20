let appModel = {
  namespace: "app",
  state: {
    count: 0
  },
  reducers: {
    add(state, payload) {
      return { ...state, count: state.count + payload };
    }
  },
  effects: {
    logState(payload, rootState) {
      console.log(rootState);
    }
  }
};

export default appModel;
