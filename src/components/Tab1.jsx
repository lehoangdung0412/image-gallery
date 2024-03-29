import React from 'react';
import { Tab } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const Tab1 = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        setQuery('prewedding')
        const images = await searchImages({ setPage, setHasMore })
        setImages(images)
    }

    return (
        <Tab onClick={handleSubmit}>
            Pre-Wedding
        </Tab>
    )
}

export default Tab1