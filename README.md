# 重新思考 Redux

## 快速开始

```c
npm install @rematch/core
```

### 第一步：Init

init 用来配置你的 reducers，devtools & store

index.js

```c
import { init } from '@rematch/core'
import * as models from './models'

const store = init({
    models,
})

export default store
```

对于更高级的设置，查看[插件](https://rematch.gitbooks.io/rematch/docs/plugins.md)和[Redux 配置选项](https://rematch.gitbook.io/handbook/~/edit/primary/api-wen-dang/init-redux-api)

### 第二步：Models

该 model 促使 state， reducers， async actions 和 action creators 放在同一个地方。

models.js

```c
export const count = {
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload
        },
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment(payload)
        },
    },
}
```

### 第三步：Dispatch

dispatch 是我们如何在你的 model 中触发 reducers 和 effects。 Dispatch 标准化了你的 action，而无需编写 action types 或者 action creators。

```c
import { dispatch } from '@rematch/core'

// state = { count: 0 }
// reducers
dispatch({ type: 'count/increment', payload: 1 }) // state = { count: 1 }
dispatch.count.increment(1) // state = { count: 2 }

// effects
dispatch({ type: 'count/incrementAsync', payload: 1 }) // state = { count: 3 } after delay
dispatch.count.incrementAsync(1) // state = { count: 4 } after delay

```

### 第四步：Views

```c
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './index'

const Count = props => (
    <div>
        The count is {props.count}
        <button onClick={props.increment}>increment</button>
        <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
)

const mapState = state => ({
    count: state.count,
})

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1),
})

const CountContainer = connect(
    mapState,
    mapDispatch
)(Count)

ReactDOM.render(
    <Provider store={store}>
        <CountContainer />
    </Provider>,
    document.getElementById('root')
)

```
