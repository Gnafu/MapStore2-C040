/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');

var assign = require('object-assign');
var Header = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        className: React.PropTypes.object
    },
    render() {
        return (
            <div style={this.props.style} className="mapstore-header">
                <div className="logo" />
            </div>
        );
    }
});

module.exports = {
    HeaderPlugin: assign(Header, {
        OmniBar: {
            name: 'header',
            position: 0,
            tool: true,
            priority: 1
        }
    })
};
