const React=require('react')

const weatherForm=React.createClass({
    onFormSubmit:function(e){
        e.preventDefault()
        const location=this.refs.location.value

        if(location.length>0){
            this.refs.location.value=''
            this.props.onSearch(location)
        }

    },
    render:function(){
        
        return(
        <div>
        <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="location" placeholder="serach weather by city"/>
        <button className="button expanded hollow">Get weather</button>
        </form>
        
        </div>
    )}
})
module.exports=weatherForm