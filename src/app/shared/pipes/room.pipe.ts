import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'room'
})
export class RoomPipe implements PipeTransform {

  transform(room: number): string {
    return 'ROOM ' + room;
  }

}
