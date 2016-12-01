const PREFIX_COL = 'variable-';
const PREFIX_ROW = 'value-';

export class ScenarioTable {
    public columns: string[] = [];
    public rows: Object[] = [];

    public addColumn(col: HTMLInputElement) {
        this.columns.push(col.value);

        this.rows.forEach((row, index) => {
            row[col.value] = PREFIX_ROW + (index + 1);
        });

        if (this.columns.length === 1) {
            this.addRow();
        }

        col.value = '';
    }

    public addRow() {
        let row = {};

        this.columns.forEach(col => {
            row[col] = PREFIX_ROW + (this.rows.length + 1);
        });

        this.rows.push(row);
    }

    public toString(indent: string): string {
        let str = `\n${indent}Examples:`;

        str += this.columns.reduce((a, col) => {
            return `${a} ${this.pad(col, col)} |`;
        }, `\n${indent}|`);

        this.rows.forEach((row) => {
            str += this.columns.reduce((a, col) => {
                return `${a} ${this.pad(row[col], col)} |`;
            }, `\n${indent}|`);
        });

        str += '\n';

        return str;
    }

    public get isValid(): boolean {
        return this.columns.length > 0;
    }

    private pad(val, col) {
        let maxLength = this.rows.reduce((a, row) => {
            return Math.max(a, row[col].length);
        }, col.length);

        while (val.length < maxLength) {
            val += ' ';
        }

        return val;
    }
}