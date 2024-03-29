import React from 'react';
import { Tab } from '@chakra-ui/react';
import searchImages from '../utils/searchImages';
import { setQuery } from "../utils/cookies";

const Tab2 = ({ setImages, setPage, setHasMore }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPage(1)
        setQuery('engagement')
        const images = await searchImages({ setPage, setHasMore })
        setImages(images)
    }

    return (
        <Tab onClick={handleSubmit}>
            Engagement Ceremony
        </Tab>
    )
}

export default Tab2