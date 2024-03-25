var existingBook_3 = db.books.findOne({
  _id: 3,
});
existingBook_3.product_type = "audiobook";
db.books.updateOne({ _id: 3 }, [
  {
    $set: {
      description: existingBook_3.desc,
      product_type: existingBook_3.product_type,
      authors: [existingBook_3.author],
    },
  },
  { $unset: ["author", "desc"] },
]);
