const initial_schema = {
  $jsonSchema: {
    bsonType: "object",
    title: "initial JSON schema to validate review_id exists and is a string",
    required: ["review_id"],
    properties: {
      review_id: { bsonType: "string" },
    },
  },
};
const complete_schema = {
  $jsonSchema: {
    bsonType: "object",
    title: "review document schema for the reviews collection",
    required: ["review_id", "user_id", "timestamp", "review", "rating", "_id"],
    additionalProperties: false,
    properties: {
      _id: { bsonType: "objectId" },
      review: { bsonType: "string" },
      review_id: { bsonType: "string" },
      user_id: { bsonType: "string" },
      timestamp: { bsonType: "date" },
      rating: {
        bsonType: "int",
        minimum: 0,
        maximum: 10,
      },
      comments: {
        bsonType: "array",
        maxItems: 3,
        items: {
          bsonType: "object",
        },
      },
    },
  },
};

// Apply the initial schema validation to the collection
db.runCommand({
  collMod: "reviews_fruit_georgia",
  validator: initial_schema,
  validationLevel: "strict",
  validationAction: "error",
});

// Check that the schema validation was applied
db.getCollectionInfos({ name: "reviews_fruit_georgia" });

// Insert a document that violates the schema because review_id is not a string
db.reviews_fruit_georgia.insertOne({
  review_id: 0000000,
  user_id: "testuser",
  timestamp: "2050-01-01",
  review: "Another test review",
  comments: ["comment1", "comment2", "comment3", "comment4", "comment5"],
  rating: 15,
});

// Apply the complete schema validation to the collection
db.runCommand({
  collMod: "reviews_fruit_georgia",
  validator: complete_schema,
  validationLevel: "strict",
  validationAction: "error",
});

// Check that the schema validation was applied
db.getCollectionInfos({ name: "reviews_fruit_georgia" });

// Insert a document that violates the schema because comments array has more than 3 items and rating is greater than 10
db.reviews_fruit_georgia.insertOne({
  review_id: "R0000000",
  user_id: "testuser",
  timestamp: "2050-01-01",
  review: "Another test review",
  comments: ["comment1", "comment2", "comment3", "comment4", "comment5"],
  rating: 15,
});
