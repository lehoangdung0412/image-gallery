import React, { useState } from 'react';
import { Heading, Box, Flex, Spinner } from '@chakra-ui/react';
import InfiniteScroll from "react-infinite-scroll-component";
import searchImages from "./utils/searchImages";
import Images from "./components/Images";
import ButtonMod from "./components/Init";
import ButtonMod2 from "./components/ButtonMod2";

const fetchNextImages =
    ({ page, setImages, setPage, setHasMore }) =>
        async () => {
            const direct_path = ""
          const images = await searchImages({
            setPage,
            page,
            setHasMore,
            direct_path
          })

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
  return (
      <Box w='90%' m='0 auto'>
          <Heading align='center' py='10' fontSize='5xl'>
              Hue Yomi - Vincent
          </Heading>

          <ButtonMod {...searchFormProps} />
          <ButtonMod2 {...searchFormProps} />
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
              <Images images={images} />
          </InfiniteScroll>
      </Box>
  )
}

export default App;
