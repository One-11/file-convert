<template>
    <div>
        <el-button type="primary" v-if="beginning" @click="statImport">开启今日导入</el-button>
        <div class="center" v-if="fileLoading">
            <Loading/>
        </div>
        <div v-if="finished">导入完成</div>
        <div>

        </div>
    </div>
</template>

<script>
    import Loading from "./Loading";

    export default {
        name: "Initializer",
        components: {Loading},
        data() {
            return {
                beginning: true,
                fileLoading: false,
                finished: false
            }
        },
        methods: {
            statImport: function () {
                this.beginning = false;
                this.fileLoading = true;
                let _this = this
                setTimeout(() => {
                    // 间隔请求，如果完成
                    _this.fileLoading = false;
                    _this.finished = true;
                    setTimeout(() => {
                        _this.$emit('import-finished', true);
                    },1000);
                },1000)
            }
        }
    }
</script>

<style scoped>
    .center {
        display: flex;
        height: 100%;
        justify-content: center;
        margin-top: 200px;
        background: #0f0514;
    }
</style>
