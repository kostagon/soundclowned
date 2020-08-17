import SC from 'soundcloud';
import axios from 'axios';

export default {
    getTracks,
    getNextTracks
}

SC.initialize({
    client_id: process.env.REACT_APP_API_KEY_SC
});

async function getTracks(searchStr) {
    try {
        return await SC.get('/tracks', {
            q: searchStr,
            limit: 6,
            linked_partitioning: 1
        })
    } catch (err) {
        console.log('There was an error fetching data, error:', err)
    }
}

async function getNextTracks(url) {
    if (url) {
        try {
            return await axios.get(url).then(res => res.data)
        } catch (e) {
            console.log('Error fetching data (getNextTracks). Error:', e);
        }
    } else return 'No more tracks to show'
}
