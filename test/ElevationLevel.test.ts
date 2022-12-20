import { ElevationLevel } from "../src/ElevationLevel";
import { Decimal } from 'decimal.js'

describe("Elevation Level", () => {
  it("TPを設定しているとTPが取得できる", () => {
    const init = {
      level: 1,
      standard: 'TP' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.get('TP')).toBe(1)
  })
  it("GLを設定していないとエラーになる", () => {
    const init = {
      level: 1,
      standard: 'TP' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(() => el.get('GL')).toThrow('GL is not defined')
  })
})