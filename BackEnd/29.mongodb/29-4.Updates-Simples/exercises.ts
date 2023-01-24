// ex 1
// db.movies.updateOne({ title: 'Batman' }, { $set: { imdbRating: 7.7 } })

// ex 2
// db.movies.updateOne({ title: 'Godzilla' }, { $set: { budget: 1 } })

// ex 3
// db.movies.updateOne({ title: 'Home Alone' }, { $set: { budget: 15, imdbRating: 5.5 } })

// ex 4
// db.movies.updateOne({ title: 'Batman' }, { $inc: { imdbRating: 2 } })

// ex 5
// db.movies.updateOne({ title: 'Home Alone' }, { $inc: { budget: 5 } })

// ex 6
// db.movies.updateOne({ title: 'Batman' }, { $mul: { imdbRating: 4 } })

// ex 7
// db.movies.updateOne({ title: 'Batman' }, { $rename: { budget: 'estimatedBudget' } })

// ex 8
// db.movies.updateOne({ title: 'Home Alone' }, { $min: { budget: 5 } })

// ex 9
// db.movies.updateOne({ title: 'Godzilla' }, { $max: { imdbRating: 8.6 }, $set: { adventure: 'thriller' } })

// ex 10
// db.movies.updateOne({ title: 'Godzilla' }, { $currentDate: { lastUpdated: { $type: 'timestamp' } } })

// ex 11
// db.movies.updateMany({}, { $set: { sequels: 0 } })

// ex 12
// db.movies.updateMany({}, { $unset: { budget: '', estimatedBudget: '' } })

// ex 13
// db.movies.updateMany({ title: { $in: ['Batman', 'Home Alone'] } }, { $max: { imdbRating: 17 } })

// ex 14


// ex 15


// ex 16


// ex 17


// ex 18


// ex 19


// ex 20

