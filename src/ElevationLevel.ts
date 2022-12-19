export class ElevationLevel {
  private _TP: number;
  readonly _GL: number | undefined;
  constructor(init: InitParameter) {
    this._TP = init.TP;
    this._GL = undefined;
  }
  get(type: LevelType) {
    const value = this[`_${type}`];
    if (value === undefined) {
      throw new Error(`${type} is not defined`);
    }
    return this[`_${type}`];
  }
}

type InitParameter = {
  TP: number;
}
const LevelType = {
  TP: 'TP',
  GL: "GL",
} as const
export type LevelType = typeof LevelType[keyof typeof LevelType];