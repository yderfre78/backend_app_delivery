const Category = require('../models/category');

module.exports = {
    create(req, res) {
        const category = req.body;

        Category.create(category, (err, id) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error en el registro del Ususario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'La categoria se creo Correctamente',
                data: `${id}` //EL ID DE LA NUEVA CATEGORIA
            })

        });
    }
}