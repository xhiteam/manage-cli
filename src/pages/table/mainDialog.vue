<template>
  <div>
    <el-dialog :title="mainDialogTitle" :visible.sync="mainDialog" width="50%">
      <el-form :model="formData" align="center">
        <el-form-item label="姓名" label-width="200px">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="200px">
          <el-input v-model="formData.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" label-width="200px">
          <el-select v-model="formData.role" placeholder="请选择用户权限">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="组长" value="web组长"></el-option>
            <el-option label="普通成员" value="普通成员"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submit(false)">取 消</el-button>
        <el-button type="primary" @click="submit(true)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'mainDialog',
    props: {
        mainDialog: { // 控制弹窗显示
            type: Boolean,
            default: false
        },
        mainDialogTitle: { // 弹窗的标题
            type: String,
            default: ''
        },
        formData: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    phone: '',
                    role: ''
                };
            }
        }
    },
    methods: {
        // 单击确定按钮之后
        submit (val) {
            if (!val) {
                this.mainDialog = false;
            }
            else {
                this.$emit('submit', this.mainDialogTitle, this.formData);
            }
        }
    }
};
</script>

<style scoped>

</style>
