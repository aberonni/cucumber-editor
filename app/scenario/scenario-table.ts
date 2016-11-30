const PREFIX_COL = 'variable-';
const PREFIX_ROW = 'value-';

export class ScenarioTable {
    public columns: string[] = [];
    public rows: Object[] = [];

    public addColumn(col: string) {
        this.columns.push(col);

        this.rows.forEach((row, index) => {
            row[col] = PREFIX_ROW + (index + 1);
        });

        if (this.columns.length === 1) {
            this.addRow();
        }
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