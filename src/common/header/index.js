import React,{Component} from 'react';
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
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
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
        const {focused,handleInputFocus,handleInputBlur} = this.props
        return (
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont': 'iconfont'}>&#xe80a;</i>
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
        totalPage: state.getIn(['header', 'totalPage'])
    }
}
//组件修改store时需要将方法写这里
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            //获取异步数据
            dispatch(actionCreators.getList());
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
        handleChangePage(page,totalPage) {
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);