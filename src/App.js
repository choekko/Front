import { NativeSelect } from '@material-ui/core';
import React, {useEffect, useState, } from 'react';
import CounterContainer from './containers/CounterContainer';
import NavContainer from './containers/NavContainer'
import SessionCardContainer from './containers/SessionCardContainer';
import MypageContainer from './containers/MypageContainer';
import SessionCreateContainer from './containers/SessionCreateContainer';
// import MainPage from "./components/MainPage" 
// import 'fontsource-roboto'

import { Route, Switch, useHistory } from 'react-router-dom'
import Auth from './hoc/auth'
import SessionMatchContainer from './containers/SessionMatchContainer';

import {LoginPage} from './components/onBoard'

import Chat from "./components/liveSession/chatting/Chat"

import { getUserInfo } from './actions/UserActions'
import { bindActionCreators } from 'redux';
import { connect, useSelector, useDispatch} from 'react-redux';

const App = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    console.log('App token', token)
    if(token){
        dispatch(getUserInfo(token));
    }


    
    // const history = useHistory();
 
    // useSelector ?��?���? 무한루프;;
    // const userInfo = useSelector(state => state.user.data, [state]);
    // const { loading, error, userInfo} = this.props;
    // console.log('userInfo : ', userInfo);

    return (
        <>
        <Route exact path="/hole/c9c9dd9bb" component={Chat}/>
        
        <Route exact path="/" component={SessionCardContainer}/>
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/session/:state" component={SessionMatchContainer}/> 
            <Route exact path="/" component={NavContainer}/>
            <Route exact path="/mypage" component={MypageContainer}/>
            <Route exact path="/createSession" component={SessionCreateContainer}/>
        </Switch>
        </>

    )
};

const mapStateToProps = state => {
    const { loading } = state.user.pending;
    const { error } = state.user.error;
    const { userInfo } = state.user.data;
    return { loading, error, userInfo };
  }

export default connect(
    mapStateToProps,
    { getUserInfo }
)(App);
