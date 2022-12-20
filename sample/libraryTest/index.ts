//import { trim } from "./node_modules/helloworldnpm/dist/hellolib.js";
import { ElevationLevel } from "elevationlevel";

const el = new ElevationLevel(
  {
    level: 10,
    standard: 'TP' as const,
  }
)

console.log(
  el.to("GL", { GL: { standard: "TP" as const, level: 6 } }) // = Decimal(4.0)
)

