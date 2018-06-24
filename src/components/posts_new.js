import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';
import {connect} from 'react-redux';

class PostsNew extends Component {
    render() {
        const {handleSubmit} = this.props;
        return <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='posts-new'>
            <Field
                name='title'
                lable='标题'
                component={this.renderInput}
            />
            <Field
                name='categories'
                lable='分类'
                component={this.renderInput}
            />
            <Field
                name='content'
                lable='内容'
                component={this.renderTextarea}
            />
            <button className='btn btn-primary'>发布</button>
            <Link to='/' className='btn btn-secondary'>取消</Link>
        </form>;
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    renderInput(field) {
        const {meta: {touched, error}} = field;
        const className = touched && error ? 'form-group has-danger' : 'form-group';
        return <div className={className} >
            <label>{field.lable}</label>
            <input
                type='text'
                className='form-control'
                {...field.input}
            />
            <div className='text-help'>{touched ? error : ''}</div>
        </div>;
    }

    renderTextarea(field) {
        return <div className='form-group' >
            <label>{field.lable}</label>
            <textarea
                rows='5'
                className='form-control'
                {...field.input}
            />
        </div>;
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = '请输入标题';
    }

    if (!values.categories) {
        errors.categories = '请输入分类';
    }

    return errors;
}

export default reduxForm({
    form: 'FostsNewForm',
    validate
})(connect(null, {createPost})(PostsNew));