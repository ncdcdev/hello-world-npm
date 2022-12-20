import { Standard, ElevationLevel } from "./ElevationLevel";
import { Decimal } from 'decimal.js'
export class Converter {
  private _TP: number | undefined;
  private _GL: number | undefined;
  constructor(option: ConverterOptions) {
    this._TP = 0;
    this._GL = option.GL.level
  }
  // convert(el: ElevationLevel, standard: Standard): Decimal {
  //   return el.get('TP')
  // }
}


export type ConverterOptions = {
  GL: {
    level: number;
    standard: Standard;
  };
}

// optionの渡し方
// 案1.
// { GL : { TP: 10 } } 
// 案2.
// { GL: "TP+10" }
// { GL: "TP±0" }
// { GL: "TP-10.1" }
// ±はないとする

// 案3.
// {
//   GL: {
//     level: 10,
//     standard: 'TP'
//   }
// }


// 内部的にはそれぞれをflatにもつ
// TPを0とする？
// {
//   TP : 0
//   GL : -10
//   FL : 5
// }å