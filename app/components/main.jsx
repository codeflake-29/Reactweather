const React=require('react')
const Nav=require('nav')
// const main=React.createClass({
//     render:function(){
//         return(
//           <div>
//             <Nav/>
//             {this.props.children}
//           </div>
            
//         )
//     }
// })

const main=(props)=>{
  return(
    <div>
    <Nav/>
    {props.children}
     </div>
  )
}
module.exports=main