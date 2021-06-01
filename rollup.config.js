import rollup from 'rollup'
import typescript from '@rollup/plugin-typescript'

/** @type {rollup.RollupOptions} */
const api = {
    input: './api/index.ts',
    output: {
        file: './dist/api.js',
        format: 'esm',
    },
    plugins: [typescript()],
}
/** @type {rollup.RollupOptions} */
const backend = {
    input: './backend/index.ts',
    output: {
        file: './dist/backend.js',
        format: 'esm',
    },
    plugins: [typescript()],
}
export default [api, backend]
