<template>
    <div class="pd-100">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="参数"
                    width="300"
                    property="name">
            </el-table-column>
            <el-table-column
                    label="上次修改时间"
                    width="300"
            align="center">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作"
                             width="550"
            align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            style="margin-right: 20px"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

                    <el-popconfirm
                            title="确定删除这条数据吗？">
                        <el-button size="mini"
                                   type="danger"
                                   @click="handleDelete(scope.$index, scope.row)"
                                   slot="reference">删除</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="'修改参数：' + paramType " :visible.sync="isVisible" width="35%">
            <el-form :model="form" :ref="form">
                <el-form-item label="原始值：" :label-width="formLabelWidth">
                    <el-input disabled v-model="form.oldValue" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="修改为：" :label-width="formLabelWidth"
                              prop="newValue"
                              :rules="[{ required: true, message: '此项为必填'}]">
                    <el-input v-model="form.newValue" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button  @click="closeModal">关 闭</el-button>
                <el-button type="primary" @click="submit(form)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import data from './../assets/mock/param.json'
    export default {
        name: "ParamManage",
        data() {
            return{
                tableData:[],
                form: {
                    oldValue: '',
                    newValue: ''
                },
                checkedRow: {},
                formLabelWidth: '100px',
                isVisible: false,
                paramType: ''
            }
        },
        mounted() {
            this.tableData = data;
        },
        methods: {
            handleEdit(index, row) {
                this.checkedRow = row;
                this.paramType = row.name;
                this.isVisible = true;
                this.form.oldValue = row.value
            },
            handleDelete(index, row) {
                this.checkedRow = row;
                console.log(index, row);
                this.$message({
                    message: '数据删除成功！',
                    type: 'success'
                });
            },
            submit(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        // const param = {
                        //     id: data.id,
                        //     value: this.form.newValue
                        // }
                        //调用接口

                        this.$message({
                            message: '编辑成功！',
                            type: 'success'
                        });
                        this.$message.error('编辑失败！');
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });


            },
            closeModal() {
                this.isVisible = false;
            }
        }
    }
</script>

<style scoped>
.pd-100 {
    padding: 100px 100px 0;
}
</style>
