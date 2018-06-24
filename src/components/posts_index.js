import React, {Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderLi() {
        return _.map(this.props.posts, (post) => {
            return <Link to={`/${post.id}`} className='list-group-item' key={post.id}>{post.title}</Link>;
        });
    }

    render() {
        return <div className='posts-index'>
            <div className='text-xs-right' >
                <Link to='/new' className='btn btn-primary'>创建帖子</Link>
            </div>
            <div className='list-group'>{this.renderLi()}</div>
        </div>;
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);