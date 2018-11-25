import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RecommentWrapper, RecommentItem} from '../style';

class Recomment extends Component{
    render() {
        const {list} = this.props;
        return (
            <RecommentWrapper>
                {
                    list.map((item)=>{
                        return <RecommentItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommentItem>
                    })
                }
            </RecommentWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recomment);