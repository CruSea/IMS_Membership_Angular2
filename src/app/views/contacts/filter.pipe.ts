import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( contacts : any[], term: string ): any[] {
    if (!term ) { return contacts; }

    return contacts.filter(function (contact){

        return contact.firstname.toLowerCase().includes(term.toLowerCase());
    })

  }

}
