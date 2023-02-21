import { Vec2 } from '../vec2/Vec2'

export const isVec2 = (arg: any): arg is Vec2 => {
  if (!arg) { return false }
  return typeof arg.x === "number" && typeof arg.y === "number"
}

//eaa: end anchor angle
//eal: end anchor length
type EndPointAngleParameters = {
  eaa: number,
  eal: number
}

export const isEndPointAngleParameters = (arg: any): arg is EndPointAngleParameters => {
  if (!arg) { return false }
  return typeof arg.eaa === "number" && typeof arg.eal === "number"
}

//cma: control midpoint angle
//cml: control midpoint length
//cdr: ratio of control distance to end anchor length
//cda: control distance angle
type ControlPointsMidpointParameters = {
  cma: number,
  cml: number,
  cdr: number | "smooth",
  cda: number
}

export const isControlPointsMidpointParameters = (arg: any): arg is ControlPointsMidpointParameters => {
  if (!arg) { return false }
  if (typeof arg.cma !== "number") { return false }
  if (typeof arg.cml !== "number") { return false }
  if (typeof arg.cdr !== "number" && arg.cdr !== "smooth") { return false }
  if (typeof arg.cda !== "number") { return false }
  return true
}

//sca: start control angle
//scl: start control length
//eca: end control angle
//ecl: end control length
type ControlPointsAngleParameters = {
  sca: number | "smooth"
  scl: number
  eca: number
  ecl: number
}

export const isControlPointsAngleParameters = (arg: any): arg is ControlPointsAngleParameters => {
  if (!arg) { return false }
  if (typeof arg.sca !== "number" && arg.sca !== "smooth") { return false }
  if (typeof arg.scl !== "number") { return false }
  if (typeof arg.eca !== "number") { return false }
  if (typeof arg.ecl !== "number") { return false }
  return true
}

//sc: start control point
//ec: end control point
type ControlPointsVec2Parameters = {
  sc: Vec2,
  ec: Vec2
}

export const isControlPointsVec2Parameters = (arg: any): arg is ControlPointsVec2Parameters => {
  if (!arg) { return false }
  if (isVec2(arg.sc) && isVec2(arg.ec)) {
    return true
  } else {
    return false
  }
}

//start: start anchor point
export type BezierControlPointsProps = {
  start: Vec2,
  points: {
    end: EndPointAngleParameters | Vec2,
    controls: ControlPointsMidpointParameters | ControlPointsAngleParameters | ControlPointsVec2Parameters
  }[]
}