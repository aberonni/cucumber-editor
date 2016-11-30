export class Tags {
    public values: string[] = [];

    public add(tag: string) {
        this.values.push(tag);
    }
}