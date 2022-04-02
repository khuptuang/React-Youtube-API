import axios from 'axios';

const KEY = 'AIzaSyB9vz7l3_si5oZu4BG4W6iBH4V_uS4-eGE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

