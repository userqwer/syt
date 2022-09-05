<template>
  <div class="home page-component">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 2" :key="item">
        <img src="~assets/images/web-banner1.png" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索 
    :fetch-suggestions="querySearchAsync"：点击输入框输入内容后显示下拉框的内容
    @select="handleSelect"：点击下拉框中的某一个内容跳转到该内容的详情页-->
    <div class="search-container">
      <div class="search-wrapper">
        <div class="hospital-search">
          <el-autocomplete
            class="search-input"
            prefix-icon="el-icon-search"
            v-model="hosname"
            :fetch-suggestions="querySearchAsync"
            placeholder="点击输入医院名称"
            @select="handleSelect"
          >
            <span
              slot="suffix"
              class="search-btn v-link highlight clickable selected"
              >搜索
            </span>
          </el-autocomplete>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <div class="bottom">
      <div class="left">
        <div class="home-filter-wrapper">
          <div class="title">医院</div>
          <div>
            <div class="filter-wrapper">
              <span class="label">等级：</span>
              <div class="condition-wrapper">
                <span
                  v-for="(item, index) in hostypeList"
                  :key="index"
                  @click="hostypeSelect(item.value, index)"
                  class="item v-link clickable"
                  :class="hostypeActiveIndex == index ? 'selected' : ''"
                >
                  {{ item.name }}
                </span>
              </div>
            </div>
            <div class="filter-wrapper">
              <span class="label">地区：</span>
              <div class="condition-wrapper">
                <span
                  v-for="(item, index) in districtList"
                  :key="index"
                  class="item v-link clickable"
                  @click="districtSelect(item.value, index)"
                  :class="provinceActiveIndex == index ? 'selected' : ''"
                  >{{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="v-scroll-list hospital-list">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="v-card clickable list-item"
          >
            <div class="">
              <div
                class="hospital-list-item hos-item"
                index="0"
                @click="clickHospName(item.hoscode)"
              >
                <div class="wrapper">
                  <div class="hospital-title">{{ item.hosname }}</div>
                  <div class="bottom-container">
                    <div class="icon-wrapper">
                      <span class="iconfont"></span>
                      {{ item.param.hostype }}
                    </div>
                    <div class="icon-wrapper">
                      <span class="iconfont"></span>
                      每天{{ item.bookingRule.releaseTime }}放号
                    </div>
                  </div>
                </div>
                <img
                  :src="'data:image/jpeg;base64,' + item.logoData"
                  :alt="item.hosname"
                  class="hospital-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="common-dept">
          <div class="header-wrapper">
            <div class="title">常见科室</div>
            <div class="all-wrapper">
              <span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <span class="item v-link clickable dark">神经内科 </span>
            <span class="item v-link clickable dark">消化内科 </span>
            <span class="item v-link clickable dark">呼吸内科 </span>
            <span class="item v-link clickable dark">内科 </span>
            <span class="item v-link clickable dark">神经外科 </span>
            <span class="item v-link clickable dark">妇科 </span>
            <span class="item v-link clickable dark"> 产科 </span>
            <span class="item v-link clickable dark">儿科 </span>
          </div>
        </div>
        <div class="space">
          <div class="header-wrapper">
            <div class="title-wrapper">
              <div class="icon-wrapper">
                <span class="iconfont title-icon"></span>
              </div>
              <span class="title">平台公告</span>
            </div>
            <div class="all-wrapper">
              <span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"
                >关于延长北京大学国际医院放假的通知
              </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"
                >北京中医药大学东方医院部分科室医生门诊医
              </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">
                武警总医院号源暂停更新通知
              </span>
            </div>
          </div>
        </div>
        <div class="suspend-notice-list space">
          <div class="header-wrapper">
            <div class="title-wrapper">
              <div class="icon-wrapper">
                <span class="iconfont title-icon"></span>
              </div>
              <span class="title">停诊公告</span>
            </div>
            <div class="all-wrapper">
              <span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">
                中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告
              </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">
                首都医科大学附属北京潞河医院老年医学科门诊停诊公告
              </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"
                >中日友好医院中西医结合心内科门诊停诊公告
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hospApi from "@/api/hosp";
import dictApi from "@/api/dict";

export default {
  //服务端渲染：渲染组件之前异步获取数据，显示医院列表，
  //asyncData:只会加载一次,第一次进入页面肯定要加载医院列表，
  //params：可以得到请求路径中的值，相当于之前的this.&router.params
  //error：能得到异常信息
  asyncData({ params, error }) {
    return hospApi.getPageList(1, 10, null).then((response) => {
      return {
        //以前，没有nuxt前，需要在data中提前定义好变量才能使用
        //现在，用了服务端渲染技术后，可以不用事先定义好就可以使用，因为nuxt里已经帮我们做了封装
        list: response.data.content, //医院列表
        pages: response.data.totalPages, //总页数
      };
    });
  },
  data() {
    return {
      searchObj: {}, //查询对象
      page: 1,
      limit: 10,

      hosname: "", //医院名称
      hostypeList: [], //医院等级集合
      districtList: [], //地区集合

      hostypeActiveIndex: 0, //选中状态
      provinceActiveIndex: 0, //选中状态
    };
  },
  created() {
    this.init();
  },
  methods: {
    //查询医院等级列表和所有地区列表
    init() {
      //查询医院等级列表
      dictApi.findByDictCode("Hostype").then((response) => {
        //hostypeList清空
        (this.hostypeList = []),
          //向hostypeList添加“全部”这两个字
          this.hostypeList.push({ name: "全部", value: "" });
        //再把接口返回的数据，遍历添加到hostypeList
        for (var i = 0; i < response.data.length; i++) {
          this.hostypeList.push(response.data[i]);
        }
      });

      //查询地区数据
      dictApi.findByDictCode("Beijing").then((response) => {
        (this.districtList = []),
          this.districtList.push({ name: "全部", value: "" });
        for (let i in response.data) {
          this.districtList.push(response.data[i]);
        }
      });
    },
    getPageList() {
      hospApi
        .getPageList(this.page, this.limit, this.searchObj)
        .then((response) => {
          for (let i in response.data.content) {
            this.list.push(response.data.content[i]);
          }
          this.pages = response.data.totalPages;
        });
    },
    //根据医院等级查询列表
    hostypeSelect(hostype, index) {
      this.list = [];
      this.page = 1;
      this.hostypeActiveIndex = index;
      this.searchObj.hostype = hostype;
      this.getPageList();
    },
    //根据医院地区查询医院列表
    districtSelect(districtCode, index) {
      this.list = [];
      this.page = 1;
      this.provinceActiveIndex = index;
      this.searchObj.districtCode = districtCode;
      this.getPageList();
    },
    //在输入框输入值，弹出下拉框，显示相关内容
    querySearchAsync(queryString, cb) {
      this.searchObj = [];
      if (queryString == "") return;
      hospApi.getByHosname(queryString).then((response) => {
        for (let i = 0, len = response.data.length; i < len; i++) {
          response.data[i].value = response.data[i].hosname;
        }
        cb(response.data);
      });
    },
    //在下拉框选择某一个内容，执行下面方法，跳转到详情页面中
    handleSelect(item) {
      console.log(item);
      window.location.href = "/hosp/" + item.hoscode;
    },
    //在页面中点击某个医院名称，跳转到详情页面中
    clickHospName(hoscode) {
      window.location.href = "/hosp/" + hoscode;
    },
  },
};
</script>
