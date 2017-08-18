import yargs from 'yargs';

const args = yargs
    .options('production', {
        boolean: true,
        default: false,
        describle: 'min all scripts'
    })
    .options('watch', {
        boolean: true, 
        default: false,
        describle: 'watch all files'
    })
    .options("verbose", {
        boolean: true,
        default: false,
        describle: 'log'
    })
    .options("sourcemaps", {
        describle: 'force the creation of sourcemaps'
    })
    .options("port", {
        string: true,
        default: 8080,
        describle:'server port'
    })
    .argv

export default args;