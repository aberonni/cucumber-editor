import { Tag } from './tag';

export class Tags {
    public values: Tag[] = [];

    public add(value: string): Tag {
        let sameTag: Tag = this.values.find(tag => tag.value === value);

        if (!sameTag) {
            this.values.push(new Tag(value));
        }

        return sameTag;
    }

    public toString(indent: string = ''): string {
        return this.values.reduce((a, b) => {
            return a + indent + '@' + b.value + '\n';
        }, '');
    }
}