// $push
// db.supplies.updateOne(
//   { _id: 1 },
//   {
//     $push: {
//       items: {
//         "name": "notepad",
//         "price":  35.29,
//         "quantity": 2,
//       },
//     },
//   },
//   { upsert: true },
// );

// $push + $each
// db.supplies.updateOne(
//   {},
//   {
//     $push: {
//       items: {
//         $each: [
//           {
//             "name": "pens",
//             "price": 56.12,
//             "quantity": 5,
//           },
//           {
//             "name": "envelopes",
//             "price": 19.95,
//             "quantity": 8,
//           },
//         ],
//       },
//     },
//   },
//   { upsert: true },
// );

// $push + $each + $sort + $slice
// db.supplies.updateOne(
//   { _id: 1 },
//   {
//     $push: {
//       items: {
//         $each: [
//           {
//             "name" : "notepad",
//             "price" : 35.29,
//             "quantity" : 2,
//           },
//           {
//             "name": "envelopes",
//             "price": 19.95,
//             "quantity": 8,
//           },
//           {
//             "name": "pens",
//             "price": 56.12,
//             "quantity": 5,
//           },
//         ],
//         $sort: { "quantity": -1 },
//         $slice: 2,
//       },
//     },
//   },
//   { upsert: true },
// );

// $pop
// db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } }); -> remove primeiro item
// db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } }); -> remove último item

// $pull
// db.supplies.updateMany(
//   {},
//   {
//     $pull: {
//       items: {
//         name: { $in: ["pens", "envelopes"] },
//       },
//     },
//   },
// );

// $pull
// db.profiles.updateOne({ _id: 1 }, { $pull: { votes: { $mod: [2, 0] } } }) -> remove votos pares

// $pull + deleteMany
// db.survey.updateMany({}, { $pull: { results: { score: 8, item: 'B' } } })