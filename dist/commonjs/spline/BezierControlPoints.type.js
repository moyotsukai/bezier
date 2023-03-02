'use strict';

var isVec2 = function isVec2(arg) {
  if (!arg) {
    return false;
  }
  return typeof arg.x === "number" && typeof arg.y === "number";
};
var isEndPointAngleParameters = function isEndPointAngleParameters(arg) {
  if (!arg) {
    return false;
  }
  return typeof arg.eaa === "number" && typeof arg.eal === "number";
};
var isControlPointsMidpointParameters = function isControlPointsMidpointParameters(arg) {
  if (!arg) {
    return false;
  }
  if (typeof arg.cma !== "number") {
    return false;
  }
  if (typeof arg.cml !== "number") {
    return false;
  }
  if (typeof arg.cdr !== "number" && arg.cdr !== "smooth") {
    return false;
  }
  if (typeof arg.cda !== "number") {
    return false;
  }
  return true;
};
var isControlPointsAngleParameters = function isControlPointsAngleParameters(arg) {
  if (!arg) {
    return false;
  }
  if (typeof arg.sca !== "number" && arg.sca !== "smooth") {
    return false;
  }
  if (typeof arg.scl !== "number") {
    return false;
  }
  if (typeof arg.eca !== "number") {
    return false;
  }
  if (typeof arg.ecl !== "number") {
    return false;
  }
  return true;
};
var isControlPointsVec2Parameters = function isControlPointsVec2Parameters(arg) {
  if (!arg) {
    return false;
  }
  if (isVec2(arg.sc) && isVec2(arg.ec)) {
    return true;
  } else {
    return false;
  }
};

exports.isControlPointsAngleParameters = isControlPointsAngleParameters;
exports.isControlPointsMidpointParameters = isControlPointsMidpointParameters;
exports.isControlPointsVec2Parameters = isControlPointsVec2Parameters;
exports.isEndPointAngleParameters = isEndPointAngleParameters;
exports.isVec2 = isVec2;
//# sourceMappingURL=BezierControlPoints.type.js.map
