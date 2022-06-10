const db = require("../config/config");

const Product = {};

Product.create = (product, result) => {
  const sql = `
    INSERT INTO
        products(
            name,
            description,
            price,
            image1,
            image2,
            image3,
            id_category,
            created_at,
            updated_at

        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  db.query(
    sql,
    [
      product.name,
      product.description,
      product.price,
      product.image1,
      product.image2,
      product.image3,
      product.id_category,
      new Date(),
      new Date(),
    ],
    console.log(product),
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
      } else {
        console.log("Id del nuevo producto ", res.insertId);
        result(null, res.insertId);
      }
    }
  );
};
module.exports = Product;
