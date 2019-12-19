const React=require('react')
const WeatherForm=require('weatherform')
const WeatherMessage=require('weathermessage')
const openweatherMap=require('openweatherMap')

const Weather=React.createClass({
    getInitialState:function(){
        return({
           isLoading:false,
           location:'default',
           temp:'default'
        })
    },
    handleSearch:function(location){
        const that=this
        
        that.setState({isLoading:true})
        
        openweatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },function(errorMessage){
            
            that.setState({isLoading:false,
                location:'default',
                temp:'default'
        })
            alert(errorMessage)
        })
        // this.setState({
        //     location:location,
        //     temp:23
        // })
    },
    render:function(){
        const {isLoading,temp,location}=this.state

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>
            }else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        return(
            <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
            
        )
    }
})

module.exports=Weather