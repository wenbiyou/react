import isFunction from "./isFunction"
import mountComponent from "./mountComponent"
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container, oldDOM) {
  // Component VS NativeElement
  if (isFunction(virtualDOM)) {
    mountComponent(virtualDOM, container, oldDOM)
  } else {
    mountNativeElement(virtualDOM, container, oldDOM)
  }
}