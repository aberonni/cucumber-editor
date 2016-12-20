import { Component, Input } from '@angular/core';

import { Tag } from './tag';
import { Tags } from './tags';

@Component({
    selector: 'tags',
    styleUrls: ['./tags.component.css'],
    templateUrl: './tags.component.html',
})
export class TagsComponent {
    @Input() public tags: Tags;

    private duplicateTag: Tag;

    public addTag(newTag: HTMLInputElement) {
        this.duplicateTag = this.tags.add(newTag.value);

        if (!this.duplicateTag) {
            newTag.value = '';
        }
    }

    private getClass(tag: Tag): string {
        return tag.equals(this.duplicateTag) ? 'text-danger' : '';
    }
}