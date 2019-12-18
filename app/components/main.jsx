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
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
      {props.children}
      </div>
    </div>
    
     </div>
  )
}
module.exports=main