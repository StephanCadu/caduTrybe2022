// ex 2
// db.heroes.find({ 'aspects.height': { $lt: 180 } }).pretty()

// ex 3
// db.heroes.countDocuments({ 'aspects.height': { $lt: 180 } })

// ex 4
// db.heroes.find({ 'aspects.height': { $lte: 180 } }).pretty()

// ex 5
// db.heroes.findOne({ 'aspects.height': { $gte: 200 } })

// ex 6
// db.heroes.countDocuments({ 'aspects.height': { $gte: 200 } })

// ex 7
// db.heroes.find({ 'aspects.eyeColor': 'green' }).pretty()

// ex 8
// db.heroes.countDocuments({ 'aspects.eyeColor': 'blue' })

// ex 9
// db.heroes.find({ 'aspects.hairColor': { $in: ['black', 'no hair'] } }).pretty()

// ex 10
// db.heroes.countDocuments({ 'aspects.hairColor': { $in: ['black', 'no hair'] } })

// ex 11
// db.heroes.countDocuments({ 'aspects.hairColor': { $nin: ['black', 'no hair'] } })

// ex 12
// db.heroes.countDocuments({ 'aspects.height': { $not: { $gt: 180 } } })

// ex 13
// db.heroes.find({ $nor: [{ race: 'Human' }, { 'aspects.height': { $gt: 180 } }] }).pretty()

// ex 14
// db.heroes.find({ $and: [{ $or: [{ 'aspects.height': 180 }, { 'aspects.height': 200 }] }, { publisher: 'Marvel Comics' }] }).pretty()

// ex 15
// db.heroes.find({ $and: [{ 'aspects.weight': { $gte: 80, $lte: 100 } }, { race: { $in: ['Human', 'Mutant'] } }, { publisher: { $ne: 'DC Comics' } }] }).pretty()

// ex 16
// db.heroes.countDocuments({ race: { $exists: false } })

// ex 17
// db.heroes.countDocuments({ 'aspects.hairColor': { $exists: true } })

// ex 18
// db.heroes.deleteOne({ publisher: 'Sony Pictures' })

// ex 19
// db.heroes.deleteMany({ publisher: 'George Lucas' })
