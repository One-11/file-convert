<template>
    <div id="app">
        <el-container>
            <el-aside style="width: 250px">
                <div class="app-aside">
                    <div class="step-bar">
                        <el-steps direction="vertical" :active="step">
                            <el-step title="初始"></el-step>
                            <el-step title="导入"></el-step>
                            <el-step title="导出"></el-step>
                        </el-steps>
                    </div>
                </div>
            </el-aside>
            <el-container>
                <el-main class="app-main">
                    <div>
                        <el-tabs type="border-card">
                            <el-tab-pane label="今日导入">
                                <Initializer @import-finished="startImport" v-if="step === 1"/>
                                <Import @start-export="startExport" v-if="step === 2"/>
                            </el-tab-pane>
                            <el-tab-pane label="历史记录">
                                <HistoryImport/>
                            </el-tab-pane>
                            <el-tab-pane label="参数管理">
                                <ParamManage/>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-main>
                <el-footer class="app-footer">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Initializer from "./components/Initializer";
    import Import from "./components/Import";
    import HistoryImport from "./components/HistoryImport";
    import ParamManage from "./components/ParamManage";

    export default {
        name: 'App',
        components: {
            ParamManage,
            HistoryImport,
            Import,
            Initializer,
        },
        data() {
            return {
                step: 1
            }
        },
        mounted() {
            const date = new Date();
            const month = date.getMonth() + 1;
            const day = date.getDate() + 1;
            const today = date.getFullYear() + '-' + month + '-' + day;
                this.$notify({
                    iconClass: "el-icon-alarm-clock",
                    title: '今天的日期',
                    message: today,
                    duration: 0,
                    showClose: false,
                    // position:
                    offset: -10
                });
        },
        methods: {
            startImport: function () {
                this.step = 2;
            },
            startExport: function () {
                this.step = 3
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #f8fafc;
        height: 100vh;
    }
    .app-aside {
        height: calc(100vh - 50px);
        position: relative;
    }
    .step-bar{
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .el-icon-alarm-clock {
        color: #ee9900;
    }
    .el-steps--vertical {
        align-items: center;
    }

    .app-header {
        top: 0;
        height: 50px;
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item{
        height: 60px;
        line-height: 60px;
        width: 150px;
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom: 3px solid;
    }
    .el-tabs--border-card>.el-tabs__content{
        height: 600px;
    }
    .app-main {
        background-color: #ffffff;
        height: 100%;
    }

    .app-footer {
        bottom: 0;
        height: 50px;
    }
</style>
