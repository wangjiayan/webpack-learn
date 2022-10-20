const { ConcatSource } = require("webpack-sources");

class HeaderPlugin {
  constructor(){

  }
  apply(compiler){
    compiler.hooks.compilation.tap('HeaderPlugin',compilation => {
      compilation.hooks.processAssets.tap(
        {
					name: "HeaderPlugin",
					stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS
				},
        () => {
          const comment="//我是插件添加的"
          const chunks=compilation.chunks
          // console.log('chunks',chunks)
          for (const chunk of chunks){
          
             for(const file of chunk.files){
              console.log(file)
              compilation.updateAsset(file,old=>{
                return new ConcatSource(old, "\n", comment)
              })
             }
          }
        }
      )
    })
  }
}

module.exports = HeaderPlugin