import axios from 'axios';

const KEY = 'AIzaSyByd5HaQoqo1_E0cgCBs8Vo-EEX07OxsAY';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})