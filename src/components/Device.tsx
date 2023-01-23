import React from 'react'
import './Device.scss'
import { DeviceType } from '../assets/items'
interface DeviceProps extends DeviceType {}

export default class Device extends React.Component<DeviceProps> {
  render() {
    const name = this.props.name
    const contents: JSX.Element[] = []
    for (const key of Object.keys(this.props.spec)) {
      const val = this.props.spec[key]
      contents.push(
        <div className="device-row" key={key}>
          <div className="device-row__title">{key}</div>
          <div className="device-row__value">{val}</div>
        </div>
      )
    }
    return (
      <div className="device">
        <div className="device__name"> {name}</div>
        {contents}
      </div>
    )
  }
}
