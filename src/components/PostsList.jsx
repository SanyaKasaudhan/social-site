import React, { Component } from 'react';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    // console.log("po", posts.map((post) => (
       
    // )
    return (
       
      <div className="posts-list">
        hi
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlQnuOUWEpSDVJ3NCp5ya48gZggoX_GpQ5w&usqp=CAU"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.title}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.description}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8F20yTguBOLe6fhrxBhOleT0DvnVj2DbgSQ&usqp=CAU"
                    alt="likes-icon"
                  />
                  <span>{post.price}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyANtYKRWztqnRljx5f6v-RbWBuTmuKobmUg&usqp=CAU"
                    alt="comments-icon"
                  />
                  <span>{post.rating}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
