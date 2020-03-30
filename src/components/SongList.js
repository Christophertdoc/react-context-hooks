import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm'

const SongList = () => { 

    const [songs, setSongs] = useState([
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This Wild Darkness', id: 3 }
    ])

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuidv4() }])
    }

    useEffect(() => {
        console.log('useEffect hook ran', songs)
    })

    return (
        <div className='songList'>
            <ul>
                {songs.map(song => {
                    return ( 
                        <li key={ song.id }>{ song.title }</li> 
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}

export default SongList