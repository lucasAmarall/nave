export default class DateUtil {

  static getFormatedDate(date: string){
    const _date = new Date(date);
    const year = _date.getFullYear();
    const month = `${_date.getMonth()}`.padStart(2, "0");
    const day = `${_date.getDate()}`.padStart(2, "0");
    return `${day}/${month}/${year}`;
  }
}