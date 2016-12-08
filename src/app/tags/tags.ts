class Tag {
    public value: string;
}

export class Tags {
    public values: Tag[] = [];

    public add(value: string) {
        this.values.push({value});
    }

    public toString(indent: string = ''): string {
        return this.values.reduce((a, b) => {
            return a + indent + '@' + b.value + '\n';
        }, '');
    }
}