// ex 1
// db.movies.updateOne({ title: 'Batman' }, { $push: { category: 'superhero' } })

// ex 2
// db.movies.updateOne({ title: 'Batman' }, { $push: { category: { $each: ['villain', 'comic-based'] } } })

// ex 3
// db.movies.updateOne({ title: 'Batman' }, { $pull: { category: 'action' } })

// ex 4
// db.movies.updateOne({ title: 'Batman' }, { $pop: { category: -1 } })

// ex 5
// db.movies.updateOne({ title: 'Batman' }, { $pop: { category: 1 } })

// ex 6
// db.movies.updateOne({ title: 'Batman' }, { $addToSet: { category: 'action' } })

// ex 7
// db.movies.updateMany({ title: { $in: ['Batman', 'Home Alone'] } }, { $push: { category: '90\'s' } })

// ex 8
// db.movies.updateOne({ title: 'Home Alone' }, { $push: { cast: { $each: [
//   {
//     "actor": "Macaulay Culkin",
//     "character": "Kevin"
//   },
//   {
//     "actor": "Joe Pesci",
//     "character": "Harry"
//   },
//   {
//     "actor": "Daniel Stern"
//   }
// ] } } })

// ex 9
// db.movies.updateOne({ title: 'Home Alone', 'cast.actor': 'Daniel Stern' }, { $set: { 'cast.$.character': 'Marv' } })

// ex 10
// db.movies.updateOne({ title: 'Batman' }, { $push: { cast: { $each: [{ character: 'Batman' }, { character: 'Coringa' }, { character: 'Alfred' }] } } })

// ex 11
// db.movies.updateOne({ title: 'Batman', 'cast.character': 'Batman' }, { $push: { 'cast.$.actor': 'Christian Bale' } })
// db.movies.updateOne({ title: 'Batman', 'cast.character': 'Alfred' }, { $push: { 'cast.$.actor': 'Michael Caine' } })
// db.movies.updateOne({ title: 'Batman', 'cast.character': 'Coringa' }, { $push: { 'cast.$.actor': 'Heath Ledger' } })

// ex 12
// db.movies.updateOne({ title: 'Batman', 'cast.character': 'Batman' }, { $push: { 'cast.$.actor': { $each: ['Michael Keaton', 'Val Kilmer', 'George Clooney'], $sort: 1 } } })
