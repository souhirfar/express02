const { body, validationResult } = require("express-validator");
const validateMovie = [
    body("title").isLength({ max: 255 }),
    body("director").isLength({ max: 255 }),
    body("year").isLength({ max: 4 }),
    body("color").isBoolean(),
    body("duration").isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
          res.status(422).json({ validationErrors: errors.array() });
        } else {
          next();
        }
      },
    ];
    
    module.exports = validateMovie;  