import { intersection } from '../vec2/intersection';
import { distance } from '../vec2/distance';
import { cos, sin } from '../utils/Math';
import { midpoint } from '../vec2/midpoint';
import { inferLine } from '../vec2/inferLine';
import { isControlPointsAngleParameters, isControlPointsMidpointParameters, isControlPointsVec2Parameters, isEndPointAngleParameters, isVec2 } from './BezierControlPoints.type';
import { absoluteAngle } from '../vec2/absoluteAngle';
import { rotatePoint } from '../vec2/rotatePoint';
export const bezierControlPoints = (props) => {
    const { start, points } = props;
    let pathsInfo = [];
    for (let i = 0; i < points.length; i++) {
        const { end, controls } = points[i];
        //Start point
        const startAnchor = pathsInfo.length === 0 ? start : pathsInfo[pathsInfo.length - 1].endAnchor;
        //End point
        let endAnchor = { x: 0, y: 0 };
        if (isEndPointAngleParameters(end)) {
            const { eaa, eal } = end;
            endAnchor = {
                x: startAnchor.x + cos(eaa) * eal,
                y: startAnchor.y - sin(eaa) * eal
            };
        }
        if (isVec2(end)) {
            endAnchor = end;
        }
        //Anchor midpoint
        const anchorMidpoint = midpoint(startAnchor, endAnchor);
        //Other parameters
        let eaa = 0;
        let eal = 0;
        if (isEndPointAngleParameters(end)) {
            eaa = end.eaa;
            eal = end.eal;
        }
        else {
            eaa = absoluteAngle({ start: startAnchor, end: endAnchor });
            eal = distance(startAnchor, endAnchor);
        }
        //Start control, End control, Control midpoint
        let startControl = { x: 0, y: 0 };
        let endControl = { x: 0, y: 0 };
        let controlMidpoint = { x: 0, y: 0 };
        if (isControlPointsMidpointParameters(controls)) {
            const { cma, cml, cdr, cda } = controls;
            controlMidpoint = {
                x: anchorMidpoint.x + cos(eaa + (90 - cma)) * cml,
                y: anchorMidpoint.y - sin(eaa + (90 - cma)) * cml
            };
            let controlDistance = 0;
            if (cdr !== "smooth") {
                controlDistance = eal * cdr;
            }
            else {
                const controlLineAngle = eaa - cma - cda;
                const inferedControlLine = inferLine({ point: controlMidpoint, angle: controlLineAngle });
                const previousPath = pathsInfo[pathsInfo.length - 1];
                const smoothStartControl = intersection([previousPath.endControl, previousPath.endAnchor], inferedControlLine) ?? { x: 0, y: 0 };
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
            const prev_startAnchor = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endAnchor;
            const prev_endControl = pathsInfo.length === 0 ? startAnchor : pathsInfo[pathsInfo.length - 1].endControl;
            const prev_endAnchor = startAnchor;
            const prev_eaa = absoluteAngle({ start: prev_startAnchor, end: prev_endAnchor });
            const prev_eca = 180 - (absoluteAngle({ start: prev_endAnchor, end: prev_endControl }) - prev_eaa);
            const sca = controls.sca === "smooth" ? -(prev_eaa - eaa + prev_eca) : -controls.sca;
            const scl = controls.scl;
            const eca = -controls.eca;
            const ecl = controls.ecl;
            startControl = rotatePoint({ center: startAnchor, angle: eaa, point: { x: startAnchor.x + cos(sca) * scl, y: startAnchor.y + sin(sca) * scl } });
            endControl = rotatePoint({ center: endAnchor, angle: eaa, point: { x: endAnchor.x - cos(eca) * ecl, y: endAnchor.y + sin(eca) * ecl } });
            controlMidpoint = midpoint(startControl, endControl);
        }
        if (isControlPointsVec2Parameters(controls)) {
            startControl = controls.sc;
            endControl = controls.ec;
            controlMidpoint = midpoint(startControl, endControl);
        }
        pathsInfo.push({ startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint });
    }
    return pathsInfo;
};
