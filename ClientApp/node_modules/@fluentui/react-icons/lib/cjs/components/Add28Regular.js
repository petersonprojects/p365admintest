"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M14.5 13V3.75a.75.75 0 00-1.5 0V13H3.75a.75.75 0 000 1.5H13v9.25a.75.75 0 001.5 0V14.5h9.25a.75.75 0 000-1.5H14.5z", fill: primaryFill }));
};
const Add28Regular = wrapIcon_1.default(rawSvg({}), 'Add28Regular');
exports.default = Add28Regular;
