import { Router } from 'express';
import ListAddressController from '../../app/Controllers/AddressApi/ListAddressController.js';
import GetAddressController from '../../app/Controllers/AddressApi/GetAddressController.js';
import CreateAddressController from '../../app/Controllers/AddressApi/CreateAddressController.js';
import UpdateAddressController from '../../app/Controllers/AddressApi/UpdateAddressController.js';
import DeleteAddressController from '../../app/Controllers/AddressApi/DeleteAddressController.js';

export default (() => {
    const router = Router();

    router.get('/', ListAddressController);

    router.get('/:id', GetAddressController);

    router.post('/', CreateAddressController);

    router.put('/:id', UpdateAddressController);

    router.delete('/:id', DeleteAddressController);

    return router;
})();