"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionOperator_1 = __importDefault(require("../ActionOperator"));
class Modulo extends ActionOperator_1.default {
    constructor() {
        super(...arguments);
        this.name = 'modulo';
    }
    getHash() {
        return '';
    }
    getResult(vars, childrenValues) {
        if (vars.length !== 2) {
            throw 'Modulo must have 2 args, ' + vars.length + ' given';
        }
        let firstOperand = Number(this.args[0].getResult(vars, childrenValues));
        let secondOperand = Number(this.args[1].getResult(vars, childrenValues));
        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw 'Modulo argument must be numeric';
        }
        return firstOperand % secondOperand;
    }
    isValid(vars, childrenValues) {
        if (childrenValues.length === 0) {
            return false;
        }
        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }
    toString() {
        return this.args.join(' % ');
    }
}
exports.default = Modulo;