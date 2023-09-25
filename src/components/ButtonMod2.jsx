import React from 'react';
import { Button } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const ButtonMod2 = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        const direct_path = 'pictures'
        setQuery(direct_path)
        const images = await searchImages({ setPage, setHasMore, direct_path })
        setImages(images)
    }

    return (
        <Button colorScheme='blue' onClick={handleSubmit}>
            Wedding Pictures
        </Button>
    )
}

export default ButtonMod2