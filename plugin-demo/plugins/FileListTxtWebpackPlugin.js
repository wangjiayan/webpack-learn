const { ConcatSource } = require("webpack-sources");
class FileListTxtWebpackPlugin {
  constructor(){

  }
  apply(compiler){
    compiler.hooks.emit.tapAsync('FileListTxtWebpackPlugin',(compilation,callback) => {
      var filelist = 'In this build:\n\n';
      let assets = compilation.assets;
     
      for (var filename in assets) {
        filelist += ('- '+ filename +'\n');
        console.log('filelist',filename)
        const content = compilation.assets[filename]
        .source()
        .replace('132', '')
        // 最终改变目标chunk的输出对象
        compilation.assets[filename] = {
          source: () => content,
          size: () => content.length
        }
      }
   
      // compilation.assets['filelist.md'] = {
      //   _source: new ConcatSource(filelist),
      // }
      // compilation.hooks.processAssets.tap(
      //   {
			// 		name: "FileListTxtWebpackPlugin",
			// 		stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS
			// 	},
      //   () => {
      //     const comment="//我是插件添加的"
      //     const chunks=compilation.chunks
      //     for (const chunk of chunks){
          
      //        for(const file of chunk.files){
      //         console.log(file)
      //         // compilation.updateAsset(file,old=>{
      //         //   return new ConcatSource(old, "\n", comment)
      //         // })
      //        }
      //     }
      //   }
      // )
    })
  }
}

module.exports = FileListTxtWebpackPlugin
