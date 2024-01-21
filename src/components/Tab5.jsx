import React from 'react';
import { Tab } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const Tab5 = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        setQuery('wedding0701groom')
        const images = await searchImages({ setPage, setHasMore })
        setImages(images)
    }

    return (
        <Tab onClick={handleSubmit}>
            Wedding 07/01/2024 (Groom's family)
        </Tab>
    )
}

export default Tab5