const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
}

const createUserService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
}

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
}

const addUserFavPizzaService = (id, pizza) => {
    console.log(pizza)
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                pizzas_fav:{
                    _id: pizza._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

const removeUserFavPizzaService = (id,pizza) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                pizzas_fav:{
                    _id: pizza._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavPizzaService,
    removeUserFavPizzaService
}