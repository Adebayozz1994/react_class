import React, { useState } from 'react';
import axios from 'axios';

const Sportify = () => {
  const endPoint = "https://accounts.spotify.com/api/token";
  const clientId = "ca21267b426043469adc328407c44ac5";
  const clientSecret = "09e6167430754791b95fdb6967bafc0a";
  const playlistId = "37i9dQZF1DWUf3j9Rl2IUG"; // Replace with the actual playlist ID

  const [playlistInfo, setPlaylistInfo] = useState(null);

  const getToken = () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = new URLSearchParams();
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('grant_type', 'client_credentials');

    // Send POST request to get access token
    axios.post(endPoint, data, { headers })
      .then(response => {
        const accessToken = response.data.access_token;

        // Set the headers for the playlist request
        const playlistHeaders = {
          'Authorization': `Bearer ${accessToken}`,
        };

        // Send GET request to get playlist information
        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers: playlistHeaders })
          .then(playlistResponse => {
            // Handle the playlist response
            setPlaylistInfo(playlistResponse.data);
            console.log(playlistResponse.data);
          })
          .catch(playlistError => {
            // Handle playlist errors
            console.error('Error fetching playlist:', playlistError);
          });
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching token:', error);
      });
  };

  return (
    <main>
      <h1>Sportify</h1>
      <button onClick={getToken}>Get Music</button>

      {playlistInfo && (
        <div>
          <h2>Playlist Information:</h2>
          <p>Title: {playlistInfo.name}</p>
          <p>Owner: {playlistInfo.owner.display_name}</p>
          <p>Total Tracks: {playlistInfo.tracks.total}</p>

          <h3>Tracks:</h3>
          {playlistInfo.tracks.items.map((track, i) => (
            <div key={i}>
              <p>Title: {track.track.name}</p>
              <p>Artist(s): {track.track.artists.map(artist => artist.name).join(', ')}</p>
              <p>Album: {track.track.album.name}</p>
              <p>Duration: {track.track.duration_ms} ms</p>
              {track.track.preview_url && (
                <audio key={i} src={track.track.preview_url} controls></audio>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Sportify;
