<template>
    <div class="container">
		<h1 class="title milky">求职意向</h1>
		<div class="content">
			<div class="wrap effect">
	           <p class="txt">我不去想是否能够成功<br>既然选择了远方<br>便只顾风雨兼程 </p>
	        </div>
	        <div class="caret-wrapper">
	          <div class="caret"></div>
	        </div>
	        <a href="javascript:;" class="button">前端开发工程师</a>
	        <div class="wrap effect circle"></div>
	        <div class="wrap effect circle1"></div>
	        <div class="wrap effect circle2"></div>
	        <div class="starPic">
	          <p class="txt">任何事情都应该去尝试一下，因为你无法知道，什么样的事或者什么样的人将会改变你的一生。</p>
	          <img src="../../static/images/stars.png" class="stars">
	        </div>
		</div>
    	<!-- <canvas id="canvas"></canvas> -->
    </div>
</template>
<script>
	export default {
		// mounted() {
		// 	genFlower('canvas');
		// }
	}
</script>
<style scoped>
	.content {
		height: 100%;
	}
	#canvas{
		cursor:crosshair;
		overflow:hidden;
	}
	.container {
		position: relative;
		height: 100%;
	}
	.wrap {
		margin: 40px auto;
		width: 200px;
		height: 200px;
		background: #FFF;
		border: 10px solid rgb(249,205,173);
		border-radius: 50%;
	}
	.wrap .txt {
		margin: 26px auto 0;
		width: 111px;
		font-size: 20px;
		line-height: 1.2;
		color: #71C7C6;
		text-align: center;
		font-weight: 700;
	}
	.wrap.effect.circle {
		position: absolute;
		top: 35%;
    	left: 14%;
		width: 100px;
		height: 100px;
	}
	.wrap.effect.circle1 {
		position: absolute;
		top: 35%;
    	left: 14%;
		width: 100px;
		height: 100px;
		-webkit-animation: starsAnimation 4.0s infinite ease-in-out;
	       -moz-animation: starsAnimation 4.0s infinite ease-in-out;
	         -o-animation: starsAnimation 4.0s infinite ease-in-out;
	            animation: starsAnimation 4.0s infinite ease-in-out;
	}
	.wrap.effect.circle2 {
		position: absolute;
		top: 53%;
		left: 23%;
		width: 80px;
		height: 80px;
		-webkit-animation: starsAnimation 4.0s infinite ease-in-out;
	       -moz-animation: starsAnimation 4.0s infinite ease-in-out;
	         -o-animation: starsAnimation 4.0s infinite ease-in-out;
	            animation: starsAnimation 4.0s infinite ease-in-out;
	}
	.wrap.effect {
		position: absolute;
		left: 30px;
		-webkit-box-shadow: 0 0 4px rgba(255, 255, 255, 0.3) , 0 0 40px rgba(0, 0, 0, 0.1) inset;
		-moz-box-shadow: 0 0 4px rgba(255, 255, 255, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
		box-shadow: 0 0 4px rgba(255, 255, 255, 0.3), 0px 0 40px rgba(0, 0, 0, 0.1) inset;
	}
	.starPic {
		position: absolute;
		top: 40px;
		right: 80px;
		width: 300px;
		height: 200px;
	}
	.starPic .txt {
		font-size: 20px;
		line-height: 1.5;
	}
	.starPic .stars {
		-webkit-animation: starsAnimation 4.0s infinite ease-in-out;
	       -moz-animation: starsAnimation 4.0s infinite ease-in-out;
	         -o-animation: starsAnimation 4.0s infinite ease-in-out;
	            animation: starsAnimation 4.0s infinite ease-in-out;
	}
	.container .button {
		position: absolute;
		top: 47%;
		left: 50%;
		width: 248px;
		margin-left: -146px;
		color: #fff;
		text-decoration: none;
		/*border: 2px solid rgb(249,205,173);*/
		border-radius: 10px;
		padding: 20px;
		font-size: 2em;
		text-shadow: rgba(255,255,255,.5) 0 -1px 0, rgba(0,0,0,0.18) 0 0.18em 0.15em;
		box-shadow: 0 -2px 0 rgba(0,0,0,0.2) inset !important;
	    -moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.2) inset;
		background: rgb(252,157,154) url(../../static/images/overlay-button.png) repeat-x 0 0; 
	    -webkit-animation: orangePulse 3s infinite; 
	       -moz-animation: orangePulse 3s infinite; 
	            animation: orangePulse 3s infinite; 
		border-bottom: 1px solid rgba(0,0,0,0.25); 
		cursor: pointer; 
	}
	.button:hover {
    	background: rgb(249,205,173);
		color: #fff; 
	}
	.button:active { 
		-webkit-transform: translateY(1px);
		 -moz-transform: translateY(1px);
	}
	
	@-webkit-keyframes orangePulse {
	  from { 
	    background-color: pink;
	   -webkit-box-shadow: 0 0 9px #333;
	           box-shadow: 0 0 9px #333;
	  }
	  50% { 
	    background-color: #ff5c00; 
	    -webkit-box-shadow: 0 0 18px #ff5c00; 
	            box-shadow: 0 0 18px #ff5c00; 
	  }
	  to { 
	    background-color: pink; 
	    -webkit-box-shadow: 0 0 9px #333; 
	            box-shadow: 0 0 9px #333; 
	  }
	}

	@keyframes orangePulse {
	  from { background-color: pink;
	   -webkit-box-shadow: 0 0 9px #333; 
	           box-shadow: 0 0 9px #333; 
	 }
	  50% {
	   background-color: pink; 
	    -webkit-box-shadow: 0 0 18px pink; 
	            box-shadow: 0 0 18px pink; 
	  }
	  to { 
	    background-color: pink; 
	    -webkit-box-shadow: 0 0 9px #333; 
	            box-shadow: 0 0 9px #333; 
	  }
	}
	/*.title {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 11;
	}*/
</style>