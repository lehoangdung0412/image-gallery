import React from 'react';
import { Button } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const ButtonMod = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        const direct_path = 'images'
        setQuery(direct_path)
        const images = await searchImages({ setPage, setHasMore, direct_path })
        setImages(images)
    }

    return (
        <Button colorScheme='blue' onClick={handleSubmit}>
            Engagement Ceremony Pictures
        </Button>
    )
}

export default ButtonMod