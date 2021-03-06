import React, { Component } from 'react';
import ReactDOM             from 'react-dom';

/** 
 * Import RJEA component
 */
import JSONInput          from 'react-json-editor-ajrm'; // Using distribution version in node_modules 
//import JSONInput          from '../../src/index'; // Using source code

/**
 * Import some data. This is a sample object, which will be passed down to JSONInput placeholder properperties.
 * You can use placeholder to show data once, after component has mounted.
 */
import sampleData           from './sampledata';


class App extends Component {
    constructor (props) { 
        super(props);
    } 
    render() {
        /**
         * Rendering this JSONInput component with some properties
         */
        return(
            <div style = {{ maxWidth: '1400px', maxHeight: '100%' }} >
                <JSONInput
                    id          = 'unique_string' //an id is required
                    placeholder = {sampleData}    //data to display
                    theme       = 'light_mitsuketa_tribute'
                    colors      = {{
                        string : '#DAA520' // overrides theme colors with whatever color value you want
                    }}
                    height      = '550px'
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));