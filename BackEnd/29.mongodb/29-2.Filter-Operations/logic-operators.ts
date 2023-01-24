// ex 1
// db.restaurants.find({ rating: { $not: { $lte: 5 } } }).count()

// ex 2
// db.restaurants.find({ $or: [{ rating: { $gte: 6 } }, { borough: 'Brooklyn' }] }).count()

// ex 3
// db.restaurants.find({ $and: [{ borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } }, { rating: { $gt: 4 } }] }).count()

// ex 4
// db.restaurants.countDocuments({ $nor: [{ rating: 1 }, { cuisine: 'American' }] })

// ex 5
// db.restaurants.countDocuments({
//   $and: [
//     { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
//     { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] }
//   ]
// })
