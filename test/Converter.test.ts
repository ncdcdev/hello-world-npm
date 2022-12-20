import { Converter } from "../src/Converter"
import { ElevationLevel } from "../src/ElevationLevel"
describe("Converter", () => {
  it(("GL: TP+10で初期化できる"), () => {
    const converter = new Converter({ GL: { standard: "TP" as const, level: 10 } })
    expect(converter).toBeInstanceOf(Converter)
  })

  // it("TPからGLの変換ができる", () => {
  //   const foo = new ElevationLevel({ standard: "TP" as const, level: 10 })
  //   // const converter = new Converter({ GL: { standard: "TP" as const, level: 6 } })
  //   expect(foo.to("GL", { GL: { standard: "TP" as const, level: 6 } })).toEqual(new Decimal(4))
  // })
})