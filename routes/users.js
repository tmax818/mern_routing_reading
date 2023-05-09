var express = require('express');
var router = express.Router();


const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
/* GET users listing. */
router.get('/api', function(req, res, next) {
  res.json(users);
});

module.exports = router;
