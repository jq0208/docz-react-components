# 说明


# 开发

在对应的分类下创建文件夹，文件夹以组件名命名，并增加example文件夹，引入对应的组件进行开发，例如：
```md
---
name: 按钮
menu: 1. 按钮
---

import { Props, Playground } from 'docz'
import Button from '../index.js'

## 组件名

`<Button />`

## 基本属性

| 属性名 | 描述 | 类型 | 默认值 | 必填项
| :----: | :----: | :----: | :----: | :----: |
| `children` | 边框内的元素 | 任意类型 | 无 | 是

## 基本使用

<Playground>
  <Button />
</Playground>
```

# 安装

```bash
npm install giraffe-bui
```

# 使用

```javascript
import {Button} from 'giraffe-bui'

class Demo extends React.Component {
  render () {
    return (
      <div>
        <Button />
      </div>
    )
  }
}
```
