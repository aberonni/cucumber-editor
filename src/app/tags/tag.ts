export class Tag {
    public value: string;

    public constructor(value: string) {
        this.value = value;
    }

    public equals(tag: Tag): boolean {
        return tag && tag.value === this.value;
    }
}
