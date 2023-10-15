import { useSearchParams } from "react-router-dom";

function useQueryParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q');

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchParams({ q: event.target.value })
    }

    return {
        query,
        handleSearch
    }
}

export default useQueryParams