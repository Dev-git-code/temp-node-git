//* read from a file and write the contents of both into new file
const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try{
        const first = await readFile("./content/subfolder/first.txt",'utf-8')
        const second = await readFile("./content/subfolder/second.txt",'utf-8')
        await writeFile('./content/subfolder/result.txt',`This is Awesome: ${first} and ${second}`,
        {flag: 'a'})
    }catch(error){
        console.log(error)
    }
}

start()
