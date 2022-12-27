import React, { useEffect, useState } from 'react'
import querystring from 'querystring';
import { Buffer } from 'buffer';
import axios from 'axios';
import { SiSpotify } from 'react-icons/si';
import SpotifyPlayingAnimation from './SpotifyPlayingAnimation';

const SpotifyNowPlaying = () => {
    
    const [nowPlaying, setNowPlaying] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);

    // all the tokens
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

    const getAccessToken = async () => {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        });

        return response.json();
    };
    
    const getNowPlaying = async () => {
        const { access_token } = await getAccessToken();
       
        try {
            const response = await axios.get(NOW_PLAYING_ENDPOINT, {
                // params: { limit: 50, offset: 0 },
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": 'application/json'
                }
            });
            setNowPlaying(response.data)
            // console.log(response.data.is_playing);
            if (response.data.is_playing) {
                setIsPlaying(true)
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getNowPlaying()
    })

    return (
        <div className='flex items-center justify-center md:justify-start'>

            <a
                target='_blank'
                rel='noopener noreferer'
                href={
                    isPlaying
                        ? nowPlaying['item']['external_urls']['spotify']
                        : 'https://open.spotify.com/user/31o4kl23knnxc2a2wd27dakyxxpi?si=IEZ8dCjWRzC4SWzFvMevOA'
                }
                className='relative flex items-center mt-5 px-3 py-2 shadow-md space-x-4 transition-shadow border rounded-md w-full md:w-72'
            >

                <div className='w-16'>
                    {isPlaying ? (
                        <img
                            className='w-16 shadow-sm'
                            src={nowPlaying['item']['album']['images'][0].url}
                            alt={nowPlaying['item'].name}
                        />
                    ) : (
                        <SiSpotify size={48} color={'#1ED760'} />
                    )}
                </div>
                <div className='flex-1'>
                    {isPlaying ? <SpotifyPlayingAnimation /> : ''}
                    <p className='font-semibold component'>
                        {isPlaying ? nowPlaying['item'].name : 'Not Listening'}
                    </p>
                    <p className='text-xs font-semibold text-gray-400'>
                        {isPlaying ? (nowPlaying['item']['album']['artists'][0]['name']) : 'Spotify'}
                    </p>
                </div>
                <div className='absolute bottom-1.5 right-1.5'>
                    <SiSpotify size={20} color={'#1ED760'} />
                </div>
            </a>
        </div>
    )
}

export default SpotifyNowPlaying