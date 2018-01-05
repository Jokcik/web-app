import {Pipe, PipeTransform} from '@angular/core';
``
@Pipe({name: 'odDate'})
export class ODDatePipe implements PipeTransform {

  private convertDate(value) {
    value = value < 2000000000 ? value * 1000 : value;
    let date = new Date(+value);

    if (isNaN(date.getDate())) {
      date = new Date(value);
    }

    return date;
  }

  private isToday(date) {
    let nowDate = new Date();

    return nowDate.getFullYear() == date.getFullYear()
      && nowDate.getMonth() == date.getMonth()
      && nowDate.getDate() == date.getDate();
  }

  private isYesterday(date) {
    let tmpDate = new Date();
    let nowDate = new Date();

    tmpDate.setDate(nowDate.getDate() - 1);
    return tmpDate.getFullYear() == date.getFullYear()
      && tmpDate.getMonth() == date.getMonth()
      && tmpDate.getDate() == date.getDate();
  }

  private isTomorrow(date) {
    let tmpDate = new Date();
    let nowDate = new Date();

    tmpDate.setDate(nowDate.getDate() + 1);
    return tmpDate.getFullYear() == date.getFullYear()
      && tmpDate.getMonth() == date.getMonth()
      && tmpDate.getDate() == date.getDate();
  }

  private isSameYear(date) {
    let nowDate = new Date();
    return date.getFullYear() == nowDate.getFullYear();
  }

  private dateFormateSameYear(date) {
    let months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    let formateDate = ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate())
      + ' '
      + months[date.getMonth()];

    return formateDate;
  }

  private dateFormate(date) {
    let formateDateStr = ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate())
      + '.'
      + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1))
      + '.'
      + date.getFullYear();

    return formateDateStr;
  }

  private getTimeStr(date) {
    let formateDateStr =
      +((date.getHours() < 10) ? '0' + date.getHours() : date.getHours())
      + ':'
      + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes());

    return formateDateStr;
  }

  getDateStr(date) {
    if (this.isToday(date))
      return 'сегодня';

    if (this.isYesterday(date))
      return 'вчера';

    if (this.isTomorrow(date))
      return 'завтра';

    if (this.isSameYear(date))
      return this.dateFormateSameYear(date);

    return this.dateFormate(date);
  }


  transform(value: string, param?: string): string {
    let date = this.convertDate(value);

    if (isNaN(date.getDate())) {
      return '';
    }


    if (param == 'onlyDate') return this.getDateStr(date);
    if (param == 'onlyTime') return this.getTimeStr(date);
    return this.getDateStr(date) + ' в ' + this.getTimeStr(date);
  }
}
