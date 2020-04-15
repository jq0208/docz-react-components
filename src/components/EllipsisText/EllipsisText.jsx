import React from 'react'
import { Tooltip } from 'antd'



export default class EllipsisText extends React.Component {
  render () {
    return (
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    )
  }
}
