import { intersection } from '../vec2/intersection.js';
import { distance } from '../vec2/distance.js';
import { cos, sin } from '../utils/Math.js';
import { midpoint } from '../vec2/midpoint.js';
import { inferLine } from '../vec2/inferLine.js';
import { isEndPointAngleParameters, isVec2, isControlPointsMidpointParameters, isControlPointsAngleParameters, isControlPointsVec2Parameters } from './BezierControlPoints.type.js';
import { absoluteAngle } from '../vec2/absoluteAngle.js';
import { rotatePoint } from '../vec2/rotatePoint.js';

var bezierControlPoints = function bezierControlPoints(props) {
  var start = props.start,
    points = props.points;
  var pathsInfo = [];
  for (var i = 0; i < points.length; i++) {
    var _points$i = points[i],
      end = _points$i.end,
      controls = _points$i.controls;
    //Start point
    var startAnchor = pathsInfo.length === 0 ? start : pathsInfo[pathsInfo.length - 1].endAnchor;
    //End point
    var endAnchor = {
      x: 0,
      y: 0
    };
    if (isEndPointAngleParameters(end)) {
      var _eaa = end.eaa,
        _eal = end.eal;
      endAnchor = {
        x: startAnchor.x + cos(_eaa) * _eal,
        y: startAnchor.y - sin(_eaa) * _eal
      };
    }
    if (isVec2(end)) {
      endAnchor = end;
    }
    //Anchor midpoint
    var anchorMidpoint = midpoint(startAnchor, endAnchor);
    //Other parameters
    var eaa = 0;
    var eal = 0;
    if (isEndPointAngleParameters(end)) {
      eaa = end.eaa;
      eal = end.eal;
    } else {
      eaa = absoluteAngle({
        start: startAnchor,
        end: endAnchor
      });
      eal = distance(startAnchor, endAnchor);
    }
    //Start control, End control, Control midpoint
    var startControl = {
      x: 0,
      y: 0
    };
    var endControl = {
      x: 0,
      y: 0
    };
    var controlMidpoint = {
      x: 0,
      y: 0
    };
    if (isControlPointsMidpointParameters(controls)) {
      var cma = controls.cma,
        cml = controls.cml,
        cdr = controls.cdr,
        cda = controls.cda;
      controlMidpoint = {
        x: anchorMidpoint.x + cos(eaa + (90 - cma)) * cml,
        y: anchorMidpoint.y - sin(eaa + (90 - cma)) * cml
      };
      var controlDistance = 0;
      if (cdr !== "smooth") {
        controlDistance = eal * cdr;
      } else {
        var _intersection;
        var controlLineAngle = eaa - cma - cda;
        var inferedControlLine = inferLine({
          point: controlMidpoint,
          angle: controlLineAngle
        });
        var previousPath = pathsInfo[pathsInfo.length - 1];
        var smoothStartControl = (_intersection = intersection([previousPath.endControl, previousPath.endAnchor], inferedControlLine)) !== null && _intersection !== void 0 ? _intersection : {
          x: 0,
          y: 0
        };
        controlDistance = distance(smoothStartControl, controlMidpoint) * 2;
      }
      startControl = {
        x: controlMidpoint.x + cos(180 - (cma - eaa + cda)) * (controlDistance / 2),
        y: controlMidpoint.y - sin(180 - (cma - eaa + cda)) * (controlDistance / 2)
      };
      endControl = {
        x: controlMidpoint.x + cos(360 - (cma - eaa + cda)) * (controlDistance / 2),
        y: controlMidpoint.y - sin(360 - (cma - eaa + cda)) * (controlDistance / 2)
      };
    }
    if (isControlPointsAngleParameters(controls)) {
      var prev_startAnchor = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endAnchor;
      var prev_endControl = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endControl;
      var prev_endAnchor = startAnchor;
      var prev_eaa = absoluteAngle({
        start: prev_startAnchor,
        end: prev_endAnchor
      });
      var prev_eca = 180 - (absoluteAngle({
        start: prev_endAnchor,
        end: prev_endControl
      }) - prev_eaa);
      var sca = controls.sca === "smooth" ? -(prev_eaa - eaa + prev_eca) : -controls.sca;
      var scl = controls.scl;
      var eca = -controls.eca;
      var ecl = controls.ecl;
      startControl = rotatePoint({
        center: startAnchor,
        angle: eaa,
        point: {
          x: startAnchor.x + cos(sca) * scl,
          y: startAnchor.y + sin(sca) * scl
        }
      });
      endControl = rotatePoint({
        center: endAnchor,
        angle: eaa,
        point: {
          x: endAnchor.x - cos(eca) * ecl,
          y: endAnchor.y + sin(eca) * ecl
        }
      });
      controlMidpoint = midpoint(startControl, endControl);
    }
    if (isControlPointsVec2Parameters(controls)) {
      startControl = controls.sc;
      endControl = controls.ec;
      controlMidpoint = midpoint(startControl, endControl);
    }
    pathsInfo.push({
      startAnchor: startAnchor,
      startControl: startControl,
      endControl: endControl,
      endAnchor: endAnchor,
      anchorMidpoint: anchorMidpoint,
      controlMidpoint: controlMidpoint
    });
  }
  return pathsInfo;
};

export { bezierControlPoints };
//# sourceMappingURL=bezierControlPoints.js.map
