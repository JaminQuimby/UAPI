import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split'
})

export class SplitPipe implements PipeTransform {
    transform(value: string, num: number): string {
        value = value || '';
        let split = value.split(' ');
        if (split) {
            if (split.length > 1) {
                return split[num - 1];
            } else {return '';}
        } else { return ''; }
    }
}
