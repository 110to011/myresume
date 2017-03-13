<template>
	<div>
		<h1 class="title milky">荣誉证书</h1>
		<div class="content">
	        <div class="carousel">
		        <div class="contain">
		          	<ul class="images clearfix">
						<template v-for='(item,index) in imgData'>
							<li v-if='currentId==index'>
								<img :src="item.url">
							</li>
						</template>
					</ul>
					<div class="dots">
			          <template v-for="index in imgData.length">
			            <a :id="index" :class="{'active': currentId == index-1}" class="bullet" @click="currentId=index-1"></a>
			          </template> 
			        </div>
			        <div class="lf-arrow" @click='preFun'></div>
		        	<div class="rg-arrow" @click='nextFun'></div>
		        </div>
	        </div>
		</div>
	</div>
</template>
<script>
	const prefix = '../../static/images/h'
	export default {
		data () {
		    return {
				imgData:[
					{
						url: prefix + '1.jpg'
					},
					{
						url: prefix + '2.jpg'
					},
					{
						url: prefix + '3.jpg'
					},
					{
						url: prefix + '4.jpg'
					},
					{
						url: prefix + '5.jpg'
					},
					{
						url: prefix + '6.jpg'
					}
				],
				currentId:0
			}
		},
		methods: {
			preFun: function() {
				var _this = this;
				if(_this.currentId > 0 && _this.currentId < _this.imgData.length) {
					_this.currentId = _this.currentId - 1;
				}
			},
			nextFun: function() {
				var _this = this;
				if(_this.currentId >= 0 && _this.currentId < _this.imgData.length-1) {
					_this.currentId = _this.currentId + 1;
				}
			}
		},
		mounted :function () {
		    var _this = this;
		    var timer = setInterval(function() {
				if(_this.currentId >= 0 && _this.currentId < _this.imgData.length-1){
					_this.currentId = parseInt(_this.currentId) + 1;
				}else if(_this.currentId == _this.imgData.length-1) {
					_this.currentId = 0;
				}
		    },2000)
	  	}	
	}
</script>
<style scoped>
.clearfix:before,
.clearfix:after {
	content: "";
	display: block;
	line-height: 0;
}
.clearfix:after {
	clear: both;
}
.st-panel .carousel {
	position: relative;
    margin: 0 auto;
    width: 640px;
    height: 300px;
}
.contain {
	position: relative;
	width: 500px;
	height: 300px;
	/*overflow: hidden;*/
	margin: 20px auto 0;
}
.images {
	position: relative;
  	left: 0;
	width: 3000px;
	transition: all 0.5s linear 0s;
}
.images li {
	float: left;
	cursor: pointer;
	width: 500px;
	height: 300px;
}
.images img {
	width: 100%;
	height: 100%;
}
.dots {
	position: absolute;
	bottom: -2px;
	left: 50%;
    margin-left: -103px;
}
.dots ul {
	margin: 0 14px;
	height: 13px;
}
.bullet {
	display: inline-block;
	background: #fff;
	width: 13px;
	height: 13px;
	border-radius: 6px;
	-webkit-border-radius: 6px;
	margin-right: 23px;
	opacity: 0.8;
	-webkit-transition: opacity 0.8s linear;
	-moz-transition: opacity 0.8s linear;
	-ms-transition: opacity 0.8s linear;
	-o-transition: opacity 0.8s linear;
	transition: opacity 0.8s linear;
	cursor: pointer;	
}
.bullet.active {
	background-color: rgb(109, 215, 228);
	border-color: rgb(109, 215, 228);
	opacity: 1;
	cursor: pointer;
}
.lf-arrow {
	position: absolute;
	top: 50%;
	left: -16%;
	margin-top: -30px;
	width: 60px;
	height: 60px;
	cursor: pointer;
}
.lf-arrow:before {
	position: absolute;
	top: 0;
	left: 0;
	content: "";
	width: 0;
	height: 0;
	border: 30px solid transparent;
	border-left-width: 0;
	border-right-color: #ccc;
}
.lf-arrow:after {
	position: absolute;
	top: 0;
	left: 10px;
	content: "";
	width: 0;
	height: 0;
	border: 30px solid transparent;
	border-left-width: 0;
	border-right-color: rgb(109, 215, 228);
}

.rg-arrow {
	position: absolute;
	top: 50%;
	right: -16%;
	margin-top: -30px;
	width: 60px;
	height: 60px;
	cursor: pointer;
}
.rg-arrow:before {
	position: absolute;
	top: 0;
	right: 0;
	content: "";
	width: 0;
	height: 0;
	border: 30px solid transparent;
	border-right-width: 0;
	border-left-color: #ccc;
}
.rg-arrow:after {
	position: absolute;
	top: 0;
	right: 10px;
	content: "";
	width: 0;
	height: 0;
	border: 30px solid transparent;
	border-right-width: 0;
	border-left-color: rgb(109, 215, 228);
}
</style>