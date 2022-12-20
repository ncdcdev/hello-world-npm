import { ElevationLevel } from "../src/ElevationLevel";
import { Decimal } from 'decimal.js'

describe("get", () => {

  it("TPを設定しているとTPが取得できる", () => {
    const init = {
      level: 1,
      standard: 'TP' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.get('TP')).toEqual(new Decimal(1))
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
  it("GLを設定しているとGLが取得できる", () => {
    const init = {
      level: 1,
      standard: 'GL' as const,
    }
    const el = new ElevationLevel(init)
    expect(el.get('GL')).toEqual(new Decimal(1))
  })
})

describe("to", () => {
  it("TPからGLを計算できる", () => {
    const init = {
      level: 10,
      standard: 'TP' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.to("GL", { GL: { standard: "TP" as const, level: 6 } })).toEqual(new Decimal(4))
  })

  it("GLからTPを計算できる", () => {
    const init = {
      level: 10,
      standard: 'GL' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.to("TP", { GL: { standard: "TP" as const, level: 6 } })).toEqual(new Decimal(16))
  })

  it("TP→TPだと変換しない", () => {
    const init = {
      level: 10,
      standard: 'TP' as const,
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.to("TP", { GL: { standard: "TP" as const, level: 6 } })).toEqual(new Decimal(10))
  })
})