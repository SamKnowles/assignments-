import React from 'react';
import { connect } from 'react-redux';
import { filterGames } from '../Redux/games';
import '../Styles/FilterForm.css';

function FilterForm(props) {
    let {filterGames, filter} = props
    return (
        <div>
            <input checked={filter[0]} onChange={filterGames} type="checkbox" name='0'/>
            <input checked={filter[1]} onChange={filterGames} type="checkbox" name='1'/>
            <input checked={filter[2]} onChange={filterGames} type="checkbox" name='2'/>
            <input checked={filter[3]} onChange={filterGames} type="checkbox" name='3'/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.games
}

export default connect(mapStateToProps, { filterGames })(FilterForm);

