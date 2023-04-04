import http from "../utils/httpRequest"

/**登录接口 */
const loginFn = (params) => http.post(http.adornUrl("/login"), { username: params.username, password: params.password })

export { loginFn }
