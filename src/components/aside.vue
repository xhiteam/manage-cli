<template>
    <div class="asideContainer">
    <el-menu
    :default-active="active"
    router>
        <template v-for="(firstMenu, index) in menuList">
            <el-submenu :index="firstMenu.path" v-if="firstMenu.children" :key="index">
                <template v-if="firstMenu.children" :slot="firstMenu.children ? 'title' : ''">
                    <span  v-if="firstMenu.icon" :class="firstMenu.icon"/>
                    <span>{{firstMenu.name}}</span>
                </template>
                <el-menu-item v-for="(secondMenu, index2) in firstMenu.children" v-if="!secondMenu.children" :index="secondMenu.path" :key="index+'-'+index2">
                    {{secondMenu.name}}
                </el-menu-item>
                <template v-if="secondMenu.children" v-for="(secondMenu, index2) in firstMenu.children">
                    <el-submenu :index="secondMenu.path" v-if="secondMenu.children" :key="index+'-'+index2">
                        <template v-if="secondMenu.children" :slot="secondMenu.children ? 'title' : ''">
                            <span v-if="secondMenu.icon" :class="secondMenu.icon"/>
                            <span>{{secondMenu.name}}</span>
                        </template>
                        <!--第三层-->
                        <el-menu-item v-for="(thirdMenu, index3) in secondMenu.children" v-if="!thirdMenu.children" :index="thirdMenu.path" :key="index+'-'+index2+'-'+index3">
                            {{thirdMenu.name}}
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-submenu>
            <!-- 一级菜单 -->
            <el-menu-item :index="firstMenu.path" v-else :key="index">
                <span v-if="firstMenu.icon" :class="firstMenu.icon"/>
                <span slot="title">{{firstMenu.name}}</span>
            </el-menu-item>
        </template>
    </el-menu>
    </div>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            active: '/home/index',
            menuList: [
                // 一级菜单
                {
                    path: '/home/index',
                    icon: 'el-icon-s-home',
                    name: '首页'
                },
                {
                    path: '/home/table',
                    icon: 'el-icon-s-data',
                    name: '表格组件'
                },
                // 二级菜单
                {
                    path: '/index',
                    icon: 'el-icon-menu',
                    name: '二级菜单',
                    children: [
                        {
                            path: '/',
                            name: '三级菜单'
                        }
                    ]
                },
                // 三级菜单
                {
                    path: '/',
                    icon: 'el-icon-menu',
                    name: '二级菜单',
                    children: [
                        {
                            path: '/',
                            name: '三级菜单',
                            children: [
                                {
                                    path: '/',
                                    name: '测试'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    watch: {
        $route () {
            this.changeActive();
        }
    },
    methods: {
        changeActive () {
            this.active = this.$route.path;
        }
    }
};
</script>

<style lang="less" scoped>
    .asideContainer{
        width: 100%;
        height: 100%;
        .el-menu{
            height: 100%;
            border: none;
        }
    }
</style>
