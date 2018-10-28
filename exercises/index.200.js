'use strict';

require('./210-hilary/exercise.js')
require('./220-blueprints/exercise-1/exercise.js')
require('./220-blueprints/exercise-2/exercise.js')
require('./230-promise-execution/exercise.js')
require('./240-mongodb/exercise-1/exercise.js')
  .then(() => { return require('./240-mongodb/exercise-2/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-3/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-4/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-5/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-6/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-7/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-8/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-9/exercise.js'); })
  .then(() => { return require('./240-mongodb/exercise-10/exercise.js'); })