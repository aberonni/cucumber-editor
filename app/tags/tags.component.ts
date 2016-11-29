import { Component, Input } from '@angular/core';

import { Tag } from './tag';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'tags',
    styleUrls: ['tags.component.css'],
    templateUrl: 'tags.component.html',
})
export class TagsComponent {
    @Input() public tags: Tag[];

    public addTag(newTag) {
        this.tags.push({value: newTag.value} as Tag);
        newTag.value = '';
    }
}