import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(value?: string | null): string {
    if (value && value.trim()) {
      return value.trim();
    }
    return '/assets/images/article2.jpg';
  }
}
