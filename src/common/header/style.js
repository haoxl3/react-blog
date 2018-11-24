import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'//给a标签的href指定跳转路径
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.action{
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter{
        transition: all .2s ease-out;
    }
    .slide-enter-action{
        width: 240px;
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active{
        width: 160px;
    }
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 20px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background:  #ec6149;
    }
`