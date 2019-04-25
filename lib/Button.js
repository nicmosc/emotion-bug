import { css as _css } from "emotion";
import React from 'react';
var styles = {
  base:
  /*#__PURE__*/
  _css(process.env.NODE_ENV === "production" ? {
    name: "10sdv60-Button__base",
    styles: "background:red;label:Button__base;"
  } : {
    name: "10sdv60-Button__base",
    styles: "background:red;label:Button__base;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvQnV0dG9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLVyIsImZpbGUiOiIuLi9jb21wb25lbnRzL0J1dHRvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYXNlOiBjc3NgXG4gICAgYmFja2dyb3VuZDogcmVkO1xuICBgLFxufTtcblxuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"
  })
};

var Button = function Button(_ref) {
  var children = _ref.children;
  return React.createElement("button", {
    className: styles.base
  }, children);
};

export default Button;