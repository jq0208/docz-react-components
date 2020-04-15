import React, { Component } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

class Icon extends Component {
  render () {
    const {
      type,
      title,
      scriptUrl,
      ...restProps
    } = this.props

    const CustomIcon = createFromIconfontCN({
      scriptUrl: scriptUrl || require('./IconJsFile/iconfont.js')
    })

    return (
      <CustomIcon type={type} {...restProps} />
    )
  }
}

export default Icon
