"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM6 10c0 .28.22.5.5.5h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3a.5.5 0 00-1 0v3h-3a.5.5 0 00-.5.5z", fill: primaryFill }));
};
const AddCircle20Filled = wrapIcon_1.default(rawSvg({}), 'AddCircle20Filled');
exports.default = AddCircle20Filled;
