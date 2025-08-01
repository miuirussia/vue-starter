/// <reference types="vite/client" />

import type { AttributifyNames } from "@unocss/preset-attributify";

type Prefix = "css:";

declare module "@vue/runtime-dom" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string | boolean>> {}
}
