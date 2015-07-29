// This was taking from Airbnb's styleguide. They publish an NPM
// module that we'd prefer to use directly but it's not currently
// up-to-date. When it becomes a bit more reliable we'll use it
// instead.

module.exports = {

  "rules": {
    "comma-dangle": [2, "never"],    // http://eslint.org/docs/rules/comma-dangle
    "no-console": 1,                 // http://eslint.org/docs/rules/no-console
    "no-trailing-spaces": 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    "no-unused-vars": [2, {          // http://eslint.org/docs/rules/no-unused-vars
      "vars": "local",
      "args": "after-used"
    }],
    "react/no-multi-comp": 2,
    "react/prop-types": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      "order": [
        "displayName",
        "mixins",
        "statics",
        "propTypes",
        "getDefaultProps",
        "getInitialState",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentWillUnmount",
        "/^on.+$/",
        "/^get.+$/",
        "/^render.+$/",
        "render"
      ]
    }]

  }
};
