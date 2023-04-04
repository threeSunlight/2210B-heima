let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const users = require("./common/users.json")
const rights = require("./common/rights.json")
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      status: 200,
      msg: "登录成功",
      loginData
    })
  )
})

/**登录日志 */
app.use("/users", function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: "登录成功",
      users
    })
  )
})

/**权限 */
app.use("/rights", function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: "登录成功",
      rights
    })
  )
})

/**用户管理 */

app.listen("8090", () => {
  console.log("监听端口 8090")
})
