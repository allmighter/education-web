<template>
<view class="content">
	<view class="box" :style='{"padding":"48rpx","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 4%","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"92%","borderStyle":"solid","height":"100%"}'>
		<view class="logo" :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="true">
			<image :style='{"padding":"0","boxShadow":"0 0 0px #59f43e","margin":"0","borderColor":"#ccc","borderRadius":"40rpx","borderWidth":"2rpx","width":"160rpx","borderStyle":"solid","url":"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg","isShow":true,"height":"160rpx"}' src='http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg' mode="aspectFill"></image>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.xuehao"  type="text"  class="uni-input" name="" placeholder="学号" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
		</view>
        <view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
            <input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
        </view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<picker  @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
				<view :style='{"padding":"0 20rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'  class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.banji"  type="text"  class="uni-input" name="" placeholder="班级" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.gonghao"  type="text"  class="uni-input" name="" placeholder="工号" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
		</view>
        <view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
            <input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
        </view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.jiaoshixingming"  type="text"  class="uni-input" name="" placeholder="教师姓名" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<picker  @change="jiaoshixingbieChange" :value="jiaoshixingbieIndex" :range="jiaoshixingbieOptions">
				<view :style='{"padding":"0 20rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'  class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.youxiang"  type="text"  class="uni-input" name="" placeholder="邮箱" />
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiaoshi'" class="uni-form-item uni-column">
			<input :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 80rpx 80rpx 0","borderWidth":"4rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.dianhua"  type="text"  class="uni-input" name="" placeholder="电话" />
		</view>
		<button class="btn-submit" @tap="register" type="primary" :style='{"padding":"0","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 225, 109, 1)","borderRadius":"80rpx","color":"#333","borderWidth":"0","width":"100%","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>注册</button>
	</view>
</view>
</template>

<style>
	.btn-submit {
		height: auto !important;
		line-height: 88rpx;
	}
</style>
<script>
	export default {
		data() {
			return {
                                xueshengxingbieOptions: [],
                                xueshengxingbieIndex: 0,
                                jiaoshixingbieOptions: [],
                                jiaoshixingbieIndex: 0,
				ruleForm: {
				},
				emailcode: "",
				tableName:""
			}
		},
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
	    		this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='xuesheng'){
                this.xueshengxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.xueshengxingbieOptions[0]
			}
                        // 自定义下拉框值
			if(this.tableName=='jiaoshi'){
                this.jiaoshixingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.jiaoshixingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

                        // 下拉变化
                        xueshengxingbieChange(e) {
                                this.xueshengxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.xueshengxingbieOptions[this.xueshengxingbieIndex]
                        },
                        // 下拉变化
                        jiaoshixingbieChange(e) {
                                this.jiaoshixingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]
                        },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
					this.$utils.msg(`学号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`xuesheng` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.banji) && `xuesheng` == this.tableName){
					this.$utils.msg(`班级不能为空`);
					return
				}
				if((!this.ruleForm.shouji) && `xuesheng` == this.tableName){
					this.$utils.msg(`手机不能为空`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.gonghao) && `jiaoshi` == this.tableName){
					this.$utils.msg(`工号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`jiaoshi` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$utils.msg(`教师姓名不能为空`);
					return
				}
				if(`jiaoshi` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				if(`jiaoshi` == this.tableName && this.ruleForm.dianhua&&(!this.$validate.isMobile(this.ruleForm.dianhua))){
					this.$utils.msg(`电话应输入手机格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm, this.emailcode);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	.content {
		height: calc(100vh - 44px);
		overflow: auto;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220215/34c47727867041a19598ad58ce00997b.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
.picker-select-input {
	line-height: 88rpx;
}

</style>
