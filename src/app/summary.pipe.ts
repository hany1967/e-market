import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'summary'
})

export class summaryPipe implements PipeTransform {

    transform(text: string, limit?: number, added?: string) {

        if (!text) return null;

        let initial = 50;

        return text.substr(0, (limit) ? limit : initial) + ((added) ? added : '');

    }
}