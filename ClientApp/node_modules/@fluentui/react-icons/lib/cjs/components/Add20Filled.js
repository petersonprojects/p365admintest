"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M10.5 2.75a.75.75 0 00-1.5 0V9H2.75a.75.75 0 000 1.5H9v6.25a.75.75 0 001.5 0V10.5h6.25a.75.75 0 000-1.5H10.5V2.75z", fill: primaryFill }));
};
const Add20Filled = wrapIcon_1.default(rawSvg({}), 'Add20Filled');
exports.default = Add20Filled;
