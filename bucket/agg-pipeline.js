use("bookstore");

const bucketView = [
  {
    $group: {
      _id: {
        book_id: "$book_id",
        month: {
          $dateFromParts: {
            year: { $year: "$timestamp" },
            month: { $month: "$timestamp" },
            day: 1,
          },
        },
      },
      views: {
        $push: {
          user_id: "$user_id",
          timestamp: "$timestamp",
        },
      },
    },
  },
  {
    $set: {
      // TODO: Set the $size to the size of the $views array
      views_count: { $size: "$views" },
    },
  },
];

print(db.views_20f798ea.aggregate(bucketView));
