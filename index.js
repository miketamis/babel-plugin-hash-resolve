const  nodePath = require('path')
const fs = require('fs')

function findRelativePath(requiredPath, currentFileDir) {
    if(!requiredPath || requiredPath[0] !== '#')  {
        return requiredPath
    }

    const pathParsed = nodePath.parse(requiredPath.slice(1))
    const currentFileDirSplit = currentFileDir.split('/')
    for(let i = currentFileDirSplit.length ; i >= 0; i -= 1) {
        const testPath = (currentFileDir[0] === '/' ? '/' : '') + nodePath.join(...currentFileDirSplit.slice(0, i), pathParsed.dir, pathParsed.name + (pathParsed.ext || '.js'))
        if(fs.existsSync(testPath)) {
            return `./${nodePath.relative(currentFileDir, testPath)}`
        }
    }
    return '#path-cant-find'
}


module.exports = function HashResolve({ types: t }) {
    return {
        visitor: {
            ImportDeclaration: {
                enter(path, state) {
                    const source = path.get('source')
                    const currentFileDir = nodePath.parse(state.file.opts.filename).dir
                    source.replaceWith(t.stringLiteral(findRelativePath(source.node.value, currentFileDir)))
                },
             
            },
        }, 
    }
}