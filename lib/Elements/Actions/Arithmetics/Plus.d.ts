import ActionOperator from '../ActionOperator';
export default class Plus extends ActionOperator {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): number;
    isValid(vars: any, childrenValues: Array<any>): boolean;
    toString(): string;
}