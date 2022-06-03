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
      category.name,
      category.price,
      category.image1,
      category.image2,
      category.image3,
      category.id_category,
      category.description,
      new Date(),
      new Date(),
    ],
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
