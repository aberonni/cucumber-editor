export class Tags {
    public values: string[] = [];

    public add(tag: string) {
        this.values.push(tag);
    }

    public toString(indent: string = ''): string {
        return this.values.reduce((a, b) => {
            return a + indent + '@' + b + '\n';
        }, '');
    }
}