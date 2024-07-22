const fs = require('fs').promises
// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//      if(!err){
//           console.log(data.toString())
//      }
// })

async function readDemo(){
     const data = await fs.readFile('./text.txt', 'utf-8')
     console.log(data.toString())
}
readDemo()
console.log('Done')
