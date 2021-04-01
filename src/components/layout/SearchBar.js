import React,{ useRef } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { searchLog } from '../../actions/logActions';

const SearchBar = ({ searchLog }) => {
    const text = useRef('');
    const onChange = (e) => {
        searchLog(text.current.value);
    }
    return (
        <nav style={{ marginBottom: '30px' }} className='blue'>
            <div style={{ marginBottom: '30px' }} className="blue">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search Logs....' ref={text} onChange={onChange}/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
}

SearchBar.propType = {
    searchLog: PropTypes.func.isRequired
}

export default connect(null, {searchLog})(SearchBar);
