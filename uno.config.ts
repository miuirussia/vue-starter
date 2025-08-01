import { defineConfig } from "unocss";

import presetWind4 from "@unocss/preset-wind4";
import extractorPug from "@unocss/extractor-pug";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  presets: [presetWind4({ preflights: { reset: true } }), presetAttributify({ prefix: "css:", prefixedOnly: true })],
  extractors: [extractorPug()],
});
