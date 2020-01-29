<template>
    <div class="loginContainer">
        <div class="loginContent">
            <div class="title">
                系统登录
            </div>
            <div class="form">
                <el-form ref="form" :model="formData" :rules="rules">
                    <el-form-item  prop='telephone'>
                        <el-input placeholder='用户名' type='text' v-model="formData.telephone"></el-input>
                    </el-form-item>
                    <el-form-item prop='password'>
                        <el-input placeholder='密码' type='password' v-model="formData.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop='code'>
                        <el-input placeholder='验证码' type='text' v-model="formData.code"></el-input>
                    </el-form-item>
                    <el-form-item align='center'>
                        <img src="../../assets/img/code.png" class="code" @click="getCode" />
                    </el-form-item>
                    <el-form-item align='center'>
                        <el-button type='primary' @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            formData: {
                telephone: '',
                password: '',
                code: ''
            },
            src: '../../assets/img/code.png',
            rules: {
                telephone: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 登录函数
        login () {
            console.log(this.formData);
            this.$router.push({
                path: '/home/index'
            });
        },
        // 得到新的验证码
        getCode () {
            console.log(this.img);
        }
    }
};
</script>

<style lang="less" scoped>
    @display:{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loginContainer{
        width: 100%;
        height: 100%;
        @display();
        .loginContent{
            width: 20%;
            min-width: 308px;
            height: 70%;
            min-height: 510px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            @display();
            flex-direction: column;
            .title{
                width: 60%;
                height: 10%;
                @display();
                font-size: 1.5em;
                letter-spacing: 2px;
            }
            .form{
                width: 70%;
                height: 60%;
                margin-top: 20px;
                .code{
                    width: 100px;
                    height: 50px;
                    cursor: pointer;
                }
                .el-button{
                    width: 80%;
                }
            }
        }
    }
</style>
