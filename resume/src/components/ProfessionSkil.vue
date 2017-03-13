<template>
	<div>
		<h1 class="title milky">专业技能</h1>
        <div class="progress content">
          <div class="contain">
              <div class="col">
                <ul class="skill">
					<li v-for="item in skills">
						<span class="expand" :class=item.clas></span>
                      	<em>{{item.text}}</em>
					</li>
                  </ul>
              </div>
          </div>
        </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				skills: [
					{
						text: 'Vue',
						clas: 'vue'
					},
					{
						text: 'HTML 5',
						clas: 'html5'
					},
					{
						text: 'CSS 3',
						clas: 'css3'
					},
					{
						text: 'JavaScript',
						clas: 'js'
					},
					{
						text: 'jQuery',
						clas: 'jquery'
					}
				]
			}
		}
	}
</script>
<style scoped>
	#section5.active .progress .content {
		width: 960px;
	}
	#section5.active .progress .contain{
		width: 278px;
		margin: 0 auto;
		font-size: 12px;
		line-height: 2em;
		padding: 30px 0 30px;
		overflow: visible;
	}
	#section5.active .col { 
		width: 280px; 
	}
	#section5.active .skill { 
		position: relative;
		padding-top: 50px;
	}

	#section5.active .skill li { 
		position: relative;
		margin-bottom:70px; 
		background: rgba(0,0,0,0.1); 
		height: 10px; 
		border-radius:3px; 
		border: 1px solid #ccc;
		border-color: #68b37a #ac85b4 #ac85b4 #68b37a;
	}

	#section5.active .skill li em { 
		position: relative; 
		top: -30px;
		font-size: 16px;
	    font-weight: 700;
	}

	#section5.active .expand { 
		position: absolute;
		top: 1px;
		left: 0;
	    margin: 0;
		height: 8px;
		background-color: #fff; 
		box-shadow: 0px 0px 10px 1px rgba(0,198,255,0.4);
		border-radius: 3px;
	}
	#section5.active .vue {
		width: 85%;  
		box-shadow: 0px 0px 10px 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275;
		-webkit-animation: vue 2s ease-out;
		   -moz-animation: vue 2s ease-out;   
		    -ms-animation: vue 2s ease-out;
		        animation: vue 2s ease-out;
	}
	#section5.active .html5 { 
		width: 83%; 
		box-shadow: 0px 0px 10px 1px #68B37A, 0 0 1px #68B37A, 0 0 1px #68B37A, 0 0 1px #68B37A, 0 0 1px #68B37A, 0 0 1px #68B37A, 0 0 1px #68B37A;
	    -webkit-animation: html5 2s ease-out;      
	       -moz-animation: html5 2s ease-out;       
	        -ms-animation: html5 2s ease-out;      
	            animation: html5 2s ease-out;      
	}
	#section5.active .css3 { 
		width: 90%;  
		box-shadow: 0px 0px 10px 1px #3B8CF8, 0 0 1px #3B8CF8, 0 0 1px #3B8CF8, 0 0 1px #3B8CF8, 0 0 1px #3B8CF8, 0 0 1px #3B8CF8, 0 0 1px #3B8CF8;
		-webkit-animation: css3 2s ease-out;        
		   -moz-animation: css3 2s ease-out;        
		    -ms-animation: css3 2s ease-out;        
		        animation: css3 2s ease-out;        
	}
	#section5.active .js { 
		width: 80%;  
		box-shadow: 0px 0px 10px 1px #AC85B4, 0 0 1px #AC85B4, 0 0 1px #AC85B4, 0 0 1px #AC85B4, 0 0 1px #AC85B4, 0 0 1px #AC85B4, 0 0 1px #AC85B4;
		-webkit-animation: js 2s ease-out;           
		   -moz-animation: js 2s ease-out;      
		    -ms-animation: js 2s ease-out;      
		        animation: js 2s ease-out;      
	}
	#section5.active .vue {
		width: 85%;  
		box-shadow: 0px 0px 10px 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275, 0 0 1px #FD4275;
		-webkit-animation: vue 2s ease-out;
		   -moz-animation: vue 2s ease-out;   
		    -ms-animation: vue 2s ease-out;
		        animation: vue 2s ease-out;
	}
	#section5.active .jquery { 
		width: 80%; 
		box-shadow: 0px 0px 10px 1px #8BC34A, 0 0 1px #8BC34A, 0 0 1px #8BC34A, 0 0 1px #8BC34A, 0 0 1px #8BC34A, 0 0 1px #8BC34A, 0 0 1px #8BC34A;
		-webkit-animation: jquery 2s ease-out; 
		   -moz-animation: jquery 2s ease-out;
		    -ms-animation: jquery 2s ease-out;
		        animation: jquery 2s ease-out;
	}

	@-moz-keyframes html5 { 
		0%  {
			width: 0px;
		} 
		100%{ 
			width: 83%;
		}  
	}
	@-moz-keyframes css3 { 
		0%  {
		    width: 0px;
		} 
		 100%{ 
		 	width: 90%;
		}  
		}
	@-moz-keyframes js { 
		0%  { 
			width: 0px;
		} 
		100%{ 
			width: 80%;
			} 
		}
	@-moz-keyframes vue { 
		0%  { 
			width: 0px;
		} 
		100% { 
			width: 85%;
		}  
	}
	@-moz-keyframes jquery { 
		0%  { 
			width: 0px;
		} 
		100%{
		 	width: 80%;
		} 
	}

	@-webkit-keyframes html5 { 
		0%  { 
			width: 0px;
		} 
		100%{ 
			width: 83%;
		}  
	}
	@-webkit-keyframes css3 { 
		0%  {
		    width: 0px;
		} 
		100%{ 
			width: 90%;
		}  
	}
	@-webkit-keyframes js { 
		0%  { 
			width: 0px;
		} 
		100% { 
			width: 80%;
		}  
	}
	@-webkit-keyframes vue { 
		0%  { 
			width: 0px;
		}
		 100%{ 
		 	width: 85%;
		}  
	}
	@-webkit-keyframes jquery { 
		0%  { 
			width: 0px;
		} 
		100%{ 
			width: 80%;
		}
	}
	@keyframes html5 { 
		0%  { 
			width: 0px;
		} 
		100%{ 
			width: 83%;
		}  
	}
	@keyframes css3 { 
		0%  {
		    width: 0px;
		} 
		100%{ 
			width: 90%;
		}  
	}
	@keyframes js { 
		0%  { 
			width: 0px;
		} 
		100% { 
			width: 80%;
		}  
	}
	@keyframes vue { 
		0%  { 
			width: 0px;
		}
		 100%{ 
		 	width: 85%;
		}  
	}
	@keyframes jquery { 
		0%  { 
			width: 0px;
		} 
		100%{ 
			width: 80%;
		}
	}
</style>