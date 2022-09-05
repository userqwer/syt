import request from "@/utils/request";

export default {
  //医院列表
  getHospList(page, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/list/${page}/${limit}`,
      method: "get",
      params: searchObj //如果后端使用get方式，就使用params；如果是post方式，就用data
    });
  },
  //根据dictcode查询所有子节点 （所有省）
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: "get"
    });
  },
  //根据数据id查询子数据列表
  findChildId(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: "get"
    });
  },
  //更新医院的状态（上线？下线）
  updateStatus(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`,
      method: `get`
    });
  },
  //查询医院详情信息
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/showHospDetail/${id}`,
      method: `get`
    });
  },
  //查询医院科室信息
  getDeptByHoscode(hoscode) {
    return request({
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: `get`
    });
  },
  //查看预约规则
  getScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: "get"
    });
  },
  //根据医院编号 、科室编号和工作日期，查询排班详细信息
  getScheduleDetail(hoscode, depcode, workDate) {
    return request({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: `get`
    });
  }
};
