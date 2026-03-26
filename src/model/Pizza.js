const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true},
    descricao: { type: String, required: true},
    imagem: { type: String, required: true},
    codigoBarra: { type: Number, unique: true, required: false },
    // tamanhos disponíveis com preço por tamanho
    tamanhos: [
        {
            nome: { type: String, required: true },
            preco: { type: Number, required: true }
        }
    ],
    ingredientes: [ { type: String } ],
    borda: {
        tipo: { type: String },
        adicional: { type: Number, default: 0 }
    },
    categorias: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "categorias" },
            createdAt: { type: Date, required: true, default: Date.now() }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
});

PizzaSchema.path("categorias").validate(function(categorias) {
    if (!Array.isArray(categorias)) return true;

    const ids = categorias.map((categoria) => String(categoria._id));
    return new Set(ids).size === ids.length;
}, "Uma pizza nao pode ter categorias duplicadas.");

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;
