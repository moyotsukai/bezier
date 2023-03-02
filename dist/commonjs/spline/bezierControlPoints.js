'use strict';

var intersection = require('../vec2/intersection.js');
var distance = require('../vec2/distance.js');
var Math = require('../utils/Math.js');
var midpoint = require('../vec2/midpoint.js');
var inferLine = require('../vec2/inferLine.js');
var BezierControlPoints_type = require('./BezierControlPoints.type.js');
var absoluteAngle = require('../vec2/absoluteAngle.js');
var rotatePoint = require('../vec2/rotatePoint.js');

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
    if (BezierControlPoints_type.isEndPointAngleParameters(end)) {
      var _eaa = end.eaa,
        _eal = end.eal;
      endAnchor = {
        x: startAnchor.x + Math.cos(_eaa) * _eal,
        y: startAnchor.y - Math.sin(_eaa) * _eal
      };
    }
    if (BezierControlPoints_type.isVec2(end)) {
      endAnchor = end;
    }
    //Anchor midpoint
    var anchorMidpoint = midpoint.midpoint(startAnchor, endAnchor);
    //Other parameters
    var eaa = 0;
    var eal = 0;
    if (BezierControlPoints_type.isEndPointAngleParameters(end)) {
      eaa = end.eaa;
      eal = end.eal;
    } else {
      eaa = absoluteAngle.absoluteAngle({
        start: startAnchor,
        end: endAnchor
      });
      eal = distance.distance(startAnchor, endAnchor);
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
    if (BezierControlPoints_type.isControlPointsMidpointParameters(controls)) {
      var cma = controls.cma,
        cml = controls.cml,
        cdr = controls.cdr,
        cda = controls.cda;
      controlMidpoint = {
        x: anchorMidpoint.x + Math.cos(eaa + (90 - cma)) * cml,
        y: anchorMidpoint.y - Math.sin(eaa + (90 - cma)) * cml
      };
      var controlDistance = 0;
      if (cdr !== "smooth") {
        controlDistance = eal * cdr;
      } else {
        var _intersection;
        var controlLineAngle = eaa - cma - cda;
        var inferedControlLine = inferLine.inferLine({
          point: controlMidpoint,
          angle: controlLineAngle
        });
        var previousPath = pathsInfo[pathsInfo.length - 1];
        var smoothStartControl = (_intersection = intersection.intersection([previousPath.endControl, previousPath.endAnchor], inferedControlLine)) !== null && _intersection !== void 0 ? _intersection : {
          x: 0,
          y: 0
        };
        controlDistance = distance.distance(smoothStartControl, controlMidpoint) * 2;
      }
      startControl = {
        x: controlMidpoint.x + Math.cos(180 - (cma - eaa + cda)) * (controlDistance / 2),
        y: controlMidpoint.y - Math.sin(180 - (cma - eaa + cda)) * (controlDistance / 2)
      };
      endControl = {
        x: controlMidpoint.x + Math.cos(360 - (cma - eaa + cda)) * (controlDistance / 2),
        y: controlMidpoint.y - Math.sin(360 - (cma - eaa + cda)) * (controlDistance / 2)
      };
    }
    if (BezierControlPoints_type.isControlPointsAngleParameters(controls)) {
      var prev_startAnchor = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endAnchor;
      var prev_endControl = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endControl;
      var prev_endAnchor = startAnchor;
      var prev_eaa = absoluteAngle.absoluteAngle({
        start: prev_startAnchor,
        end: prev_endAnchor
      });
      var prev_eca = 180 - (absoluteAngle.absoluteAngle({
        start: prev_endAnchor,
        end: prev_endControl
      }) - prev_eaa);
      var sca = controls.sca === "smooth" ? -(prev_eaa - eaa + prev_eca) : -controls.sca;
      var scl = controls.scl;
      var eca = -controls.eca;
      var ecl = controls.ecl;
      startControl = rotatePoint.rotatePoint({
        center: startAnchor,
        angle: eaa,
        point: {
          x: startAnchor.x + Math.cos(sca) * scl,
          y: startAnchor.y + Math.sin(sca) * scl
        }
      });
      endControl = rotatePoint.rotatePoint({
        center: endAnchor,
        angle: eaa,
        point: {
          x: endAnchor.x - Math.cos(eca) * ecl,
          y: endAnchor.y + Math.sin(eca) * ecl
        }
      });
      controlMidpoint = midpoint.midpoint(startControl, endControl);
    }
    if (BezierControlPoints_type.isControlPointsVec2Parameters(controls)) {
      startControl = controls.sc;
      endControl = controls.ec;
      controlMidpoint = midpoint.midpoint(startControl, endControl);
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

exports.bezierControlPoints = bezierControlPoints;
//# sourceMappingURL=bezierControlPoints.js.map
