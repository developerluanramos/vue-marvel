import BaseRepository from "@/repositories/BaseRepository";
const resource = 'characters';

export default {
    listAll() {
        return BaseRepository.get(`${resource}`).then(result => {
            console.log(result)
        }).catch(error => {
            console.error('ERROR', error)
        })
    }
}