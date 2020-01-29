<template>
    <div class="footerContainer">
        <div class="footerMsg">
            备案信息
        </div>
        <div class="footerMsg">
            团队信息
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer'
};
</script>

<style lang="less" scoped>
    .footerContainer{
        width: 100%;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #EBEDEE;
        .footerMsg{
            height: 30px;
            width: 25%;
            min-width: 250px;
            margin-left: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
