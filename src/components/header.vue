<template>
    <div class="headerContainer">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home/index' }">系统首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in routes" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user">
            <!-- 用户头像 -->
            <img src="../assets/img/login.jpg" />&nbsp;&nbsp;
            <!-- 用户名 -->
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    CliUser<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus" @click.native="goBack">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            routes: []
        };
    },
    watch: {
        $route () {
            this.getRoute();
        }
    },
    methods: {
        goBack () {
            this.$router.push({
                path: '/'
            });
        },
        getRoute () {
            let matched = this.$route.matched.filter(item => item.name);
            matched.splice(0, 1);
            if (matched[0].path === '/home/index') {
                matched.splice(0, 1);
            }
            this.routes = matched;
        }
    },
    created () {
        this.getRoute();
    }
};
</script>

<style lang="less" scoped>
    .headerContainer{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        // border-bottom: 1px solid #EBEDEE;
        .user{
            height: 40px;
            width: 10%;
            min-width: 130px;
            padding-right: 10px;
            display: flex;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
                border-radius: 18px;
            }
            .el-dropdown-link{
                cursor: pointer;
            }
        }
    }
</style>
