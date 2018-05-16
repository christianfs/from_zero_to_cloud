"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = (num) => {
    if (num == 0) {
        return 1;
    }
    return num * exports.factorial(num - 1);
};
//# sourceMappingURL=factorial.js.map