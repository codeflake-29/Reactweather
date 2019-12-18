const React=require('react')

// const weatherMessage=React.createClass({
    
//     render:function(){
//         const location =this.props.location
//         const temp=this.props.temp
//         // const {temp,location}=this.props
//         return(
//             <h3>the weather of {temp} the region is {location} </h3>
//         )
//     }
// })

const weatherMessage=({temp,location})=>{
    return(
        <h3>the weather of {temp} the region is {location} </h3>
    )
}
module.exports=weatherMessage