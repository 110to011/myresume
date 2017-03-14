<template>
	<div>
		<h1 class="title milky">基本信息</h1>
		<section class="content st-panel active">
			<div class="portrait">
				<a href="javascript:;">
					<div class="spiner"></div>
					<img src="http://7te96d.com1.z0.glb.clouddn.com/me.jpg" alt="王晓婷" title="Xiaoting Wang" class="pic">
					<h3>王晓婷</h3>
				</a>
			</div>
			<section class="demo">
				<ul class="menu unstyled">
					<li v-for="item in infoArr">
						<a href="javascript:;">
							{{item.ask}}:  {{item.res}}
						</a>
					</li>
					<div class="ribbon_wrap">
						<div class="ribbon_rail">
							<div></div>
						</div>
					</div>
				</ul>
			</section>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				infoArr: [
					{
						'ask': '性别',
						'res': '女'
					},
					{
						'ask': '民族',
						'res': '汉族'
					},
					{
						'ask': '籍贯',
						'res': '辽宁省铁岭市'
					},
					{
						'ask': '邮箱',
						'res': '15998234256@163.com'
					},
					{
						'ask': '电话',
						'res': '18500084023'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.demo {
		position: absolute;
		top: 56px;
		left: 50%;
		margin-left: -150px;
		width: 300px;
		text-align: left;
	}
	.menu {
		position: relative;
	    width: 100%;
	    /*line-height: 35px;*/
	    border-radius: 5px;
	    border: 1px solid rgba(0, 188, 212, 0.23);
	}
	.menu a {
		display: block;
		color: #484848;
		text-decoration: none;
		text-shadow: 0 1px 0 #e0e0e0;
		font-size: 1.2em;
		font-weight: 700;
	}
	.menu li:hover a {
		color: #980202;
		text-shadow: 0 1px 0 rgba(0,0,0,.1);
	}
	.menu li:hover a{
		color: #fff;
	}
	.menu li {
		position: relative;
	    padding-left: 20px;
	    line-height: 50px;
	    height: 50px;
	    z-index: 2;
	    border-bottom: 1px solid rgba(192, 192, 192, 0.65);
	}
	.ribbon_wrap {
		position: absolute;
		left: -11px;
	    top: 0px;
		z-index: 1;
		transition: top 0.4s;
	}
	.ribbon_rail {
		position: relative;
		width: 283px;
	    height: 50px;
		padding: 0 20px;
		color: #e3e3e3;
		text-shadow: 0 1px 0 #6b6b6b;
		box-shadow: 0 2px 5px rgba(0,0,0,.2);
		background: -webkit-linear-gradient(top,rgba(255, 192, 203, 0.670588), rgba(0, 188, 212, 0.36));
		background: -moz-linear-gradient(top,rgba(255, 192, 203, 0.670588), rgba(0, 188, 212, 0.36));
		background: -ms-linear-gradient(top,rgba(255, 192, 203, 0.670588), rgba(0, 188, 212, 0.36));
		background: linear-gradient(top,rgba(255, 192, 203, 0.670588), rgba(0, 188, 212, 0.36));
	}
	.ribbon_rail:before,
		.ribbon_rail:after {
		position:absolute;
		content:"";
		top:100%;
		width:0;
		height:0;
		border: 5px solid transparent;
	}
	.ribbon_rail:before {
		left:0;
		border-color: rgba(0, 188, 212, 0.36) rgba(0, 188, 212, 0.36) transparent transparent;
	}
	.ribbon_rail:after { 
		right:0;
		border-color: rgba(0, 188, 212, 0.36) transparent transparent rgba(0, 188, 212, 0.36);
	}
	.ribbon_rail > div {
		width: 100%;
	}
	.ribbon_rail > div:before,
	.ribbon_rail > div:after {
		content:"";
		position: absolute;
		top:10px;
		z-index: -1;
		width: 0;
		height:0;
		border-width: 14px;
		border-style: solid;
		border-color: rgba(255, 192, 203, 0.670588) rgba(255, 192, 203, 0.670588) rgba(0, 188, 212, 0.36) rgba(255, 192, 203, 0.670588);
	}
	.ribbon_rail > div:before {
		right: 100%;
		border-left-color: transparent;
		margin-right: -10px;
	}
	.ribbon_rail > div:after {
		left: 100%;
		border-right-color: transparent;
		margin-left: -10px;
	}
	.menu li:nth-child(1):hover ~ .ribbon_wrap{ 
		top: -1px; 
	}
	.menu li:nth-child(2):hover ~ .ribbon_wrap{  
		top: 48px;
	}
	.menu li:nth-child(3):hover ~ .ribbon_wrap{  
		top: 99px; 
	}
	.menu li:nth-child(4):hover ~ .ribbon_wrap{
		top: 151px;
	}
	.menu li:nth-child(5):hover ~ .ribbon_wrap{
		top: 202px;
	}
</style>
