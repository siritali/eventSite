'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HomePage = require('./components/homePage/homePage');
var AboutPage = require('./components/about/about');
var App = require('./components/App');

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about-page" component={AboutPage} />
	</Route>
);

module.exports = routes;