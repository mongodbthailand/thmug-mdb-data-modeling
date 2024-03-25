var existingBook_1 = db.books.findOne({
  _id: 1,
});
existingBook_1.product_type = "book";
db.books.updateOne({ _id: 1 }, [
  {
    $set: {
      description: existingBook_1.details,
      product_type: existingBook_1.product_type,
    },
  },
  { $unset: ["details"] },
]);
