"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M16 30a14 14 0 100-28 14 14 0 000 28zm-1-19a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4z", fill: primaryFill }));
};
const AddCircle32Filled = wrapIcon_1.default(rawSvg({}), 'AddCircle32Filled');
exports.default = AddCircle32Filled;
