import * as React from 'react';
import wrapIcon from '../utils/wrapIcon';
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M8 2.5a.5.5 0 00-1 0V7H2.5a.5.5 0 000 1H7v4.5a.5.5 0 001 0V8h4.5a.5.5 0 000-1H8V2.5z", fill: primaryFill }));
};
const Add16Regular = wrapIcon(rawSvg({}), 'Add16Regular');
export default Add16Regular;
