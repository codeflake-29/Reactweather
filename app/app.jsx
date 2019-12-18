const React=require('react')
const ReactDOM=require('react-dom')
const {Router, Route, IndexRoute, hashHistory}= require('react-router')
const main=require('main')
const Weather=require('weather')
const About=require('about')
const Examples=require('examples')

//load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()



ReactDOM.render(
    <Router history={hashHistory}>
        
    <Route path='/' component={main} >
    <Route path='about' component={About}/>
    <Route path='examples' component={Examples}/>
    
     
    <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);