import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

export interface Ssuz {
  title: string;
  id: number;
}

@Injectable()
export class ODUtils {
  public constructor(private sanitizer: DomSanitizer) {
  }

  public jsonObjectWithoutObservables(object: any): string {
    return JSON.stringify(object, (key, value) => key.startsWith('$') ? undefined : value);
  }

  public copyObjectWithoutObservables<T>(object: T): T {
    return JSON.parse(this.jsonObjectWithoutObservables(object));
  }

  public getSsuz(): Ssuz[] {
    return [
      {id: 1, title: "БГИИК СПО Белгородский музыкальный колледж им С.А. Дегтярева"},
      {id: 2, title: "БГИИК СПО Губкинский музыкальный колледж"},
      {id: 3, title: "БГИИК ВУЗ"},
      {id: 5, title: "БГИИК СПО Хореография"},
      {id: 6, title: "БГИИК СПО ИЗО"},
      {id: 4, title: "Другое"},
    ]
  }

  public getSafeUrl(url: string): SafeUrl {
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    safeUrl.toString = () => (<any> safeUrl).changingThisBreaksApplicationSecurity;

    return safeUrl;
  }

  public getIdInArray(value: any, array: any[], field: string) {
    return array.map(val => val[field]).indexOf(value);
  }

  public translit(text: string) {
    text = text.toLowerCase();
// Символ, на который будут заменяться все спецсимволы
    const space = '-';

    const TrimStr = (s) => {
      s = s.replace(/^-/, '');
      return s.replace(/-$/, '');
    };

    // Массив для транслитерации
    const transl = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
      'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
      'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya',
      ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
      '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
      '(': space, ')': space, '-': space, '\=': space, '+': space, '[': space,
      ']': space, '\\': space, '|': space, '/': space, '.': space, ',': space,
      '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
      '?': space, '<': space, '>': space, '№': space
    };

    let result = '';
    let curent_sim = '';

    for (let i = 0; i < text.length; i++) {
      // Если символ найден в массиве то меняем его
      if (transl[text[i]] !== undefined) {
        if (curent_sim !== transl[text[i]] || curent_sim !== space) {
          result += transl[text[i]];
          curent_sim = transl[text[i]];
        }
      } else {
        result += text[i];
        curent_sim = text[i];
      }
    }

    return TrimStr(result).toLowerCase();
  }


}
