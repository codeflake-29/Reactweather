const React=require('react')
const {Link,IndexLink}=require('react-router')

const Nav=React.createClass({
    onSearch:function(e){
        e.preventDefault()
        const location=this.refs.search.value
        const encodedLocation=encodeURIComponent(location)
        if(location.length>0){
            this.refs.search.value=''
            window.location.hash='#/?location='+encodedLocation
        }
    },
    
    render:function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                 <ul className="menu">
                     <li className="menu-text">React weather app</li>
                     <li>
                     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>get weather</IndexLink>
                     </li>
                     <li>
                     <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                     </li>
                     <li>
                     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>examples</Link>
                     </li>
 
                 </ul>
                </div>
                <div className="top-bar-right">
                 <form onSubmit={this.onSearch}>
                <ul className="menu">
                    <li>
                    <input type="search" placeholder="search waeather by city" ref="search"/>
                    </li>
                    <li>
                    <input type="submit" className="button" value="get weather"/>
                    </li>
                </ul>
                 </form>
                </div>
            </div>
             
         )
     }
})



module.exports=Nav;
