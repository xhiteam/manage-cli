<template>
    <div class="tableContainer">
        <!-- 查询表单区 -->
        <div class="mainSearch" ref="mainSearch">
            <cli-search></cli-search>
        </div>
        <!-- 按钮操作区 -->
        <div class="mainButton">
            <el-button size="small" type="primary" @click="addDialog">创建用户</el-button>
            <el-button size="small" type="info">信息</el-button>
            <el-button size="small" type="success">成功</el-button>
            <el-button size="small" type="warning">警告</el-button>
            <el-button size="small" type="danger">错误</el-button>
        </div>
        <!-- 表格区 -->
        <div class="mainData">
            <el-table
          :data="rolesList.slice((pageInfo.currentPage-1)*pageInfo.pageSize,pageInfo.currentPage*pageInfo.pageSize)"
          style="width: 100%"
          :height="tableHeight"
          :border="true">
          <el-table-column
            label="姓名"
            width="180"
            align="center"
            fixed="left">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="电话"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="组别"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.pass }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="年级"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.pass }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="加入时间"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.pass }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="角色"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.role }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="说明"
            width="180"
            align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.role }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="180px" fixed="right">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="editDialog(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--分页器-->
        <el-pagination background layout="total,prev,sizes, pager, next,jumper" :current-page="pageInfo.currentPage" :page-size="pageInfo.pageSize" :total="rolesList.length" @size-change="handleSizeChange" :page-sizes="[5, 10, 20, 30]" @current-change="handleCurrentChange">
        </el-pagination>
        </div>
        <cli-dialog
        :mainDialogTitle="mainDialogTitle"
        :mainDialog="mainDialog"
        :formData="formData"
        @submit="submit"></cli-dialog>
    </div>
</template>

<script>
import cliSearch from './mainSearch';
import cliDialog from './mainDialog';
export default {
    name: '表格组件',
    components: {
        cliSearch,
        cliDialog
    },
    data () {
        return {
            rolesList: [
                {
                    name: 'test',
                    phone: 111,
                    pass: 'aaa',
                    role: '管理员'
                },
                {
                    name: 'test1',
                    phone: 112,
                    pass: 'aaa',
                    role: '管理员'
                },
                {
                    name: 'test12',
                    phone: 113,
                    pass: 'aaa',
                    role: '管理员'
                },
                {
                    name: 'test13',
                    phone: 114,
                    pass: 'aaa',
                    role: '组长'
                },
                {
                    name: 'test15',
                    phone: 115,
                    pass: 'aaa',
                    role: '组长'
                },
                {
                    name: 'test16',
                    phone: 116,
                    pass: 'aaa',
                    role: '组长'
                },
                {
                    name: 'test17',
                    phone: 222,
                    pass: 'aaa',
                    role: '成员'
                },
                {
                    name: 'test18',
                    phone: 222,
                    pass: 'aaa',
                    role: '普通成员'
                },
                {
                    name: 'test10',
                    phone: 222,
                    pass: 'aaa',
                    role: '普通成员'
                },
                {
                    name: 'test121',
                    phone: 222,
                    pass: 'aaa',
                    role: '普通成员'
                },
                {
                    name: 'test134',
                    phone: 222,
                    pass: 'aaa',
                    role: '普通成员'
                }
            ],
            /* 分页器的参数 */
            pageInfo: {
                currentPage: 1,
                pageSize: 5
            },
            formData: {
                name: '',
                phone: '',
                pass: '111',
                role: ''
            },
            mainDialogTitle: '',
            mainDialog: false,
            tableHeight: '150px'
        };
    },
    methods: {
        // 新增用户弹窗
        addDialog () {
            this.formData = {
                name: '',
                phone: '',
                role: ''
            };
            this.mainDialog = true;
            this.mainDialogTitle = '新增用户';
        },
        // 提交函数
        submit (title, form) {
            if (title === '新增用户') {
                this.addSubmit(form);
                this.mainDialog = false;
            }
            else if (title === '编辑用户') {
                this.edtiSubmit(form);
                this.mainDialog = false;
            }
            else {
                console.log('err');
            }
        },
        // 编辑用户弹窗
        editDialog (row) {
            this.formData = {
                name: row.name,
                phone: row.phone,
                role: row.role
            };
            this.mainDialog = true;
            this.mainDialogTitle = '编辑用户';
        },
        // 新增用户确定
        addSubmit (data) {
            console.log(data);
        },
        // 编辑用户确定
        edtiSubmit (data) {
            console.log(data);
        },
        handleDelete (index, row) {
            this.$confirm('确定要删除吗?', '删除', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.rolesList.splice(index, 1);
            }).catch(() => {
            });
        },
        /* 分页大小切换 */
        handleSizeChange (val) {
            this.pageInfo.pageSize = val;
        },
        /* 分页切换 */
        handleCurrentChange (val) {
            this.pageInfo.currentPage = val;
        }
    },
    mounted () {
        // 设置表格的高度
        this.$nextTick(() => {
            // 220是固定不能改，后面的是搜索表单的高度
            let height = document.body.clientHeight - 220 - this.$refs.mainSearch.offsetHeight;
            this.tableHeight = height + 'px';
        });
    }
};
</script>

<style lang="less" scoped>
    .tableContainer{
        width: 98%;
        height: 100%;
        .mainSearch{
            width: 100%;
        }
        .mainButton{
            width: 100%;
            height: 40px;
            line-height: 40px;
        }
        .mainData{
            width: 100%;
            margin-top: 3px;
            text-align: center;
        }
    }
</style>
