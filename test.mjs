import { test } from './build/debug.js'
import { testJson } from "./json.js"

let i = 0
try {
    for (i = 0; i < 10000; i++)  {
        test(testJson)
        await new Promise(resolve => setTimeout(resolve, 1))
    }
} catch (e) {
    console.error(e)
    console.log("failed on iteration", i)
}

console.log('done')
