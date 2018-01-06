
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

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

  public getSafeUrl(url: string): SafeUrl {
    let safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    safeUrl.toString = () => (<any> safeUrl).changingThisBreaksApplicationSecurity;

    return safeUrl;
  }

  public getIdInArray(value: any, array: any[], field: string) {
    return array.map(value => value[field]).indexOf(field);
  }

  public translit(text: string) {
    // Символ, на который будут заменяться все спецсимволы
    const space = '-';

    let TrimStr = (s) => {
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

    for(let i=0; i < text.length; i++) {
      // Если символ найден в массиве то меняем его
      if(transl[text[i]] != undefined) {
        if(curent_sim != transl[text[i]] || curent_sim != space){
          result += transl[text[i]];
          curent_sim = transl[text[i]];
        }
      }
      // Если нет, то оставляем так как есть
      else {
        result += text[i];
        curent_sim = text[i];
      }
    }

    return TrimStr(result).toLowerCase();
  }


}
