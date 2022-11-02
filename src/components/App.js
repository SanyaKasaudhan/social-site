
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/posts'
import Navbar from './Navbar';
import PostsList from './PostsList';
 class App extends React.Component {
  componentDidMount() { 
    this.props.dispatch(fetchPosts())
   }
  render() {
    const {posts}= this.props;
   console.log('props', this.props);
   return <div>



    {/* {
    posts.map(pro=>
     <div> {pro.title} </div>
    )} */}

    <Navbar />
    <PostsList posts={posts}/>
   </div>
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)