import React from 'react';
import AudioPlayer from "react-modular-audio-player";

export function Player () {
    let audioFiles = [
        {
            src: "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
            title: "Hey Jude",
            artist: "The Beatles"
        },
        {
            src: "https://www.listennotes.com/e/p/c937577e50004cc3b8188f5234987b34/",
            title: "Uptown Funk ft. Bruno Mars",
            artist: "Mark Ronson"
        },
        {
            src: "https://www.listennotes.com/e/p/9b56639ca17849d08730172837083555/",
            title: "947: Star Wars Celebration Orlando Update",
            artist: "Adele"
        }
    ];

    //for rearrange prop
    let rearrangedPlayer = [
        {
            className: "top",
            style: { marginBottom: "0.3rem" },
            innerComponents: [
                {
                    type: "name",
                    style: { width: "58%" , fontSize:'20px' }
                },
                {
                    type: "time",
                    style: { justifyContent: "flex-end" }
                }
            ]
        },
        {
            className: "bottom",
            innerComponents: [

                {
                    type: "rewind",
                    style: { width: "12.5%", justifyContent: "flex-end" }
                },
                {
                    type: "play",
                    style: { width: "12.5%", justifyContent: "center" }
                },
                {
                    type: "forward",
                    style: { width: "12.5%", justifyContent: "flex-start"  }
                },
                {
                    type: "loop",
                    style: { width: "12.5%" }
                },
                {
                    type: "volume",
                    style: { width: "50%", justifyContent: "flex-end" }
                }
            ]
        }
    ];

    return (
    //inside Component render()
        <AudioPlayer
            audioFiles={audioFiles}
            rearrange={rearrangedPlayer}
            iconSize="3rem"
            playIcon="assets/player-icons/play-button.png"
            playHoverIcon="assets/player-icons/play-button.png"
            pauseIcon="assets/player-icons/pause.png"
            pauseHoverIcon="assets/player-icons/pause.png"
            rewindIcon="assets/player-icons/rewind.png"
            rewindHoverIcon="assets/player-icons/rewind.png"
            forwardIcon="assets/player-icons/fast-forward.png"
            forwardHoverIcon="assets/player-icons/fast-forward.png"
            volumeIcon="assets/player-icons/volume-1.png"
            // volumeEngagedIcon="assets/player-icons/volume-1.png"
            muteIcon="assets/player-icons/mute-volume.png"
            // muteEngagedIcon="assets/player-icons/mute-volume.png"
            loopIcon="assets/player-icons/replay.png"
            loopEngagedIcon="assets/player-icons/replay.png"

        />
    );

}
