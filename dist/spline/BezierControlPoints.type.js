export const isVec2 = (arg) => {
    if (!arg) {
        return false;
    }
    return typeof arg.x === "number" && typeof arg.y === "number";
};
export const isEndPointAngleParameters = (arg) => {
    if (!arg) {
        return false;
    }
    return typeof arg.eaa === "number" && typeof arg.eal === "number";
};
export const isControlPointsMidpointParameters = (arg) => {
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
export const isControlPointsAngleParameters = (arg) => {
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
export const isControlPointsVec2Parameters = (arg) => {
    if (!arg) {
        return false;
    }
    if (isVec2(arg.sc) && isVec2(arg.ec)) {
        return true;
    }
    else {
        return false;
    }
};
