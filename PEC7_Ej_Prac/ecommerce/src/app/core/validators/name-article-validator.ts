import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameArticleValidator {
  static nameArticleValidator(control: AbstractControl): ValidationErrors | null {
    const noValid: string[] = ['prueba', 'test', 'mock', 'fake'];
    const name: string = (control.value || '').toLowerCase().trim();
    if (noValid.includes(name)) {
      return { nameArticleValidator: true };
    }
    return null;
  }
}
