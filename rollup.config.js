import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        external: ['react', 'react-dom'],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                },
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                },
            },
        ],
        // external: [...Object.keys(packageJson.peerDependencies || {})],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];