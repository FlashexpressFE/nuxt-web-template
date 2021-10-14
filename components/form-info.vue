<template>
  <div class="form-info">
    <div class="banner">
      <h2>{{ $ft("73") }}</h2>

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" :placeholder="$ft('66')"></el-input>
        </el-form-item>
        <el-form-item prop="comname">
          <el-input v-model="ruleForm.comname" :placeholder="$ft('67')"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" :placeholder="$ft('68')"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            :placeholder="$ft('78')"
            :maxlength="10"
            @input="ruleForm.phone = ruleForm.phone.replace(/[^0-9]/g, '')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="number">
          <el-select v-model="ruleForm.number" :placeholder="$ft('70')">
            <el-option
              v-for="(item, index) in numberlist"
              :key="index"
              :label="$ft(item)"
              :value="index + 1"
            ></el-option>
          </el-select>
        </el-form-item>
        <p>
          {{ $ft("96") }}
        </p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{ $ft("83") }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog top="40vh" :visible.sync="centerDialogVisible" width="30%" center>
      <p>{{ $ft("72") }}</p>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    category: { type: String },
    label: { type: String },
  },
  data() {
    return {
      centerDialogVisible: false,
      ruleForm: {
        name: "",
        comname: "",
        email: "",
        phone: "",
        number: ""
      },
      numberlist: ["0-50", "51-200", "201-500", "501-1000", "1000 + "],
      rules: {
        name: [{ required: true, message: this.$ft("84"), trigger: "blur" }],
        comname: [{ required: true, message: this.$ft("87"), trigger: "blur" }],
        email: [
          { required: true, message: this.$ft("80"), trigger: "blur" },
          { type: "email", message: this.$ft("85"), trigger: "blur" }
        ],
        phone: [{ required: true, message: this.$ft("81"), trigger: "blur" }],
        number: [{ required: true, message: this.$ft("82"), trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/auth/tryout/create", {
              company_name: this.ruleForm.comname,
              email: this.ruleForm.email,
              first_name: this.ruleForm.name,
              mobile: this.ruleForm.phone,
              number: this.ruleForm.number
            })
            .then(res => {
              if (res && res.code === 1) {
                window.location.href =
                  "http://backyard.flash-hr.com/#/login/index?redirect=%2Fdashboard&lang=" +
                  `${this.$store.state.lang.value}`;
              }
            });
        } else {
          return false;
        }
      });
      // 立即试用埋点
      this.$ga.event(category, 'click', label, 2)
    }
  }
};
</script>

<style lang="less" scoped>
.form-info {
  background: #1592ff;
  min-width: 1200px;
  .banner {
    margin: 0 auto;
    width: 1200px;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      color: #ffffff;
      line-height: 47px;
      padding-bottom: 24px;
    }

    /deep/.el-form-item__content {
      margin: 0 !important;
      height: 40px;
      width: 600px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .el-select {
        width: 100%;
      }

      button {
        padding: 0 48px;
        height: 40px;
        background: #ffffff;
        border-radius: 5px;
        border: 0;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #1592ff;
        box-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
      }
    }
    p {
      width: 600px;
      height: 40px;
      font-size: 14px;
      margin-bottom: 48px;
      font-weight: 400;
      text-align: left;
      color: #dcdee0;
      line-height: 20px;
    }
  }
}
</style>
