import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import  LyricList from './LyricList'

class SongDetails extends Component {

    render(){

        const {song} = this.props.data;
        console.log(this.props);

        if (!song){  return <div>Loading....</div>}

        return(
            <dev>
                <Link to="/"> Back </Link>
                <h3> {song.title}</h3>
                <LyricList lyrics={song.lyrics}></LyricList>
                <LyricCreate songId={this.props.params.id}></LyricCreate>
               
            </dev>
        )
    }
}



export default graphql(fetchSong,{ options :(props) => {

    return {variables : {id:props.params.id}}
}}) (SongDetails);
