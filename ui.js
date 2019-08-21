"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");

const App = ({ name }) => (
	<Box>
		<Text>
			Hello, <Color green>{name}</Color>
		</Text>
	</Box>
);

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: "Stranger"
};

module.exports = App;
