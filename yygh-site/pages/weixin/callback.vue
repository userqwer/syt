<template>
  <!-- header -->
  <div></div>
  <!-- footer -->
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {};
  },
  mounted() {
    let token = this.$route.query.token;
    let name = this.$route.query.name;
    let openid = this.$route.query.openid;
    // 调用父vue方法'loginCallback'(即系调用弹窗的方法，在弹窗(myhead.vue)里面写上'loginCallback'回调方法)
    window.parent["loginCallback"](name, token, openid);
  },
};
</script>
