"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M24 13h-9V4a1 1 0 10-2 0v9H4a1 1 0 100 2h9v9a1 1 0 102 0v-9h9a1 1 0 100-2z", fill: primaryFill }));
};
const Add28Filled = wrapIcon_1.default(rawSvg({}), 'Add28Filled');
exports.default = Add28Filled;
