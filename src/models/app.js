let appModel = {
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
      console.log(payload);
    }
  }
};

export default appModel;
