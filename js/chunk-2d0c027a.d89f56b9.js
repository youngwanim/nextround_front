(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c027a"],{4129:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"portfolio"}},[n("v-img",{staticClass:"white--text",attrs:{"min-height":t.minHeight,src:i("93a3"),gradient:"to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"}},[n("v-container",{staticClass:"px-4 py-12",attrs:{fluid:""}},[n("v-responsive",{staticClass:"d-flex align-center",attrs:{height:"100%",width:"100%"}},[n("div",{staticClass:"d-flex flex-wrap",class:t.$vuetify.breakpoint.smAndDown?"flex-column align-start":"align-center"},[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[n("v-chip-group",{attrs:{column:"",multiple:"","active-class":"primary--text"},on:{change:t.handleChipSelection},model:{value:t.chip_selection,callback:function(e){t.chip_selection=e},expression:"chip_selection"}},t._l(t.tags,(function(e){return n("v-chip",{key:e.key,on:{click:t.handleSingleChip}},[t._v(" "+t._s(e.text)+" ")])})),1),n("v-card",{staticClass:"d-flex flex-wrap pl-0 pr-0",attrs:{color:"transparent",flat:"",tile:""}},[n("v-card-text",[n("v-autocomplete",{attrs:{items:t.get_portfolio_list,color:"white","hide-no-data":"","hide-selected":"","item-text":"title","item-value":"description",label:"업체명 찾기",placeholder:"찾으시는 업체명을 입력해주세요","prepend-icon":"mdi-database-search","clear-icon":"",clearable:"","return-object":""},on:{change:t.handleAutocomplete},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),n("v-container",{attrs:{fluid:""}},[n("v-row",{directives:[{name:"masonry",rawName:"v-masonry",value:"containerID",expression:"`containerID`"}],attrs:{align:"center",justify:"center","transition-duration":"0.3s","item-selector":".item"}},t._l(t.posts,(function(e,i){return n("v-col",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:i,staticClass:"item",attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("base-business-card",{attrs:{image_url:e.image_url,width:200,title:e.title,content:e.description,target:"/portfolio/"+e.id},on:{loaded:function(e){return t.$redrawVueMasonry("containerID")}}})],1)})),1)],1)],1)],1)],1)],1)])],1)],1)],1)},o=[],s=(i("99af"),i("4de4"),i("caad"),i("baa5"),i("d81d"),i("fb6a"),i("45fc"),i("d3b7"),i("2532"),i("ddb0"),i("5530")),c=i("2f62"),a={name:"SectionPortfolio",provide:{theme:{isDark:!0}},data:function(){return{posts:[],showVideoModal:!1,tags:[],tags_selected:[],mandatory:!1,multiple:!0,selected:null,types:["cards","images"],descriptionLimit:60,entries:[],type:"cards",chip_selection:[0],isLoading:!1,model:null,search:null}},created:function(){var t=this;if(0===this.posts.length){var e={param:{},cb_res:function(e){t.posts=t.get_portfolio_list,t.tags=t.get_chip_list},cb_error:function(t){}};this.$store.dispatch("portfolio/get_portfolio_overall_list",e)}},mounted:function(){var t=this;this.$nextTick((function(){t.$redrawVueMasonry("containerID")}))},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("portfolio",["get_portfolio_list","get_chip_list"])),{},{minHeight:function(){var t=this.$vuetify.breakpoint.mdAndUp?"100vh":"50vh";return"calc(".concat(t," - ").concat(this.$vuetify.application.top,"px)")},items:function(){var t=this;return this.entries.map((function(e){var i=e.Description.length>t.descriptionLimit?e.Description.slice(0,t.descriptionLimit)+"...":e.Description;return Object.assign({},e,{Description:i})}))}}),watch:{search:function(t){var e=this;this.items.length>0||this.isLoading||(this.isLoading=!0,fetch("https://api.publicapis.org/entries").then((function(t){return t.json()})).then((function(t){var i=t.count,n=t.entries;e.count=i,e.entries=n})).catch((function(t){console.log(t)})).finally((function(){return e.isLoading=!1})))}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])("portfolio",["get_portfolio_overall_list"])),{},{triggerMason:function(){this.$redrawVueMasonry("containerID"),console.log("redraw Masonry")},getPosts:function(){for(var t=0;t<16;t++)this.posts.push({src:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",title:"this is it",content:"beat it"})},selectPost:function(t){},handleChipSelection:function(){var t=this;console.log(this.chip_selection),0===this.chip_selection[this.chip_selection.length-1]?this.chip_selection=[0]:this.chip_selection.length>1&&this.chip_selection.some((function(t){return 0===t}))?this.chip_selection.shift():0===this.chip_selection.length&&this.chip_selection.push(0),1===this.chip_selection.length&&0===this.chip_selection[0]?this.posts=this.get_portfolio_list:this.posts=this.get_portfolio_list.filter((function(e){return e.business_category.some((function(e){return t.chip_selection.includes(e)}))}))},handleSingleChip:function(t){console.log("single chip model: ",t),console.log("last element: ",this.chip_selection[this.chip_selection.length-1])},handleAutocomplete:function(){var t=this;console.log(this.model),this.posts=this.get_portfolio_list.filter((function(e){return e.id===t.model.id}))},handleScroll:function(){var t=window.scrollY,e=window.document.body.scrollHeight-window.document.documentElement.clientHeight;t>=e-200&&this.getPosts()},smartTrim:function(t,e){var i=t.substr(0,e);return i.substr(0,Math.min(i.length,i.lastIndexOf(" ")))}})},l=a,r=i("2877"),h=i("6544"),p=i.n(h),d=i("c6a6"),u=i("b0af"),f=i("99d9"),m=i("cc20"),g=i("ef9a"),_=i("62ad"),v=i("a523"),b=i("adda"),w=i("6b53"),y=i("0fd9"),x=Object(r["a"])(l,n,o,!1,null,null,null);e["default"]=x.exports;p()(x,{VAutocomplete:d["a"],VCard:u["a"],VCardText:f["b"],VChip:m["a"],VChipGroup:g["a"],VCol:_["a"],VContainer:v["a"],VImg:b["a"],VResponsive:w["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=chunk-2d0c027a.d89f56b9.js.map