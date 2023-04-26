const axios=require('axios')
let res=null
async function getSettings(s) {

        const response=await axios.get("api endpoint")
         res=response.data.data[0]
         return res[s]
}
module.exports={getSettings}
