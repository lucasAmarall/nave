/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
/* eslint-disable max-len */
class Validator {

  static fullName(str: string){
    return str.split(" ").length >= 2;
  }

  static strMinLength(str: string, min: number){
    return str.length >= min;
  }

  static email(str: string){
    // ref https://emailregex.com/
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
  }

  static minMax(str: number| string, min: number, max: number){
    return max >= Number(str) && Number(str) >= min;
  }

  static ageRage(str: string){
    return Number(str) >= 18 && Number(str) <= 100;
  }

  static date(str: string){
    const patternData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
    return patternData.test(str);
  }
}

export default Validator;