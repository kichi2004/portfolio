import React from 'react'
import './Devise.scss'
import { DeviceType, Devices } from '../assets/items'
interface DeviseProps extends DeviceType {}

export default class Devise extends React.Component<DeviseProps> {
  render() {
    const name = this.props.name
    const contents: JSX.Element[] = []
    for (const key of Object.keys(this.props.spec)) {
      const val = this.props.spec[key]
      contents.push(
        <div className="device-row">
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
