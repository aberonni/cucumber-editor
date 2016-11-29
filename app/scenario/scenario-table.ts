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
}