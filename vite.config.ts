// @ts-ignore
import { defineConfig } from "vite";
// @ts-ignore
import swc from "rollup-plugin-swc";

export default defineConfig({
    plugins: [
        swc({
            jsc: {
                parser: {
                    syntax: "typescript",
                    tsx: true,
                    dynamicImport: true,
                    decorators: true,
                },
                target: "es2021",
                transform: {
                    decoratorMetadata: true,
                },
            },
        }),
    ],
    esbuild: false,
});
