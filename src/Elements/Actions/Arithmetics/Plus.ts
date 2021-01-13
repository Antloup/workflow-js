import ActionFunction from '../ActionFunction';

export default class Plus extends ActionFunction {

    public name = 'plus';

    getHash(): string {
        return '';
    }

    getResult(vars: any, childrenValues: any): number {
        let result = childrenValues.shift();
        for (let childrenValue of childrenValues) {
            result += childrenValue;
        }

        return result;
    }

    public isValid(vars: any, childrenValues: Array<any>): boolean {
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

    toString(): string {
        return this.args.join(' + ');
    }
}
