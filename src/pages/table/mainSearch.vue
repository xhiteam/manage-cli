<template>
    <div class="mainSearch">
        <el-form>
            <div class="form-item-line">
                <el-form-item label="用户名:" label-width="100px" class="shorter">
                    <el-input v-model="formData.userName" clearable placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="性别:" label-width="100px" class="shorter">
                    <el-select v-model="formData.sex" clearable placeholder="请选择">
                        <el-option value="男" label="男"></el-option>
                        <el-option value="女" label="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话号码:" label-width="100px" class="middle">
                    <el-input v-model="formData.telephone" clearable placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item label="备注信息:" label-width="100px" class="longer">
                    <el-input v-model="formData.other" clearable placeholder="请输入备注信息"></el-input>
                </el-form-item>
            </div>
            <div class="form-item-line form-item-button">
                <el-button type="primary" size="small" @click="searchUser(true)">查询</el-button>
                <el-button size="small" @click="searchUser(false)">取消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'mainSearch',
    data () {
        return {
            formData: {
                userName: '',
                sex: '',
                telephone: '',
                other: ''
            }
        };
    },
    methods: {
        // 查询用户
        searchUser (val) {
            if (!val) {
                this.formData = {
                    userName: '',
                    sex: '',
                    telephone: '',
                    other: ''
                };
            }
            else {
                console.log(this.formData);
            }
        }
    }
};
</script>

<style lang="less" scoped>
    .mainSearch{
        width: 100%;
        padding: 0px 0 10px 0;
        background-color: #F1F3F4;
        border-radius: 5px;
        margin-top: 10px;
        .el-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
            .form-item-line{
                width: 98%;
                height: 40px;
                margin-top: 5px;
                display: flex;
            }
            .form-item-button{
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
<style lang="less">
    // 覆盖表单默认样式
    .mainSearch{
        @import '../../assets/less/form.less';
    }
</style>
