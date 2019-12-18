const React=require('react')
const {Link,IndexLink}=require('react-router')

const Nav=React.createClass({
    render:function(){
        return(
            <div>
                <h1>nav coponent</h1>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>get weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>examples</Link>
            </div>
            
        )
    }
})



module.exports=Nav