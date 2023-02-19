import diff from "./diff"

export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的 virtualDOM 对象
    let virtualDOM = this.render()
    let oldDOM = this.getDOM()
    // 获取容器
    let container = oldDOM.parentNode
    // 实现对象
    diff(virtualDOM, container, oldDOM)
  }
  setDOM(dom) {
    this._dom = dom
  }
  getDOM() {
    return this._dom
  }
  updateProps(props) {
    this.props = props
  }
  // 生命周期
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps() {
  }
  shouldComponentUpdate(nextProps, nextStat) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {
  }
  componentDidUpdate(nextProps, nextStat) {

  }
  componentWillUnmount() {

  }
}