<template>
	<div class="first">
		<el-carousel :interval="4000" type="card" height="322px">
			<el-carousel-item v-for="item in items">
		      <img :src="item.url" alt="" @click="toTopic(item.id)"/>
		       <h3>{{ item.title}}</h3>
		    </el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
	 export default{
	 	data(){
	 		return {
	 			items:[
	 				{url:'img/banner1.jpg',title:'1',id:'First'},
	 				{url:'img/banner2.jpg',title:'2',id:'Second'},
	 				{url:'img/banner3.jpg',title:'3',id:'userlist'},
	 				{url:'img/banner4.jpg',title:'4',id:'userLis3'},
	 				{url:'img/banner5.jpg',title:'5',id:'Second'}
	 			]
	 		}
	 	},
	 	methods:{
	 		toTopic(params){
	 			this.$router.push(params)	 
		    },
	 	}
	 }
</script>
<style>
	.el-carousel{
		width: 80%;
		margin: 0 auto;
	}
	.el-carousel__item {
	}
	.el-carousel__item h3 {
		width: 100%;
		position: absolute;
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 30px;
	    margin: 0;
	    text-align: center;
	    z-index: 5;
	    bottom: 0;
	    background: #fff;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__indicators{
  	
  }
</style>