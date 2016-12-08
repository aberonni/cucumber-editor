import { StepParameter } from './step-parameter';

const REGEXP_TESTER = /\(([^\)]+)\)/g;
const REGEXP_DISPLAY_NAME = '(PARAMETER)';

export class Step {
    public type: string;
    public name: string;
    public displayName: string;
    public parameters: StepParameter[];

    public constructor(name: string, type: string) {
        this.type = type;
        this.name = this.sanitizeName(name);
        this.displayName = this.name.replace(REGEXP_TESTER, REGEXP_DISPLAY_NAME);
        this.parameters = this.toChunks(this.name);
    }

    public toString(indent: string): string {
        let str = `${indent}${this.type} `;

        str += this.parameters.reduce((a, b) => {
            return a + b.displayValue;
        }, '');

        str += '\n';

        return str;
    }

    private sanitizeName(str: string): string {
        if (str[0] === '^') {
            str = str.substr(1);
        }

        if (str.charAt(str.length - 1) === '$') {
            str = str.slice(0, -1);
        }

        str = str.replace(/\(\?:([^\|]+)+\|+([^\)]+)?\)/, '$1');

        return str;
    }

    private toChunks(str: string): StepParameter[] {
        let chunks = [];
        let insideRegexp = false;

        while (str.length > 0) {
            let value;
            let regexp;

            if (insideRegexp) {
                regexp = str.substring(1, str.indexOf(')'));
                str = str.substring(str.indexOf(')') + 1);
                insideRegexp = false;
            } else if (str.indexOf('(') >= 0) {
                value = str.substr(0, str.indexOf('('));
                str = str.substring(str.indexOf('('));
                insideRegexp = true;
            } else {
                value = str;
                str = '';
            }

            if ((value && value.length > 0) || regexp) {
                chunks.push(new StepParameter(value, regexp));
            }
        }

        return chunks;
    }
}