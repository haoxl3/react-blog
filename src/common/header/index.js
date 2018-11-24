import React from 'react';
import { connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe80a;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                <i className="iconfont">&#xe61c;</i> 
                写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
//连接store和页面中的props，参数state为store中所有数据
const mapStateToProps = (state) => {
    return {
        //将store中的focused映射到props上，名字也叫focused
        focused: state.header.focused
    }
}
//组件修改store时需要将方法写这里
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);