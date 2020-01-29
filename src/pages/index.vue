<template>
    <div class="mainContainer">
        <el-container>
            <el-aside width="210px">
                <cli-aside></cli-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <cli-header></cli-header>
                </el-header>
                <el-main>
                    <cli-tabs></cli-tabs>
                    <div class="main">
                    <keep-alive :include="tagsList">
                        <transition name="component-fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </keep-alive>
                    </div>
                </el-main>
                <el-footer height="40px">
                    <cli-footer></cli-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import cliFooter from '../components/footer';
import cliHeader from '../components/header';
import cliAside from '../components/aside';
import cliTabs from '../components/tabs';
export default {
    name: 'index',
    components: {
        cliFooter,
        cliHeader,
        cliAside,
        cliTabs
    },
    data () {
        return {
            tagsList: []
        };
    },
    created () {
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        this.$bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>

<style lang="less" scoped>
    .mainContainer{
        width: 100%;
        height: 100%;
        .el-container{
            height: 100%;
            .el-aside{
                height: 100%;
            }
            .el-header{
                padding: 0;
            }
            .el-footer{
                padding: 0;
            }
            .main{
                width: 100%;
                height: calc(100% - 35px);
                display: flex;
                justify-content: center;
            }
        }
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
