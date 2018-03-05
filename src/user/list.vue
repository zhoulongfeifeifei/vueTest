<template>
	<div class="first">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="姓名">
				 <el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="身份证号">
				<el-input v-model="form.sfz" :maxlength="18" @change="sfrz(form.sfz)"></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio v-model="form.radio" label="1" >男</el-radio><el-radio v-model="form.radio" label="2">女</el-radio>
			</el-form-item>
			<el-form-item label="选择地区">
				<el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true" :clearable="true" :filterable="true" @change="handleChange"></el-cascader>
				<!--<span>所选地区：{{form.city | myAddressCity}}{{form.erae | myAddressErae}}{{form.minerae | myAddressMinerae}}</span>-->
				<span>所选地区：{{form.cityName}}{{form.eraeName}}{{form.mineraeName}}</span>
			</el-form-item>
			<el-form-item label='您在'>
				{{form.mineraeName}}<el-form-item label="活动时间">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				 </el-form-item>
			</el-form-item> 
		</el-form>
	</div>
</template>
<script>
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	 export default{
	 	data(){
	 		return {
	 			form:{
	 				name:"周龙飞",
	 				sfz:'',
	 				radio:'1',
	 				city : '',
	 				cityName : '',
					erae : '',
					eraeName : '',
					minerae : '',
					mineraeName : '',
	 				selectedOptions:[],
	 			},
	 			CityInfo:CityInfo,
	 		}
	 	},
	 	methods:{
	 		 sfrz:function(res){
	 		 	 console.log(this.form.radio,this.form.sfz,this.form.cityName)
	 		 	if(!reg.test(this.form.sfz)){
	 		 		this.$alert('<strong>身份证格式不正确</strong>', '温馨提示', {
			          dangerouslyUseHTMLString: true
			        });
	 		 	}
	 		 },
	 		 handleChange(value) {
				this.form.city = this.form.selectedOptions[0];
				this.form.erae = this.form.selectedOptions[1];
				this.form.minerae = this.form.selectedOptions[2];
				for(var y=0 ;y<CityInfo.length;y++){
					if(this.CityInfo[y].value == this.form.city){
						 this.form.cityName = this.CityInfo[y].label;
					}
				};
				for(var y=0 ;y<CityInfo.length;y++){
					for(var z=0;z<CityInfo[y].children.length;z++){
						if(CityInfo[y].children[z].value == this.form.erae && this.form.erae!=undefined){
							 this.form.eraeName = CityInfo[y].children[z].label;
						}
					}
				};
				for(var y=0 ;y<CityInfo.length;y++){
					for(var z=0;z<CityInfo[y].children.length;z++){
						for(var i=0;i<CityInfo[y].children[z].children.length;i++){
							if(CityInfo[y].children[z].children[i].value == this.form.minerae && this.form.minerae!=undefined){
								 this.form.mineraeName = CityInfo[y].children[z].children[i].label
							}
						}
					}
				}
	     	},
	 	},
	 	computed:{
	 		 
	 	},
	 	mounted :function(){
	 	} 
	 }
</script>
<style type="text/css">
	.sfz{
		-webkit-appearance: none;
	    background-color: #fff;
	    border-radius: 4px;
	    border: 1px solid #d8dce5;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    color: #5a5e66;
	    display: inline-block;
	    font-size: inherit;
	    height: 40px;
	    line-height: 1;
	    outline: 0;
	    padding: 0 15px;
	    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button{
	    -webkit-appearance: none !important;
	    margin: 0; 
	}
</style>