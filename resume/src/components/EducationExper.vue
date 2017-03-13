<template>
	<div class="sec-wrapper">
		<h1 class="title milky">教育经历</h1>
		<div class="content">
			<div class="container">
				<ul class="left-ul">
					<li v-for="item in arr1">{{item}}</li>
				</ul>
				<ul>
					<li v-for="item in arr2">{{item}}</li>
				</ul>
				<span class="line line_top"></span>
				<span class="line line_right"></span>
				<span class="line line_bottom"></span>
				<span class="line line_left"></span>
			</div>
			<ul class="bg-bubbles">
				<li v-for="n in 10"></li>
			</ul>
			
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				arr1: ['2010-09至2014-06','就读于沈阳师范大学','软件学院','网络工程专业'],
				arr2: ['2014-09至2016-07','就读于哈尔滨工业大学(保送)','软件学院','软件工程专业']
			}
		}
	}
</script>
<style scoped>
	.sec-wrapper {
		background: #50a3a2;
	    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
	    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
	    opacity: 0.8;
	    position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
	}
	.container {
		position: relative;
		display: flex;
	    max-width: 600px;
	    height: 246px;
	    margin: 50px auto 0;
	    text-align: left;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background-color: rgba(255, 255, 255, 0.2);
		-webkit-transition:2s;
		-o-transition:2s;
		transition:2s;
	}
	.left-ul {
		border-right: 10px solid #ccc; 
	}
	.container ul {
		flex: 1;
		font-size: 20px;
    	line-height: 2.5em;
		padding: 20px 0 20px 20px;
		color: #5432b2;
	}
	.bg-bubbles {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 1;
	}
	.bg-bubbles li:nth-child(1) {
	    left: 10%;
	}
	.bg-bubbles li:nth-child(2) {
	  left: 20%;
	  width: 80px;
	  height: 80px;
	  -webkit-animation-delay: 2s;
	          animation-delay: 2s;
	  -webkit-animation-duration: 17s;
	          animation-duration: 17s;
	}
	.bg-bubbles li:nth-child(3) {
	  left: 25%;
	  -webkit-animation-delay: 4s;
	          animation-delay: 4s;
	}
	.bg-bubbles li:nth-child(4) {
	  left: 40%;
	  width: 60px;
	  height: 60px;
	  -webkit-animation-duration: 22s;
	          animation-duration: 22s;
	  background-color: rgba(255, 255, 255, 0.25);
	}
	.bg-bubbles li:nth-child(5) {
	  left: 70%;
	}
	.bg-bubbles li:nth-child(6) {
	  left: 80%;
	  width: 120px;
	  height: 120px;
	  -webkit-animation-delay: 3s;
	          animation-delay: 3s;
	  background-color: rgba(255, 255, 255, 0.2);
	}
	.bg-bubbles li:nth-child(7) {
	  left: 32%;
	  width: 160px;
	  height: 160px;
	  -webkit-animation-delay: 7s;
	          animation-delay: 7s;
	}
	.bg-bubbles li:nth-child(8) {
	  left: 55%;
	  width: 20px;
	  height: 20px;
	  -webkit-animation-delay: 15s;
	          animation-delay: 15s;
	  -webkit-animation-duration: 40s;
	          animation-duration: 40s;
	}
	.bg-bubbles li:nth-child(9) {
	  left: 25%;
	  width: 10px;
	  height: 10px;
	  -webkit-animation-delay: 2s;
	          animation-delay: 2s;
	  -webkit-animation-duration: 40s;
	          animation-duration: 40s;
	  background-color: rgba(255, 255, 255, 0.3);
	}
	.bg-bubbles li:nth-child(10) {
	  left: 90%;
	  width: 160px;
	  height: 160px;
	  -webkit-animation-delay: 11s;
	          animation-delay: 11s;
	}
	.bg-bubbles li {
	    position: absolute;
	    list-style: none;
	    display: block;
	    width: 40px;
	    height: 40px;
	    background-color: rgba(255, 255, 255, 0.15);
	    bottom: -160px;
	    -webkit-animation: square 25s infinite;
	    animation: square 25s infinite;
	    -webkit-transition-timing-function: linear;
	    transition-timing-function: linear;
	}
	@-webkit-keyframes square {
	  0% {
	    -webkit-transform: translateY(0);
	            transform: translateY(0);
	  }
	  100% {
	    -webkit-transform: translateY(-700px) rotate(600deg);
	            transform: translateY(-700px) rotate(600deg);
	  }
	}
	@keyframes square {
	  0% {
	    -webkit-transform: translateY(0);
	            transform: translateY(0);
	  }
	  100% {
	    -webkit-transform: translateY(-700px) rotate(600deg);
	            transform: translateY(-700px) rotate(600deg);
	  }
	}
	.container .line{
		display:inline-block;
		background-color:#FFF;
		position:absolute;
	}
	.container .line_top{
		height:2px;
		width:0;
		left:-50%;
		top:-2px;
		animation:linetop 1s ease infinite;
	}
	.container .line_right{
		height:0;
		width:2px;
		top:-50%;
		right:-2px;
		animation:lineright 1s ease infinite;
	}
	.container .line_bottom{
		width:2px;
		height:0;
		bottom:-50%;
		left:-2px;
		animation:linebottom 1s ease infinite;
	}
	.container .line_left{
		height:2px;
		width:0;right:-50%;
		bottom:-2px;
		animation:lineleft 1s ease infinite;
	}
	@keyframes linetop {
		from {
			height:2px;
			width:0;
			left:-50%;
			top:-2px;
		}
		to{
			width:100%;
			left:-2px;
		}
	}
	@keyframes lineright {
		from {
			height:0;
			width:2px;
			top:-50%;
			right:-2px;
		}
		to {
			height:100%;
			top:-2px;
		}
	}
	@keyframes linebottom {
		from {
			width:2px;
			height:0;
			bottom:-50%;
			left:-2px;
		}
		to {
			height:100%;
			bottom:-2px;	
		}
	}
	@keyframes lineleft {
		from {
			height:2px;
			width:0;
			right:-50%;
			bottom:-2px;
		}
		to {
			width:100%;
			right:-2px;
		}
	}
</style>