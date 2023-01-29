import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRespository extends CrudRepository {
    constructor() {
        super(Like);
    }
}

export default LikeRespository;