const Pizza = require("../model/Pizza");

const findPizzaByIdService = (id) => {
    return Pizza.findById(id);
}

const findAllPizzasService = (limit, offset) =>{
    return Pizza.find().limit(limit).skip(offset);
}

const createPizzaService = (body) =>{
    return Pizza.create(body);
}

const updatePizzaService = (id, body) =>{
    return Pizza.findByIdAndUpdate(id, body, {
        returnDocument: "after",
        runValidators: true,
    });
}

const deletePizzaService = (id) =>{
    return Pizza.findByIdAndRemove(id);
}

const addCategoriaPizzaService = (id, categoria) => {
    return Pizza.findOneAndUpdate(
        {
            _id : id,
            "categorias._id": { $ne: categoria._id },
        },
        {
            $push: {
                categorias: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt || new Date(),
                },
            },
        },
        {
            rawResult: true,
            runValidators: true,
        }
    );
}

const removeCategoriaPizzaService = (id, categoria) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id,
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

module.exports = {
    findPizzaByIdService,
    findAllPizzasService,
    createPizzaService,
    updatePizzaService,
    deletePizzaService,
    addCategoriaPizzaService,
    removeCategoriaPizzaService
}
