# 重新思考 Redux

## 快速开始

> npm install @rematch/core

### Init

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
