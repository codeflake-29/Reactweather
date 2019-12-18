const React=require('react')
const {Link}=require('react-router')
// const Examples=React.createClass({
//     render:function(){
//         return(
//             <h3>Examples</h3>
//         )
//     }
// })

const Examples=(props)=>{
    return(
        <div>
        <h1 className="text-center">Examples </h1>
        <p>here are a few examples to try out:</p>
        <ol>
            <li>
            <Link to="/?location=philadelphia">philadelphia</Link>
            </li>
            <li>
            <Link to="/?location=rio">rio,brazil</Link>
            </li>
        </ol>
        </div>
    )
}
module.exports=Examples