import { jsx } from 'react/jsx-runtime';

var SvgCircle = function SvgCircle(props) {
  var _props$fill, _props$fill2;
  return jsx("circle", {
    cx: props.center.x,
    cy: props.center.y,
    r: props.radius,
    stroke: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : "black",
    fill: (_props$fill2 = props.fill) !== null && _props$fill2 !== void 0 ? _props$fill2 : "transparent"
  });
};

export { SvgCircle as default };
//# sourceMappingURL=SvgCircle.js.map
