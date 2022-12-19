import { ElevationLevel } from "../src/ElevationLevel";
describe("Elevation Level", () => {

  it("TPを設定しているとTPが取得できる", () => {
    const init = {
      TP: 1
    }
    const el = new ElevationLevel(
      init,
    )
    expect(el.get('TP')).toBe(1)
  })
})