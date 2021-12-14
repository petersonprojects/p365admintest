"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M8 5c.28 0 .5.22.5.5v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 010-1h2v-2c0-.28.22-.5.5-.5zM2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z", fill: primaryFill }));
};
const AddCircle16Regular = wrapIcon_1.default(rawSvg({}), 'AddCircle16Regular');
exports.default = AddCircle16Regular;
