import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import transformImages from "lume/plugins/transform_images.ts";

import animated from "tailwindcss-animated";

const site = lume({ src: "./src" });

site.use(vento({ extensions: [".html"], options: {} }));
site.use(jsx());
site.use(tailwindcss({
  extensions: [".html", ".tsx"],
  options: {
    plugins: [animated],
    theme: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
}));
site.use(postcss());
site.use(transformImages());

export default site;
