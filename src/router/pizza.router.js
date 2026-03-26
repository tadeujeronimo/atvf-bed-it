const router = require("express").Router();

const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPizza, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, pizzaController.findPizzaByIdController);
router.get("/findAll", authMiddleware, paginacao, pizzaController.findAllPizzasController);

router.post("/create", authMiddleware, validaPizza, pizzaController.createPizzaController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams, valida_IdBody, pizzaController.addCategoriaPizzaController);

router.put("/update/:id", authMiddleware, validaIdParams, validaPizza, pizzaController.updatePizzaController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pizzaController.deletePizzaController);
router.delete("/removeCategoria/:id", authMiddleware, validaIdParams, pizzaController.removeCategoriaPizzaController);

module.exports = router;
