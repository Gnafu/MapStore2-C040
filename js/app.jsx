/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');

const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');

const {pages, pluginsDef, initialState, storeOpts} = require('./appConfig');

const StandardRouter = connect((state) => ({
    locale: state.locale || {},
    pages
}))(require('../MapStore2/web/client/components/app/StandardRouter'));

const initialActions = [
];
const appStore = require('../MapStore2/web/client/stores/StandardStore').bind(null, initialState, {
    maps: require('../MapStore2/web/client/reducers/maps'),
    security: require('../MapStore2/web/client/reducers/security')
});
const appConfig = {
    appStore,
    storeOpts,
    pluginsDef,
    initialActions,
    appComponent: StandardRouter,
    printingEnabled: false
};

ReactDOM.render(
    <StandardApp {...appConfig}/>,
    document.getElementById('container')
);
