import TrackPlayer from 'react-native-track-player';

// Creates the player
TrackPlayer.setupPlayer().then(async () => {

    // Adds a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('https://streamer.radio.co/se30891e37/low'),
        title: 'Track Title',
        artist: 'Track Artist',
       // artwork: require('track.png')
    });

    // Starts playing it
    TrackPlayer.play();

});

//get details from 'https://public.radio.co/stations/se30891e37/status'