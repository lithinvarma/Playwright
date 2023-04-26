const axios=require('axios')
let res=null
async function getSettings(s) {

        const response=await axios.get("https://sit-api.fhcdn.dev/settings/8051142?api_token=2971c50975c9fde7fc68ecd3fdab27a5")
         res=response.data.data[0]
         return res[s]
}
module.exports={getSettings}
