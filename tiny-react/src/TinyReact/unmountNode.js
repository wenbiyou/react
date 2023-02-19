export default function unmountNode(node) {
  // 获取节点的 _virtualDOM 对象
  const virtualDOM = node._virtualDOM
  // 1. 文本节点的 _virtualDOM 对象
  if (virtualDOM.type === 'text') {
    node.remove()
    return
  }

  // 2. 看下节点是否由组件生成的
  let component = virtualDOM.component
  if (component) {
    component.componentWillUnmount()
  }
  // 3. 看下节点是否有ref属性
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }
  // 4. 看下节点是否有事件属性]
  Object.keys(virtualDOM.props).forEach((propName) => {
    if (propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(0, 2)
      const eventHandler = virtualDOM.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })

  // 5. 递归删除子节点
  if (node.childNodes.length > 0) {
    for (let i=0; i<node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }
  // 节点删除
  node.remove()
  
}