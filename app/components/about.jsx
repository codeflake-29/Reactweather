const React=require('react')

// const About=React.createClass({
//     render:function(){
//         return(
//             <h3>About componennt</h3>
//         )
//     }
// })
const About=(props)=>{
    return(
        <div>
        <h3 className="text-center heading">About </h3>
        <p>this is a application built on react. i have built this for complete react app web developer course</p>
        <p>some of the tools i used</p>
        <ul>
            <li>
                <a href="https://google.com">Google</a>this was from where i learnt
               
            </li>
            <li>
            <a href="#">open weather map</a> i use open weather app to search for weather data bu=y city anme
            </li>
        </ul>
        </div>
    )

}

module.exports=About