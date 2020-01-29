// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: ["error", 4],
    // 关闭语句强制分号结尾
    semi: [2, "always"],
    // 一行结束后不允许有空格
    "no-trailing-spaces": 2,
    //  不能有未定义的变量
    "no-undef": 2,
    // 使用var的时候警告
    "no-var": 1,
    //  必须使用 if(){} 中的{}
    curly: [2, "all"],
    //  变量定义后一定要使用
    "no-unused-vars": 2,
    //  不能使用alert
    "no-alert": 2,
    //  禁止修改const声明的变量
    "no-const-assign": 2,
    // 警告console
    "no-console": 0,
    // 最高三层循环
    "max-depth": [2, 3],
    "brace-style": [2, "stroustrup"],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  }
};
