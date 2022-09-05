import request from "@/utils/request";

const api_name = `/api/hosp/hospital`;

export default {
  // 获取用户系统中的医院列表带分页
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: "get",
      params: searchObj,
    });
  },
  // 根据医院名称模糊查询
  getByHosname(hosname) {
    return request({
      url: `${api_name}/findByHosname/${hosname}`,
      method: "get",
    });
  },
  //根据hoscode查询医院信息详情和预约规则
  show(hoscode) {
    return request({
      url: `${api_name}/${hoscode}`,
      method: `get`,
    });
  },
  //根据hoscode查询医院科室
  findDepartment(hoscode) {
    return request({
      url: `${api_name}/findDeptByHosCode/${hoscode}`,
      method: `get`,
    });
  },
  //获取可预约信息分页
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: "get",
    });
  },
  // 获取上下午号源信息
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: "get",
    });
  },
  getSchedule(id) {
    return request({
      url: `${api_name}/getSchedule/${id}`,
      method: "get",
    });
  },
};
