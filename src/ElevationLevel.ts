export class ElevationLevel {
  private _TP: number;
  constructor(init: InitParameter) {
    this._TP = init.TP;
  }
  get(type: LevelType) {
    return this[`_${type}`];
  }
}

type InitParameter = {
  TP: number;
}
const LevelType = {
  TP: 'TP'
} as const
export type LevelType = typeof LevelType[keyof typeof LevelType];