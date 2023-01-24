// ex 1
// db.restaurants.find({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } }).pretty()

// ex 2
// db.restaurants.find({ cuisine: { $ne: 'American' } }).count()

// ex 3
// db.restaurants.find({ rating: { $gte: 8 } }).count()

// ex 4
// db.restaurants.find({ rating: { $lt: 4 } }).count()

// ex 5
// db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count()
