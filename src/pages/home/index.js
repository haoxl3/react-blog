import React, {PureComponent} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recomment';
import Writer from './component/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{
    handleScrollTop() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" src="http://upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        //解绑window上的事件
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) =>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapState, mapDispatch)(Home);