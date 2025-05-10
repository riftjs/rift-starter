const { riftConfig } = require("@riftjs/rift/core");
const { markdownPlugin } = require("@riftjs/rift/markdown");
const { njkPlugin } = require("@riftjs/rift/njk");
const { staticAssets } = require("@riftjs/rift/static");

export default riftConfig({
    plugins: [
        njkPlugin(),
        markdownPlugin(),
        staticAssets([
            {
                src: "./assets/**/*",
                dest: "./"
            }
        ])
    ]
});