/**
 * Created by AndreaMerten on 12/12/17.
 */
const XLSX = require ('xlsx')
//const request = require('request')

module.exports = (app) => {
  console.log('here')
  app.get('/api/serviceChart', async (req,res) =>{
      /* data is a node Buffer that can be passed to XLSX.read */
    const workbook = await XLSX.readFile('./serviceChart/services.xlsx')
    const sheet= workbook.SheetNames
    const xldata=XLSX.utils.sheet_to_json(workbook.Sheets[sheet[0]])
    res.send(xldata)
    })
}

