import React, { useState } from 'react';
import './App.css'


const PlaylistManager = () => {
  const [playlist, setPlaylist] = useState([]);
  const [newSong, setNewSong] = useState('');

  const handleNewSongChange = (event) => {
    setNewSong(event.target.value);
  };

  const handleAddSong = () => {
    const updatedPlaylist = [...playlist, newSong];

    setPlaylist(updatedPlaylist);
    setNewSong('');
  };

  const handleRemoveSong = (songIndex) => {
    const updatedPlaylist = playlist.filter((_, index) => index !== songIndex);

    setPlaylist(updatedPlaylist);
  };

  return (
    <div className='geek' style={{ fontFamily: 'Arial, sans-serif', alignContent: 'center', backgroundColor: 'yellowgreen' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>My Music Playlist</h2>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {playlist.map((song, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <span
              style={{
                marginRight: '10px',
                fontWeight: 'bold',
                flex: '1',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
            >
              {song}
            </span>

            <button
              onClick={() => handleRemoveSong(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={newSong}
          onChange={handleNewSongChange}
          placeholder="Enter song name"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button
          onClick={handleAddSong}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Song
        </button>
      </div>
    </div>
  );
};


export default PlaylistManager;

