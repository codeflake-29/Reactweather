const React=require('react')
const WeatherForm=require('weatherform')
const WeatherMessage=require('weathermessage')
const openweatherMap=require('openweatherMap')
const ErrorModal=require('errorModal')

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
        
        this.setState({
            isLoading:true,
            errorMessage:undefined})
        
        openweatherMap.getTemp(location).then(function(temp){
            that.setState({
                location:location,
                temp:temp,
                isLoading:false,
                
            })
        },function(res){
            
            that.setState({
                isLoading:false,
                errorMessage:res.message
        })
        })
    },
    render:function(){
        const {isLoading,temp,location,errorMessage}=this.state

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>
            }else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
    function renderError(){
        if(typeof errorMessage === 'string'){
            return (
                <ErrorModal message={errorMessage} title={'test'}/>
            )
        }
    }

    

        return(
            <div>
            <h1 className="text-center page-title">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}
            </div>
            
        )
    }
})

module.exports=Weather