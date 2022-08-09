const fs = require('fs').promises;

const read = (folder) => {
    fs.readdir(`./${folder}`).then(items => {
        for (const item of items) {
            fs.stat(`./${folder}/${item}`).then(info => {

                if (info.isDirectory()) {
                    read(`./${folder}/${item}`)
                }
                if (info.isFile()) {
                    fs.readFile(`./${folder}/${item}`).then(file => {
                        fs.rename(`./${folder}/${item}`, `${item}`).catch(e => {
                            console.log(e);
                        })
                    })
                }
            })
        }
    })
}

read(`folder`);