var roll_up_review_ratings_and_userids_pipeline = [
  {
    $bucket: {
      groupBy: "$review.stars",
      boundaries: [0, 1, 2, 3, 4, 5, 6],
      default: "other",
      output: {
        count: { $sum: 1 },
        user_id: { $push: "$review.user_id" },
      },
    },
  },
];
db.reviews_5a0b6dd8_e817_11ee_b09e_2efb227433fa.aggregate(
  roll_up_review_ratings_and_userids_pipeline
);
