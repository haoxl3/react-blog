import React,{Component} from 'react';
import { connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button
} from './style'

class Header extends Component{
    getListArea() {
        const {focused, list,totalPage, mouseIn, page, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        //list为immutable对象，不能直接用'.'，所以需要转为JS对象
        const newList = list.toJS();
        const pageList = [];

        //防止第一次newList为undefined导致的key报错
        if(newList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}   
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render() {
        const {focused,handleInputFocus,handleInputBlur, list,login,logout} = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? 
                        <NavItem className="right" onClick={logout}>退出</NavItem>:
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe80a;</i>
                        {this.getListArea()}
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
}
//连接store和页面中的props，参数state为store中所有数据
const mapStateToProps = (state) => {
    return {
        //将store中的focused映射到props上，名字也叫focused。get为immutable的
        //获取state中的数据方法 
        focused: state.get('header').get('focused'),
        // 此方法与上面结果相同，都是取header里的focused
        // focused: state.getIn(['header','focused'])
        list: state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])
    }
}
//组件修改store时需要将方法写这里
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            //为了防止每次都去调用ajax
            if(list.size === 0){
                //获取异步数据
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin) {
            //演义另一种动画方式，采用JS操作dom
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle+360}deg)`;
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);