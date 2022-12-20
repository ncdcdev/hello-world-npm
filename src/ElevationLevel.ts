import { Decimal } from 'decimal.js';

export class ElevationLevel {
  private _TP: Decimal | undefined;
  readonly _GL: Decimal | undefined;
  constructor(readonly init: InitParameter) {
    switch (init.standard) {
      case Standard.TP:
        this._TP = new Decimal(init.level);
        break;
      case Standard.GL:
        this._GL = new Decimal(init.level);
        break;
    }
  }
  get(type: Standard): Decimal {
    const value = this[`_${type}`];
    if (value !== undefined) {
      return value;
    }
    throw new Error(`${type} is not defined`);
  }

  to(type: Standard, options: ConverterOptions) {
    if (type === 'GL') {
      if (options.GL.standard = 'TP') {
        if (this._TP) {
          return this._TP.minus(options.GL.level);
        }
        throw new Error('TP is not defined');
      }
    }
    if (type === 'TP') {
      return this.get('TP')
    }
  }

}

type InitParameter = {
  standard: Standard;
  level: number;
}
const Standard = {
  TP: 'TP',
  GL: "GL",
} as const
export type Standard = typeof Standard[keyof typeof Standard];

export type ConverterOptions = {
  GL: {
    level: number;
    standard: Standard;
  };
}