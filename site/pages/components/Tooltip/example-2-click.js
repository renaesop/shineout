/**
 * cn - 点击事件
 *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click
 * en - Click
 */
import React from 'react'
import { Tooltip } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

const fontStyle = { fontSize: 20, lineHeight: 1 }

export default function () {
  return (
    <div>
      <Tooltip tip="Some text." trigger="click" position="left" style={{ marginRight: 12 }}>
        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />
      </Tooltip>
      <Tooltip tip="Some text." trigger="click" position="top" style={{ marginRight: 12 }}>
        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />
      </Tooltip>
      <Tooltip tip="Some text." trigger="click" position="bottom" style={{ marginRight: 12 }}>
        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />
      </Tooltip>
      <Tooltip tip="Some text." trigger="click" position="right" style={{ marginRight: 12 }}>
        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />
      </Tooltip>
    </div>
  )
}