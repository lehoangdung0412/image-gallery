import { getQuery } from "./cookies";

const importAll = (r, page) => {
    let images = [];
    r.keys().map((item) => { images.push((r(item))) });
    if (page === 1) {
        return images.slice(0, 15)
    }
    return images.slice(((page - 1) * 15 + 1), page * 15 + 1)
}

const searchImages = async ({ setPage, page = 1, setHasMore }) => {
    const query = getQuery()
    if (!query) return []
    let data;
    if (query === "engagement") {
        data = importAll(require.context('../assets/engagement', false, /\.(png|jpe?g|svg)$/), page);
    }
    if (query === "prewedding") {
        data = importAll(require.context('../assets/prewedding', false, /\.(png|jpe?g|svg|JPG)$/), page);
    }
    else if (query === "wedding0601") {
        data = importAll(require.context('../assets/wedding0601', false, /\.(png|jpe?g|svg|JPG)$/), page);
    }
    setPage((prev) => prev + 1)

    if (data.length < 15) {
        setHasMore(false)
    } else {
        setHasMore(true)
    }

    return data
}

export default searchImages