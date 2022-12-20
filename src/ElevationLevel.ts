export class ElevationLevel {
  private _TP: number | undefined;
  readonly _GL: number | undefined;
  constructor(init: InitParameter) {
    switch (init.standard) {
      case Standard.TP:
        this._TP = init.level;
    }
  }
  get(type: Standard) {
    const value = this[`_${type}`];
    if (value === undefined) {
      throw new Error(`${type} is not defined`);
    }
    return this[`_${type}`];
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