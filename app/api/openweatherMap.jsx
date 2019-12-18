const axios=require('axios')

const OPEN_WEATHER_MAP_URl='http://api.openweathermap.org/data/2.5/weather?APPID=b9499654525a80bec5142786d62fad5c'


module.exports={
    getTemp:function(location){
        const encodedlocation=encodeURIComponent(location)
    const requestURL= `${OPEN_WEATHER_MAP_URl}&q=${encodedlocation}`
    return axios.get(requestURL).then(function(res){
        console.log(res.data)
        if(res.data.cod && res.data.message){
            throw new Error('res.data.message')
        }else{
            return res.data.main.temp
        }
    },function(res){
        throw new Error(res.data.message)
    })
    }
}