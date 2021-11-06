"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 12, height: 12, viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M6.5 1.75a.75.75 0 00-1.5 0V5H1.75a.75.75 0 000 1.5H5v3.25a.75.75 0 001.5 0V6.5h3.25a.75.75 0 000-1.5H6.5V1.75z", fill: primaryFill }));
};
const Add12Filled = wrapIcon_1.default(rawSvg({}), 'Add12Filled');
exports.default = Add12Filled;
