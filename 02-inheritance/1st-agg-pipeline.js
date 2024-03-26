var apply_inheritance_pattern_to_books_pipeline = [
  {
    $project: {
      _id: "$_id",
      product_id: "$product_id",
      product_type: { $ifNull: ["$product_type", "Unspecified"] },
      description: { $ifNull: ["$desc", "$description", "Unspecified"] },
      authors: { $ifNull: ["$authors", ["$author"], "Unspecified"] },
      publisher: "publisher",
      language: "$language",
      pages: "$pages",
      catalogues: "$catalogues",
      eformats: "$eformats",
      isbn10: "$isbn10",
      isbn13: "$isbn13",
      narrator: "$narrator",
      length_minutes: "$length_minutes",
    },
  },
  {
    $merge: {
      into: books,
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  },
];
db.books.aggregate(apply_inheritance_pattern_to_books_pipeline);
