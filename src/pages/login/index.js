import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
} from './style.js';

class Detail extends Component{
    render() {
        return (
            <div>login</div>
        )
    }
}
const mapState = (state) => ({
    
})
const mapDispatch = (dispatch) => ({
    
})
export default connect(mapState,mapDispatch)(Detail);