import React, { useState, useRef, useEffect } from 'react';
import AudioSpectrum from 'react-audio-spectrum';
import {
    BiPlayCircle,
    BiPauseCircle,
    BiSkipPreviousCircle,
    BiSkipNextCircle
} from 'react-icons/bi'
import { Box, Card, CardBody, Stack } from "@chakra-ui/react";

export default function Player({ currentSong, currentIndex, nextSong, prevSong }) {
    const [isPlaying, setIsplaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsplaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])
    return (
        <Card
            borderWidth={'0px'}
            // borderRadius={'20px'}
            // borderColor={'orange'}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginBottom={'30px'}
        >
            <Stack>
                <CardBody className='player-main'>
                    <audio
                        ref={audioRef}
                        id='audio-element'
                        src={currentSong.music}
                    >
                    </audio>
                    <Box className='player-card'>
                        <Box className='audio-waveform'>
                            <AudioSpectrum
                                id="audio-canvas"
                                height={110}
                                width={300}
                                audioId={'audio-element'}
                                capColor={'#ffc107'}
                                capHeight={2}
                                meterWidth={5}
                                meterCount={300}
                                meterColor={[
                                    { stop: 1, color: '#ff9800' }
                                ]}
                                gap={8}
                            />
                        </Box>

                        {/*<h2 className='activeSong-name'>{currentSong.name}</h2>*/}
                        <h4 className='activeSong-name'>{currentSong.name}</h4>
                        <Box className='control-icon' display='flex' alignItems='baseline'>
                            <BiSkipPreviousCircle
                                color='white'
                                className='icons'
                                size={50}
                                onClick={prevSong}
                            />

                            {isPlaying ? (
                                <BiPauseCircle
                                    color='#ff5722'
                                    className='icons'
                                    size={70}
                                    onClick={togglePlay}
                                />
                            ) : (
                                <BiPlayCircle
                                    color='#ff5722'
                                    size={70}
                                    className='icons'
                                    onClick={togglePlay}
                                />
                            )}
                            <BiSkipNextCircle
                                color='white'
                                size={50}
                                className='icons'
                                onClick={nextSong}
                            />
                        </Box>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    )
}