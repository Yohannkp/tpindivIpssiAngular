import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'filter' })

export class filter implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}