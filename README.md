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
