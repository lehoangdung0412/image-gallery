import React, {useEffect, useState} from 'react';
import { Heading, Box, Flex, Spinner, Tabs, TabList } from '@chakra-ui/react';
import InfiniteScroll from "react-infinite-scroll-component";
import searchImages from "./utils/searchImages";
import Images from "./components/Images";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import { ChakraProvider } from '@chakra-ui/react'
import { setQuery } from "./utils/cookies";
import Player from "./components/Player";
import { audios } from "./audioData";
import './App.css';
import Tab3 from "./components/Tab3";
import Tab6 from "./components/Tab6";
import Tab4 from "./components/Tab4";
import Tab5 from "./components/Tab5";

const fetchNextImages =
    ({ page, setImages, setPage, setHasMore }) =>
        async () => {
            const images = await searchImages({ setPage, page, setHasMore })
            setImages((prev) => prev.concat(images))
        }

const Loader = () => (
    <Flex justifyContent='center' py='2rem'>
        <Spinner size='xl' />
    </Flex>
)

const App = () => {
    const [images, setImages] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [page, setPage] = useState(1)
    const searchFormProps = {
        setImages,
        setPage,
        setHasMore,
    }
    const songs = audios;
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentSong, setCurrentSong] = useState(songs[0]);

    const nextSong = () => {
        if (currentIndex + 1 < audios.length) {
            setCurrentIndex(currentIndex + 1)
            setCurrentSong(audios[currentIndex + 1])
        } else {
            setCurrentIndex(0)
            setCurrentSong(audios[0])
        }
    }

    const prevSong = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setCurrentSong(audios[currentIndex - 1])
        } else {
            setCurrentIndex(audios.length - 1)
            setCurrentSong(audios[audios.length - 1])
        }
    }
    useEffect(() => {
        const handleSubmit = async () => {
            setPage(1)
            setQuery('wedding1001')
            const images = await searchImages({ setPage, setHasMore })
            setImages(images)
        }
        handleSubmit()
    }, []);
    return (
      <ChakraProvider>
          <Box w='90%' m='0 auto'>
              <Box className='player-main' display='flex' justifyContent={'right'}>
                  <Player
                      currentSong={currentSong}
                      currentIndex={currentIndex}
                      nextSong={nextSong}
                      prevSong={prevSong}
                  />
              </Box>
              <Heading textAlign={'center'} pb='10' fontSize='5xl' alignSelf={'center'}>
                  Hue Yomi - Vincent
              </Heading>
              <Tabs isFitted>
                  <TabList mb='1em'>
                      <Tab6 {...searchFormProps} />
                      <Tab5 {...searchFormProps} />
                      <Tab4 {...searchFormProps} />
                  </TabList>
                  <TabList mb='1em'>
                      <Tab3 {...searchFormProps} />
                      <Tab2 {...searchFormProps} />
                      <Tab1 {...searchFormProps} />
                  </TabList>
              </Tabs>
              <InfiniteScroll
                  next={fetchNextImages({
                      page,
                      setImages,
                      setPage,
                      setHasMore,
                  })}
                  dataLength={images.length}
                  hasMore={hasMore}
                  loader={<Loader />}
              >
                  <Images images={images}/>
              </InfiniteScroll>
          </Box>
      </ChakraProvider>
    )
}

export default App;
