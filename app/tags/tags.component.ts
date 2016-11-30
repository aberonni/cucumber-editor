import { Component, Input } from '@angular/core';

import { Tags } from './tags';

@Component({
    moduleId: module.id.replace('/dist/', '/'),
    selector: 'tags',
    styleUrls: ['tags.component.css'],
    templateUrl: 'tags.component.html',
})
export class TagsComponent {
    @Input() public tags: Tags;

    public addTag(newTag) {
        this.tags.add(newTag.value);
        newTag.value = '';
    }
}