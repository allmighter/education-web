(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exampaperlist-exam"],{4884:function(e,t,n){"use strict";n.r(t);var i=n("acf1"),a=n("fe12");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("fcf8");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0cbce36e",null,!1,i["a"],r);t["default"]=o.exports},"4ed3":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6"),n("55dd"),n("96cf");var a=i(n("3b8d")),s={data:function(){return{item:{},paper:{},isSubmit:!1,answer:"",currentItem:1,score:0,inter:null,list:[],user:{},count:0}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i,s,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.score=0,n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:return i=e.sent,this.user=i.data,e.next=8,this.$api.info("exampaper",t.id);case 8:return i=e.sent,this.paper=i.data,e.next=12,this.$api.list("examquestion",{page:1,limit:999,sort:"sequence",paperid:t.id});case 12:for(i=e.sent,this.list=i.data.list,this.count=60*this.paper.time,this.count>0&&(s=this,this.inter=setInterval((function(){s.count=s.count-1,s.count<0&&(clearInterval(s.inter),uni.showModal({title:"答题结束",content:"本次测试成绩："+s.score,showCancel:!1,success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.confirm&&uni.navigateBack({delta:1});case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}))}),1e3)),r=0;r<this.list.length;r++){for(c=JSON.parse(this.list[r].options),o=0;o<c.length;o++)c[o].checked=!1;this.list[r].options=c}console.log(this.list),this.item=this.list[0];case 19:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),destroyed:function(){clearInterval(this.inter)},computed:{SecondToDate:function(){var e=this.count;return null!=e&&""!=e&&(e=e>60&&e<3600?parseInt(e/60)+"分钟"+parseInt(60*(parseFloat(e/60)-parseInt(e/60)))+"秒":e>=3600&&e<86400?parseInt(e/3600)+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":e>=86400?parseInt(e/3600/24)+"天"+parseInt(24*(parseFloat(e/3600/24)-parseInt(e/3600/24)))+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":parseInt(e)+"秒"),e}},methods:{leaveTap:function(){var e=this;uni.showModal({title:"提示",content:"确定离开测试?未答题目按0分计算",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.confirm&&e.$utils.msgBack("本次测试成绩："+e.score);case 1:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})},itemCheckTap:function(e,t){if(0==this.item.type||2==this.item.type)for(var n=0;n<this.item.options.length;n++)this.item.options[n].checked=!1;if(this.item.options[t].checked=!e,1==this.item.type){for(var i=[],a=0;a<this.item.options.length;a++)this.item.options[a].checked&&i.push(this.item.options[a].code);this.answer=i.sort().join(",")}1!=this.item.type&&(this.answer=this.item.options[t].code),console.log(e,t,this.answer)},submitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.answer){e.next=3;break}return this.$utils.msg("请作答"),e.abrupt("return");case 3:return t=0,this.answer==this.item.answer&&(this.score=Number(this.score)+Number(this.item.score),t=this.item.score),n={userid:this.user.id,username:this.user.xingming,paperid:this.paper.id,papername:this.paper.name,questionid:this.item.id,questionname:this.item.questionname,options:JSON.stringify(this.item.options),score:this.item.score,answer:this.item.answer,analysis:this.item.analysis,myscore:t,myanswer:this.answer},e.next=8,this.$api.add("examrecord",n);case 8:this.isSubmit=!0,i=this,this.currentItem==this.list.length&&uni.showModal({title:"答题结束",content:"本次测试成绩："+i.score,showCancel:!1,success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.confirm&&uni.navigateBack({delta:1});case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),nextTap:function(){this.isSubmit=!1,this.currentItem=this.currentItem+1,this.item=this.list[this.currentItem-1],this.answer=""}}};t.default=s},6219:function(e,t,n){var i=n("8779");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("f0d2ff78",i,!0,{sourceMap:!1,shadowMode:!1})},8779:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header-container[data-v-0cbce36e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:%?1?% solid #eee;border-top:%?1?% solid #eee;padding:%?10?%}.header-container .left-container[data-v-0cbce36e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?10?%}.header-container .left-container .icon[data-v-0cbce36e]{margin-right:%?10?%;width:%?40?%;height:%?40?%}.header-container .center-container[data-v-0cbce36e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.header-container .right-container[data-v-0cbce36e]{margin:%?10?%}.exam-container[data-v-0cbce36e]{background:#fff;margin:%?30?%;border-radius:%?20?%;padding:%?20?%}.exam-container .title-container[data-v-0cbce36e]{padding:%?20?%}.exam-container .title-container .type[data-v-0cbce36e]{background:#eee;padding:%?10?%;border-radius:%?10?%}.exam-container .title-container .title[data-v-0cbce36e]{margin-left:%?20?%}.exam-container .answer-item[data-v-0cbce36e]{margin:%?20?%}.exam-container .answer-item .text[data-v-0cbce36e]{margin-left:%?20?%}.exam-container .tiankong-container[data-v-0cbce36e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?%}.exam-container .tiankong-container .answer[data-v-0cbce36e]{border:%?1?% solid #eee;height:%?60?%;margin:0 %?20?%}.exam-container .btn-submit[data-v-0cbce36e]{height:%?60?%;font-size:%?30?%;line-height:%?60?%;margin-top:%?60?%;border-radius:%?50?%}.exam-container .btn-next[data-v-0cbce36e]{height:%?60?%;font-size:%?30?%;line-height:%?60?%;margin-top:%?60?%;border-radius:%?50?%}.tip-container[data-v-0cbce36e]{margin-top:%?50?%;border-top:%?1?% solid #eee;padding:%?20?%}.tip-container .par[data-v-0cbce36e]{margin-bottom:%?20?%}',""]),e.exports=t},acf1:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"header-container"},[n("v-uni-view",{staticClass:"left-container",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leaveTap.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/center/l5.png",mode:""}}),n("v-uni-text",[e._v("交卷")])],1),n("v-uni-view",{staticClass:"center-container"},[e._v("倒计时："+e._s(e.SecondToDate))]),n("v-uni-view",{staticClass:"right-container"},[e._v("题目： "+e._s(e.currentItem)+"/"+e._s(e.list.length))])],1),n("v-uni-view",{staticClass:"exam-container"},[n("v-uni-view",{staticClass:"title-container"},[0==e.item.type?n("v-uni-text",{staticClass:"type"},[e._v("单选题")]):e._e(),1==e.item.type?n("v-uni-text",{staticClass:"type"},[e._v("多选题")]):e._e(),2==e.item.type?n("v-uni-text",{staticClass:"type"},[e._v("判断题")]):e._e(),3==e.item.type?n("v-uni-text",{staticClass:"type"},[e._v("填空题")]):e._e(),n("v-uni-text",{staticClass:"title"},[e._v(e._s(e.item.questionname))])],1),n("v-uni-view",{staticClass:"answer-container"},[3==e.item.type?n("v-uni-view",{staticClass:"tiankong-container"},[n("v-uni-text",[e._v("填写答案：")]),n("v-uni-input",{staticClass:"answer",attrs:{type:"text",value:""},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}})],1):e._e(),e._l(e.item.options,(function(t,i){return 0==e.item.type||2==e.item.type?n("v-uni-view",{key:i,staticClass:"answer-item"},[n("v-uni-checkbox",{attrs:{value:e.item.index,checked:t.checked},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.itemCheckTap(t.checked,i)}}}),n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.text))])],1):e._e()})),e._l(e.item.options,(function(t,i){return 1==e.item.type?n("v-uni-view",{key:i,staticClass:"answer-item"},[n("v-uni-checkbox",{attrs:{value:e.item.index,checked:t.checked},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.itemCheckTap(t.checked,i)}}}),n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.text))])],1):e._e()})),e.isSubmit?e._e():n("v-uni-button",{staticClass:"btn-submit",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitTap.apply(void 0,arguments)}}},[e._v("提交答案")]),e.isSubmit&&e.currentItem<=e.list.length?n("v-uni-button",{staticClass:"btn-next",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.nextTap.apply(void 0,arguments)}}},[e._v("下一题")]):e._e()],2),e.isSubmit&&e.currentItem<=e.list.length?n("v-uni-view",{staticClass:"tip-container"},[n("v-uni-view",{staticClass:"par"},[e._v("答题结果："),e.item.answer==e.answer?n("v-uni-text",{staticClass:"text-blue"},[e._v("正确")]):e._e(),e.item.answer!=e.answer?n("v-uni-text",{staticClass:"text-red"},[e._v("错误")]):e._e()],1),n("v-uni-view",{staticClass:"par"},[e._v("本题答案："+e._s(e.item.answer))]),n("v-uni-view",{staticClass:"par"},[e._v("您的答案是："+e._s(e.answer))]),n("v-uni-view",{staticClass:"par"},[e._v("题目分析："+e._s(e.item.analysis))])],1):e._e()],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},fcf8:function(e,t,n){"use strict";var i=n("6219"),a=n.n(i);a.a},fe12:function(e,t,n){"use strict";n.r(t);var i=n("4ed3"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a}}]);