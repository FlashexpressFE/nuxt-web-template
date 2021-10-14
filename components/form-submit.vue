<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item prop="name">
      <el-input v-model="ruleForm.name" :placeholder="$ft('66')"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input
        v-model="ruleForm.phone"
        :placeholder="$ft('78')"
        :maxlength="10"
        @input="ruleForm.phone = ruleForm.phone.replace(/[^0-9]/g, '')"
      ></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input v-model="ruleForm.email" :placeholder="$ft('68')"></el-input>
    </el-form-item>
    <el-form-item prop="emailtitle">
      <el-input v-model="ruleForm.emailtitle" :placeholder="$ft('89')"></el-input>
    </el-form-item>
    <el-form-item prop="word">
      <el-input
        type="textarea"
        maxlength="500"
        show-word-limit
        v-model="ruleForm.word"
        :placeholder="$ft('90')"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">{{ $ft("83") }}</el-button>
    </el-form-item>
    <el-dialog top="40vh" :visible.sync="centerDialogVisible" width="30%" center>
      <p>{{ $ft("72") }}</p>
    </el-dialog>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      ruleForm: {
        name: "",
        phone: "",
        email: "",
        emailtitle: "",
        word: ""
      },
      rules: {
        name: [{ required: true, message: this.$ft("84"), trigger: "blur" }],
        emailtitle: [{ required: true, message: this.$ft("88"), trigger: "blur" }],
        email: [
          { required: true, message: this.$ft("80"), trigger: "blur" },
          { type: "email", message: this.$ft("85"), trigger: ["blur", "change"] }
        ],
        phone: [{ required: true, message: this.$ft("81"), trigger: "blur" }],
        word: [
          { required: true, message: this.$ft("95"), trigger: "blur" },
          { min: 10, max: 500, message: this.$ft("91"), trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("auth/tryout/create", {
              email: this.ruleForm.email,
              first_name: this.ruleForm.name,
              mobile: this.ruleForm.phone,
              email_subject: this.ruleForm.emailtitle,
              email_content: this.ruleForm.word
            })
            .then(res => {
              if (res && res.code === 1) {
                this.centerDialogVisible = true;
              }
            });
        } else {
          return false;
        }
      });
      // 立即试用埋点
      this.$ga.event('FHRContact', 'click', 'BottomTrialButton', 3)
    }
  }
};
</script>

<style lang="less" scoped>
form {
  width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
/deep/.el-form-item {
  width: 600px;
}
/deep/.el-form-item:nth-child(1) {
  width: 290px;
}
/deep/.el-form-item:nth-child(2) {
  width: 290px;
}
/deep/.el-form-item__content {
  margin: 0 !important;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button {
    padding:0 48px;
    height: 40px;
    background: #1592ff;
    margin-top: 12px;
    border-radius: 2px;
    box-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
  }
}
</style>
