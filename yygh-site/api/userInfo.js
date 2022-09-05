import request from "@/utils/request";

const api_name = `/api/user`;

export default {
  // （调用登录接口模块的）
  login(userInfo) {
    return request({
      url: `${api_name}/login`,
      method: `post`,
      data: userInfo,
    });
  },

  // 得到用户信息
  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInfo`,
      method: `get`,
    });
  },

  // 保存用户认证信息
  saveUserAuth(userAuah) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: "post",
      data: userAuah,
    });
  },
};
