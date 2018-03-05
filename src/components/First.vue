<template>
	<div class="first">
		<el-table :data="tableData" style="width: 100%">
	      <el-table-column class="tableTh" prop="date" label="日期">
	      </el-table-column>
	      <el-table-column prop="name" class="tableTh" label="姓名">
	      </el-table-column>
	      <el-table-column class="tableTh" prop="address" label="地址">
	      </el-table-column>
	    </el-table>
	    <div class="block">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :page-sizes="[5]"
      		  :page-size="5"
		      :current-page="currentPage1"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>
		  </div>
	</div>
</template>
<script>
	 export default{
	 	data() {
	        return {
	          	tableData:[],
	          	currentPage1: 1,
	          	total:30
	        }
	   },
	    methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      },
	      getAddress(){
	      	this.total=15;
	      	this.tableData=[{date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1511 弄'},{date: '2016-05-04',name: '王小虎',address: '上海市普陀区金沙江路 1512弄'},{date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1513 弄'},{date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1514弄'},{date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}];
	      }
	    },
	    created: function() {
	       this.getAddress();
	    },
	 }
</script>
<style>
	.el-table th>.cell{
		text-align: center;
	}
</style>
