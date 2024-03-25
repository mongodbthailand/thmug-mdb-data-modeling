use("bookstore");
const cleanupReviews = [
  {
    $set: {
      reviews: {
        // TODO: Specify the $reviews array and a size of 3
        // in the $slice array
        $slice: ["$reviews", 3],
      },
    },
  },
];

print("Updating the reviews array");
var res = db.books.updateMany({}, cleanupReviews);
print(res);
