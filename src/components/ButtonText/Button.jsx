import React, { Component } from 'react'
import {Button} from 'antd'
// import 'antd/dist/antd.css'
import './style.scss'
export default class ButtonText extends Component {

  render () {
    return (
      <Button className='test' type='primary'>确定</Button>
    )
  }
}
