(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-608f1a90"],{"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["g"])("spacer","div","v-spacer")},c760:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"portfolio"}},[a("v-img",{staticClass:"white--text",attrs:{"min-height":t.minHeight,src:i("93a3"),gradient:"to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"}},[a("v-container",{staticClass:"fill-height px-4 py-12",attrs:{fluid:""}},[a("v-responsive",{staticClass:"d-flex align-center",attrs:{height:"100%",width:"100%"}},[a("div",{staticClass:"d-flex flex-wrap",class:t.$vuetify.breakpoint.smAndDown?"flex-column align-start":"align-center"},[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-chip-group",{attrs:{column:"",multiple:"","active-class":"primary--text"}},t._l(t.tags,(function(e){return a("v-chip",{key:e},[t._v(" "+t._s(e)+" ")])})),1),a("v-card",{staticClass:"d-flex flex-wrap pl-0 pr-0",attrs:{color:"transparent",flat:"",tile:""}},[a("v-card-text",[a("v-autocomplete",{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"API",label:"업체명 찾기",placeholder:"찾으시는 업체명을 입력해주세요","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),t._l(20,(function(e){return a("v-card",{key:e,staticClass:"pa-0 ma-2",attrs:{"max-width":"250",outlined:"",tile:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v("업체명")])],1)],1),a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/mountain.jpg",height:"194"}}),a("v-card-text",{staticClass:"pl-2 pr-2 pt-1 pb-1"},[t._v(" 상품 혹은 서비스에 대한 간단한 소개: ")]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"blue accent-4"}},[t._v(" > Detail ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)}))],2)],1)],1)],1)])],1)],1)],1)},n=[],s=(i("99af"),i("d81d"),i("fb6a"),i("b64b"),i("d3b7"),i("ddb0"),{name:"SectionPortfolio",provide:{theme:{isDark:!0}},data:function(){return{showVideoModal:!1,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"],mandatory:!1,multiple:!0,selected:null,types:["cards","images"],descriptionLimit:60,entries:[],type:"cards",isLoading:!1,model:null,search:null}},computed:{minHeight:function(){var t=this.$vuetify.breakpoint.mdAndUp?"100vh":"50vh";return"calc(".concat(t," - ").concat(this.$vuetify.application.top,"px)")},fields:function(){var t=this;return this.model?Object.keys(this.model).map((function(e){return{key:e,value:t.model[e]||"n/a"}})):[]},items:function(){var t=this;return this.entries.map((function(e){var i=e.Description.length>t.descriptionLimit?e.Description.slice(0,t.descriptionLimit)+"...":e.Description;return Object.assign({},e,{Description:i})}))}},watch:{search:function(t){var e=this;this.items.length>0||this.isLoading||(this.isLoading=!0,fetch("https://api.publicapis.org/entries").then((function(t){return t.json()})).then((function(t){var i=t.count,a=t.entries;e.count=i,e.entries=a})).catch((function(t){console.log(t)})).finally((function(){return e.isLoading=!1})))}}}),r=s,c=i("2877"),o=i("6544"),l=i.n(o),d=i("c6a6"),p=i("8336"),u=i("b0af"),h=i("99d9"),m=i("cc20"),v=i("ef9a"),f=i("62ad"),g=i("a523"),b=i("132d"),V=i("adda"),w=i("da13"),x=i("5d23"),C=i("6b53"),y=i("0fd9"),k=i("2fa4"),L=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=L.exports;l()(L,{VAutocomplete:d["a"],VBtn:p["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VChip:m["a"],VChipGroup:v["a"],VCol:f["a"],VContainer:g["a"],VIcon:b["a"],VImg:V["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VResponsive:C["a"],VRow:y["a"],VSpacer:k["a"]})}}]);
//# sourceMappingURL=chunk-608f1a90.97edcf0f.js.map