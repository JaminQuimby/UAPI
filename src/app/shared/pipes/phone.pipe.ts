import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})

export class PhonePipe implements PipeTransform {
    transform(value: string, num: number): string {
        if (value) {
            let s2 = ('' + value).replace(/\D/g, '');
            let m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
            let r = (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
            switch (num) {
                case 1: r = m[1]; break;
                case 2: r = m[2]; break;
                case 3: r = m[3]; break;
                default: r = r;
            }
            return r;
        } else { return ''; }
    }
}
