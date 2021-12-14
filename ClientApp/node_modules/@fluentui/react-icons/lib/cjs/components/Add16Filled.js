"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M8.5 2.75a.75.75 0 00-1.5 0V7H2.75a.75.75 0 000 1.5H7v4.25a.75.75 0 001.5 0V8.5h4.25a.75.75 0 000-1.5H8.5V2.75z", fill: primaryFill }));
};
const Add16Filled = wrapIcon_1.default(rawSvg({}), 'Add16Filled');
exports.default = Add16Filled;
