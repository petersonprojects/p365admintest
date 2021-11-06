"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css(...args) {
    const classes = [];
    for (const arg of args) {
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;
