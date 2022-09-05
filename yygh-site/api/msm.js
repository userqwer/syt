import request from "@/utils/request";

const api_name = `/api/msm`;

// （调用发送短信接口模块的）
export default {
  sendCode(mobile) {
    return request({
      url: `${api_name}/send/${mobile}`,
      method: `get`,
    });
  },
};
