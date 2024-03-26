var roll_up_product_type_and_number_of_authors_pipeline = [
  {
    $group: {
      _id: "$product_type",
      count: { $sum: 1 },
      averageNumberOfAuthors: { $avg: { $size: "$authors" } },
    },
  },
];
db.books.aggregate(
  roll_up_product_type_and_number_of_authors_pipeline
);
