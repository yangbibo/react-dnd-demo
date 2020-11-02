import React from 'react';
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    const {location} = props;
    const isActive = (url) => {
        return location.pathname.indexOf(url)!==-1?'active':''
    }
    if(location.pathname)
    return (
        <div className='menu'>
            <Link className={`menu_item ${isActive('/docs')}`} to="/docs">Docs</Link>
            <Link className={`menu_item ${isActive('/demo1')}`} to="/demo1">Demo1</Link>
            <Link className={`menu_item ${isActive('/demo2')}`} to="/demo2">Demo2</Link>
        </div>
    )
}

export default withRouter(HomePage);