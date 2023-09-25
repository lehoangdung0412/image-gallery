import { getQuery } from "./cookies";

const importAll = (r, page) => {
    let images = [];
    r.keys().map((item) => { images.push((r(item))) });
    if (page === 1) {
        return images.slice(0, 15)
    }
    return images.slice(((page - 1) * 15 + 1), page * 15 + 1)
}

const searchImages = async ({ setPage, page = 1, setHasMore, direct_path }) => {
    const query = getQuery()
    if (!query) return []
    let data;
    if (query === "images") {
        data = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/), page);
    }
    else if (query === "pictures") {
        data = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|svg|JPG)$/), page);
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