import BaseRepository from "@/repositories/BaseRepository";
const resource = 'feed';

export default {
    listByFilters(filters) {
        return BaseRepository.get(`${resource}?`+(new URLSearchParams(filters).toString())).then(result => {
            return result.data
        });
    }
}