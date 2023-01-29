import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRespository extends CrudRepository {
    constructor() {
        super(User);
    }
}

export default UserRespository;