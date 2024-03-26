var cleanup_audiobook_entries_in_book_pipeline = [
  {
    $match: {
      $and: [{ product_type: "Unspecified" }, { length_minutes: { $gte: 0 } }],
    },
  },
  { $set: { product_type: "audiobook" } },
  {
    $merge: {
      into: books,
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  },
];
db.books.aggregate(cleanup_audiobook_entries_in_book_pipeline);
