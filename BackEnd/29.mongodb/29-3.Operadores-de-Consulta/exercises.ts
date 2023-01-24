// ex 1
// db.movies.find({ category: { $all: ['action', 'adventure'] } }).pretty()

// ex 2
// db.movies.find({ $and: [{ imdbRating: { $gt: 7 } }, { category: { $all: ['action', 'adventure'] } }] }).pretty()

// ex 3
// db.movies.find({ ratings: { $elemMatch: { $gt: 103 } } }, { _id: 0, title: 1, ratings: 1 }).pretty()

// ex 4
// db.movies.find({ ratings: { $elemMatch: { $gte: 100, $lte: 105 } } }, { _id: 0, title: 1, ratings: 1 }).pretty()

// ex 5
// db.movies.find({ ratings: { $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] } } } , { _id: 0, title: 1, ratings: 1 }).pretty()

// ex 6
// db.movies.find({ category: 'adventure', ratings: { $elemMatch: { $gt: 103 } } }, { title: 1, ratings: 1, category: 1, _id: 0 }).pretty()

// ex 7
// db.movies.find({ category: { $size: 2 } }, { title: 1, _id: 0 }).pretty()

// ex 8
// db.movies.find({ ratings: { $size: 4 } }, { title: 1, _id: 0 }).pretty()

// ex 9
// db.movies.find({ budget: { $mod: [5, 0] }, category: { $size: 2 } }).pretty()

// ex 10
// db.movies.find({ $or: [{ category: 'sci-fi' }, { ratings: { $elemMatch: { $gt: 199 } } }] }, { title: 1, ratings: 1, category: 1, _id: 0 }).pretty()

// ex 11
// db.movies.find({ ratings: { $size: 4 }, category: { $in: ['adventure', 'family'] }, imdbRating: { $not: { $lt: 7 } } }).pretty()

// ex 12
// db.movies.find({ description: { $regex: /ˆThe/i } }).pretty()

// ex 13
// db.movies.find({ description: { $regex: /humanity.$/i } }).pretty()

// ex 14
// db.movies.find({ $expr: { $lt: ['$budget', '$grossWorldwide'] } }).pretty()
