var review_2 = db.reviews.findOne({
  _id: 2,
});
var product_2 = db.books.findOne({
  product_id: 54538756,
});
db.reviews.updateOne({ _id: 2 }, [
  {
    $set: {
      "product.product_id": review_2.product_id,
      "product.product_type": product_2.product_type,
      "product.title": product_2.title,
      "review.user_id": review_2.user_id,
      "review.reviewTitle": review_2.reviewTitle,
      "review.reviewBody": review_2.reviewBody,
      "review.date": review_2.date,
      "review.stars": review_2.stars,
    },
  },
  {
    $unset: [
      "product_id",
      "user_id",
      "reviewTitle",
      "reviewBody",
      "date",
      "stars",
    ],
  },
]);
