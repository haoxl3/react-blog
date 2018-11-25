import React, {Component} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recomment';
import Writer from './component/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img src="http://upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home;