import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const {id} = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return <div>正在加载...</div>;
        }
        return <div className='posts-show'>
            <div className='container'>
                <button onClick={this.deletePost.bind(this)}>删除帖子</button>
                <Link to='/' >返回</Link>
                <h1>{post.title}</h1>
                <small># {post.categories}</small>
                <p>{post.content}</p>
            </div>
        </div>;
    }

    deletePost() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
}

function mapStateToProps({posts}, ownProps) {
    const {id} = ownProps.match.params;
    return {
        post: posts[id]
    }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);