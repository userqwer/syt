import request from "@/utils/request";

export default {
  // 条件查询带分页
  //医院设置列表
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: "post",
      data: searchObj //使用json
    });
  },
  //删除医院的方法
  removeDataById(id) {
    return request({
      url: `/admin/hosp/hospitalSet/delect/${id}`,
      method: "delete"
    });
  },

  //批量删除医院
  removeRows(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: "delete",
      data: idList
    });
  },
  //锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: "put"
    });
  },

  //医院添加
  saveHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: "post",
      data: hospitalSet
    });
  },
  //通过id查询医院信息
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: "get"
    });
  },
  //修改医院
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: "post",
      data: hospitalSet
    });
  }
};
