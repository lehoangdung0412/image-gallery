import React from 'react';
import { Tab } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const Tab3 = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        setQuery('wedding0601')
        const images = await searchImages({ setPage, setHasMore })
        setImages(images)
    }

    return (
        <Tab onClick={handleSubmit}>
            Wedding Pictures 06/01/2024
        </Tab>
    )
}

export default Tab3