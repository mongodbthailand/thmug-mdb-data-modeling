var existingBook_2 = db.books.findOne({
  _id: 2,
});
existingBook_2.product_type = "ebook";
existingBook_2.product_id = 44538756;
existingBook_2.authors = [
  "Shannon Bradshaw",
  "Eoin Brazil",
  "Christina Chodorow",
];
db.books.updateOne({ _id: 2 }, [
  {
    $set: {
      description: existingBook_2.desc,
      product_type: existingBook_2.product_type,
      product_id: existingBook_2.product_id,
      authors: existingBook_2.authors,
    },
  },
  { $unset: ["desc"] },
]);
