/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Checkbox/cn.md'
import en from 'doc/pages/components/Checkbox/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate('基本用法 \n 基本的 Checkbox', 'Base'),
    component: require('doc/pages/components/Checkbox/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-01-base.js'),
  },
  {
    name: '02-checked',
    title: locate('状态 \n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理 onChange 事件）。', 'Checked'),
    component: require('doc/pages/components/Checkbox/example-02-checked.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-02-checked.js'),
  },
  {
    name: '03-value',
    title: locate('选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。', 'Value'),
    component: require('doc/pages/components/Checkbox/example-03-value.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-03-value.js'),
  },
  {
    name: '04-group',
    title: locate('一组多选框 \n Checkbox.Group 可以渲染一组 Checkbox', 'Group'),
    component: require('doc/pages/components/Checkbox/example-04-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-04-group.js'),
  },
  {
    name: '05-format',
    title: locate('复杂数据 \n 复杂的数据可以使用 format 处理 value', ''),
    component: require('doc/pages/components/Checkbox/example-05-format.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-05-format.js'),
  },
  {
    name: '06-datum',
    title: locate(' \n 当 format 不能满足需求时，可以使用 Datum.List 进行处理', ''),
    component: require('doc/pages/components/Checkbox/example-06-datum.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-06-datum.js'),
  },
  {
    name: '07-rawgroup',
    title: locate(' \n 可以按 React 组件方式使用', ''),
    component: require('doc/pages/components/Checkbox/example-07-rawgroup.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-07-rawgroup.js'),
  },
  {
    name: '08-block',
    title: locate('垂直布局 \n 默认是水平布局，设置 block 属性可以改为垂直布局', 'Block'),
    component: require('doc/pages/components/Checkbox/example-08-block.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-08-block.js'),
  },
  {
    name: '09-disabled',
    title: locate('禁用 \n 设置 Checkbox.Group 的 disabled 属性，禁用全部选项', 'Disabled'),
    component: require('doc/pages/components/Checkbox/example-09-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-09-disabled.js'),
  },
  {
    name: '10-disabled',
    title: locate(' \n disabled 为函数时，根据函数结果实现有条件禁用', 'Disabled'),
    component: require('doc/pages/components/Checkbox/example-10-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-10-disabled.js'),
  },
  {
    name: '11-input',
    title: locate('带输入 \n 设置 inputable 属性可以显示输入框，返回值为输入框内容', 'Inputable'),
    component: require('doc/pages/components/Checkbox/example-11-input.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-11-input.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))