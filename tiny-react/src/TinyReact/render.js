import diff from "./diff";

export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  // virtualDOM => 真实Dom
  diff(virtualDOM, container, oldDOM);
}
