<template>
    <div>
        <el-row>
            <el-col :span="24" class="row-list" v-for="item of listData" :key="item.id">
                <el-col :span="2">
                    <i class="iconfont iconpdf" v-if="item.fileType === 'pdf'"></i>
                    <i class="iconfont icontxt" v-if="item.fileType === 'txt'"></i>
                    <i class="iconfont iconexcel" v-if="item.fileType === 'excel'"></i>
                    <i class="iconfont iconword" v-if="item.fileType === 'word'"></i>
                </el-col>
                <el-col :span="8" style="text-align: left">
                    <span>{{item.fileName}}</span>
                </el-col>
                <el-col :span="12">
                    <el-row :span="12">
                        <el-col :span="6">
                            <el-link icon="el-icon-time" type="primary" :underline="false">
                                {{item.importDate}}
                            </el-link>
                        </el-col>
                        <el-col :span="4" class="click-style">
                            <div v-on:click="viewFileDetail" >
                                <el-link type="warning" icon="el-icon-view" :underline="false">查看</el-link>
                            </div>
                        </el-col>
                        <el-col :span="4" @click="importFile" class="click-style">
                            <el-link type="danger" :disabled="!item.isImport" :underline="false"><i class="iconfont icondaoru"></i>导入</el-link>
                        </el-col>
                        <el-col :span="4" @click="exportFile" class="click-style">
                            <el-link type="success" :disabled="!item.isExport" :underline="false"><i class="iconfont icondaochu"></i>导出</el-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
        </el-row>
        <el-dialog :title="fileName + '.' + fileType" :visible.sync="isVisible">
            <el-table :data="tableData"
                      v-loading="loading">
                <el-table-column
                        v-for="(i, index) in tableHeader"
                        :key="index"
                        :property="i.key" :label="i.label" width="i.width"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="closeModal">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import data from './../assets/mock/table.json'
    export default {
        name: "ListData",
        props: ["listData"],
        data() {
            return {
                tableData: [],
                tableHeader: [],
                isVisible: false,
                fileName: '',
                fileType: '',
                loading: false
            }
        },
        mounted () {
        },
        methods: {
            viewFileDetail () {
                this.isVisible = true;
                this.tableData = data.fileDate;
                this.fileName = data.fileName;
                this.fileType = data.fileType;
                this.tableHeader= data.tableHeader;
            },
            importFile () {
                this.$message({
                    message: '导入成功！',
                    type: 'success'
                });
            },
            exportFile () {
                this.$message({
                    message: '导出成功！',
                    type: 'success'
                });
            },
            closeModal() {
                this.isVisible = false;
            }
        }
    }
</script>

<style scoped>
    .row-list {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eeeeee;
        padding: 10px;
    }

    .row-list:hover {
        transform: translateY(-1px);
        background-color: transparent;
        background-image: linear-gradient(#fff, hsla(0, 0%, 100%, .5) 30%, #fff);
        box-shadow: 0 0 26px rgba(0, 61, 131, .1);
    }

    .click-style {
        cursor: pointer;
    }

    .el-icon-time, .el-icon-view, .icondaochu, .icondaoru {
        font-size: 20px !important;
        margin-right: 10px;
    }
</style>
