use("bookstore");
const copyReviews = [
  {
    // TODO: Specify the $reviews array to unwind.
    $unwind: { path: "$reviews" },
  },
  {
    $set: {
      "reviews.book_id": "$_id",
    },
  },
  {
    // TODO: Specify the $reviews array as the newRoot
    // in the $replaceRoot stage.
    $replaceRoot: {
      newRoot: "$reviews",
    },
  },
  {
    $out: "reviews",
  },
];

print("Running the aggregation pipeline");

db.books.aggregate(copyReviews);

print("aggregation operation completed");
