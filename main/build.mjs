import rollup from'rollup'
import fs from'fs'
let fsp=fs.promises
async function link(input,file){
    let bundle=await rollup.rollup({
        input,
    })
    return(await bundle.generate({
        format:'es',
    })).output[0].code
}
;(async()=>{
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('main/algo.mjs','dist/node/algo.mjs')
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/algo',
        version:'1.0.0',
        main:'algo.mjs',
    }))
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        link('main/algo.mjs'),
    ])
    fsp.writeFile(`dist/algo.mjs`,`/*${license}*/${code}`)
})()
