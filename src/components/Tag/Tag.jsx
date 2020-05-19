import React, { Component } from 'react'
import { Tag, Button } from 'antd'
export default class TagText extends Component {
  state = {
    visible: true
  }
  render() {
    const {visible} = this.state
    console.log(123)
    return (
     <div>
       <Button type='primary' onClick={() => { this.setState({visible: !this.state.visible}) }}>{visible ? '隐藏' : '显示'}</Button>
       <span style={{visibility: visible ? 'initial' : 'hidden'}}><Tag color="magenta">magenta</Tag></span>
     </div>
    )
  }
}
