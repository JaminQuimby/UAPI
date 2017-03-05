import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split'
})

export class SplitPipe implements PipeTransform {
    transform(value: string, params: number): string {
        let splits = value.split(' ');
        if (splits.length > 1) {
            return splits[params];
        } else {
            return '';
        }
    }
}