webpackJsonp([1],{"89Vc":function(e,t){},DDnD:function(e,t){},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},i6Hv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("pFYg"),s=n.n(i),a=n("Dd8w"),r=n.n(a),c=n("fZjL"),o=n.n(c),l={name:"import-config",props:{serviceName:{type:String,required:!0},visible:{type:Boolean,default:!1}},data:function(){return{type:"service",fileName:"",content:"",description:"",feature:{},instances:{},selectedInstance:{},configTree:[],defaultExpanded:[]}},methods:{handleReader:function(e){var t=this;if(e){this.fileName=e.name;var n=new FileReader;n.onload=function(){t.configParse(n.result)},n.readAsText(e)}return!1},handleTreeClick:function(e,t){t||e.name!==this.selectedInstance.id||(this.selectedInstance={}),t&&!e.children&&(this.$refs.node.setCheckedNodes([]),this.$refs.node.setCheckedNodes([e]),this.selectedInstance=this.instances[e.name])},configParse:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var n=JSON.parse(t);if(!["service","cluster"].includes(n.type))throw new Error(this.$t("config.not_a_valid_config_file"));this.configTree=[],this.content=t,this.feature=n.feature,this.description=n.description,this.instances={},"service"===n.type?(this.defaultExpanded.push(n.name),this.configTree.push({name:n.name,label:n.name,disabled:!0,children:n.payload.map(function(t){return e.instances[t.id]=t,{name:t.id,label:t.name+"  "+t.descr,disabled:t.service!==e.serviceName}})})):n.payload.forEach(function(t){t.name===e.serviceName&&e.defaultExpanded.push(t.name),e.configTree.push({name:t.name,label:t.name,disabled:!0,children:t.payload.map(function(t){return e.instances[t.id]=t,{name:t.id,label:t.name+"  "+t.descr,disabled:t.service!==e.serviceName}})})})}catch(e){this.configTree=[],this.handleErrorMessage(e)}},handleErrorMessage:function(e){var t=e.message.includes("$i18n_")?this.$t("config."+e.message.replace("$i18n_","")):e.message;this.$message.error(t||this.$t("config.import_file_error"))},handleImport:function(){this.$emit("import",this.selectedInstance)}},created:function(){}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"import-config"},[n("el-dialog",{staticClass:"config-dialog",attrs:{width:"500px",visible:e.visible,title:e.$t("config.importConfig")},on:{open:function(t){e.configTree=[]},close:function(t){e.$emit("close")}}},[0===e.configTree.length?n("div",{staticClass:"config__upload"},[n("el-upload",{attrs:{action:"#",accept:"application/json","before-upload":e.handleReader}},[n("el-button",{attrs:{slot:"trigger",type:"success",size:"large",round:""},slot:"trigger"},[e._v("\n          "+e._s(e.$t("config.selectConfigFile"))+"\n          "),n("i",{staticClass:"el-icon-upload el-icon--right"})]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n          "+e._s(e.$t("config.configFileMustBeJson"))+"\n        ")])],1)],1):n("div",{staticClass:"config__tree"},[n("div",{staticClass:"config__info"},[n("p",[e._v(e._s(e.fileName)+" "+e._s(e.$t("config.createBy"))+" "+e._s(e.feature.owner)+" "+e._s(e.$t("config.create"))+"\n          "),n("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[n("div",{staticClass:"config__details"},[e._v("\n              "+e._s(e.$t("config.createUser"))+"："+e._s(e.feature.owner)),n("br"),e._v("\n              "+e._s(e.$t("config.nodeName"))+"："+e._s(e.feature.nodeName)),n("br"),e._v("\n              "+e._s(e.$t("config.host"))+"："+e._s(e.feature.host)),n("br"),e._v("\n              "+e._s(e.$t("config.descr"))+"："+e._s(e.description)),n("br"),e._v("\n              "+e._s(e.$t("config.createAt"))+"："+e._s(e.feature.createAt)+"\n            ")]),e._v(" "),n("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("\n              "+e._s(e.$t("config.more"))+"\n            ")])],1),e._v(" "),n("el-button",{staticClass:"re-select",attrs:{type:"text"},on:{click:function(t){e.configTree=[]}}},[e._v("\n            "+e._s(e.$t("config.reSelect"))+"\n          ")])],1)]),e._v(" "),n("el-tree",{ref:"node",attrs:{data:e.configTree,"default-expanded-keys":e.defaultExpanded,accordion:"","show-checkbox":"","node-key":"name"},on:{"check-change":e.handleTreeClick}})],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.$emit("close")}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"confirm-btn",attrs:{type:"success",disabled:!e.selectedInstance.name||0===e.configTree.length},on:{click:e.handleImport}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var u=n("VU/8")(l,d,!1,function(e){n("89Vc")},null,null).exports,f=n("mvHQ"),p=n.n(f),v=n("woOf"),h=n.n(v),m=n("Zrlr"),g=n.n(m),_=n("wxAW"),y=n.n(_),b=n("CqLJ"),$=n.n(b),k=n("olkN"),w=function(){function e(){g()(this,e)}return y()(e,null,[{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={type:e.type};if("service"===e.type)n.errors=this.validateSchema(e);else{if("cluster"!==e.type)throw new Error("Not a valid config file");e.type="clusetr"}return this.validateSchema(e,t)}},{key:"rulesConstructor",value:function(){var e=this,t={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(n){n.required&&(t[n.key]||(t[n.key]=[]),t[n.key].push({required:!0,message:n.key+" is required"})),"number"==typeof n.default&&(t[n.key]||(t[n.key]=[]),t[n.key].push({validator:e.validateNumber}))}),t}},{key:"validateNumber",value:function(e,t,n){t||n(),isNaN(Number(t))&&n("must be Number"),n()}},{key:"validateSchema",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return o()(t).forEach(function(i){var a=t[i];if(a.required&&!e[i]&&n.push(i+" is required"),e[i]){var r=s()(a.default),c=s()(e[i]);"object"!==r&&c!==r?(e[i]=a.default,n.push(i+" must be "+r)):Array.isArray(e[i])&&!a.default.includes(e[i])&&(e[i]=a.default[0],n.push(i+" must in "+a.default.join(", ")))}}),n}},{key:"configParse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={type:e.type};if("service"===e.type)t.name=e.name;else{if("cluster"!==e.type)throw new Error("$i18n_not_a_valid_config_file");console.log(1)}}},{key:"exportConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(!Array.isArray(t)||0===t.length)throw new Error("$i18n_payload_error");var n={type:"service",description:"",feature:{createAt:$()("yyyy-mm-dd HH:MM:ss"),host:window.location.host,owner:k.a.state.user.username,nodeName:k.a.state.currentNode||""}},i=h()(n,r()({},e,{payload:t}));return i.fileName="EMQ X-"+i.type+" config-"+i.name+"-"+i.description+"-"+$()("yyyymmddHHMM")+".json",p()(i,null,4)}},{key:"renderDownload",value:function(e,t){var n=document.createElement("a");n.download=e;var i=new Blob([t]);n.href=URL.createObjectURL(i),n.click()}}]),e}(),C={name:"service-details",components:{ImportConfig:u},data:function(){return{importConfig:!1,serviceName:"",instanceName:"",instanceID:"",service:{},record:{},view:!0,instance:{name:"",descr:"",serviceName:this.serviceName},rules:{},instanceRules:{name:[{required:!0,message:this.$t("alert.required")}],descr:[{required:!0,message:this.$t("alert.required")}]},items:[]}},methods:{handleImport:function(){this.configTree=[],this.importConfig=!0},handleImported:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.importConfig=!1,t.conf&&(o()(t.conf).forEach(function(n){e.$set(e.record,n,t.conf[n])}),this.$message.success(this.$t("config.importSuccess")))},updateConfig:function(){var e=this;this.$refs.instance.validate(function(t){t&&e.$refs.record.validate(function(t){t&&(e.instanceID?e.$httpPut("/instances/"+e.instanceID,e.record).then(function(){e.$message.success(e.$t("oper.editSuccess")),e.$router.push("/instances")}).catch(e.handleError):e.$httpPost("/instances",r()({},e.instance,{config:e.record})).then(function(){e.$message.success(e.$t("success.success")),e.$router.push("/instances")}).catch(e.handleError))})})},loadData:function(){var e=this;this.$httpGet("/services/"+this.serviceName).then(function(t){e.service=t.data,e.rules=w.rulesConstructor(t.data.schema),e.initForm()}).catch(this.handleError)},handleError:function(e){this.$message.error(e.message||this.$t("error.networkError"))},initInstanceForm:function(){var e=this;o()(this.instance.conf).forEach(function(t){e.$set(e.record,t,e.instance.conf[t])})},loadInstance:function(){var e=this;this.$httpGet("/instances/"+this.instanceID).then(function(t){e.instance=t.data,e.instanceName=t.data.name,e.serviceName=t.data.service,e.loadData()}).catch(this.handleError)},initForm:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.items=[],this.service.schema.forEach(function(n){n.type=s()(n.default),"object"===n.type&&(n.type=Array.isArray(n.default)?"array":n.type),"array"===n.type?n.value=n.default[0]:n.value=n.default,e.instanceID&&!t||e.$set(e.record,n.key,n.value),n.value.toString().length>35?e.items.push(n):e.items.unshift(n)}),this.instanceID&&!t&&this.initInstanceForm()},handleExport:function(){var e=this;this.$prompt(this.$t("instances.remarkConfig"),this.$t("config.exportConfig"),{confirmButtonText:this.$t("config.ex"),confirmButtonClass:"confirm-btn",cancelButtonText:this.$t("oper.cancel"),cancelButtonClass:"cache-btn el-button--text",inputPattern:/.{3,}/,inputErrorMessage:this.$t("config.atLeastThree")}).then(function(t){var n=t.value,i=w.exportConfig({name:e.serviceName,description:n},[e.instance]);w.renderDownload(JSON.parse(i).fileName,i)}).catch(function(t){"cancel"!==t&&e.$message.error(e.$t("alert.failure")+": "+t.message),console.log(t)})},handleRouter:function(){this.$route.path.includes("/create")?(this.serviceName=this.$route.params.serviceName,this.instanceID=!1,this.view=!1,this.loadData()):(this.instanceID=this.$route.params.instanceID,this.view="edit"!==this.$route.query.oper,this.loadInstance())}},created:function(){this.handleRouter()},beforeRouteLeave:function(e,t,n){""===e.path?n("/instances"):n()}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"page-title"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{staticClass:"uppercase",nativeOn:{click:function(t){e.$router.go(-1)}}},[e._v("\n        "+e._s(e.$t("instances.instances"))+"\n      ")]),e._v(" "),n("el-breadcrumb-item",{staticClass:"breadcrumb-name"},[e._v("\n        "+e._s(e.instanceID?e.instanceName:e.$t("oper.create"))+"\n      ")])],1)],1),e._v(" "),n("el-card",{class:["el-card--self",e.view?"card-view":""]},[n("div",{attrs:{slot:"header"},slot:"header"},[e.instanceID?e._e():n("span",[e._v("\n        "+e._s(e.instanceID?e.$t("oper.edit")+" "+e.instanceName:e.$t("oper.from")+" "+e.serviceName+" "+e.$t("oper.create"))+"\n      ")]),e._v(" "),e.instanceID&&e.view?n("i",{staticClass:"el-icon-edit-outline edit-btn",on:{click:function(t){e.view=!1}}}):e._e(),e._v(" "),e.instanceID&&e.view?n("i",{staticClass:"el-icon-download edit-btn",on:{click:e.handleExport}}):e.instanceID&&!e.view?n("i",{staticClass:"el-icon-view edit-btn",on:{click:function(t){e.view=!0}}}):e._e()]),e._v(" "),n("el-row",[n("el-col",{staticClass:"sub-title",staticStyle:{"font-size":"14px",margin:"0 0 10px 0"}},[n("span",[e._v(e._s(e.$t("instances.info")))])])],1),e._v(" "),n("el-form",{ref:"instance",attrs:{record:e.instance,rules:e.instanceID&&e.view?{}:e.instanceRules,model:e.instance,disabled:e.instanceID&&e.view,size:"medium","label-position":"top"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"name",label:e.$t("instances.name")}},[n("el-input",{model:{value:e.instance.name,callback:function(t){e.$set(e.instance,"name",t)},expression:"instance.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"descr",label:e.$t("instances.descr")}},[n("el-input",{model:{value:e.instance.descr,callback:function(t){e.$set(e.instance,"descr",t)},expression:"instance.descr"}})],1)],1),e._v(" "),e.instanceID?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("instances.service")}},[n("el-input",{attrs:{disabled:""},model:{value:e.instance.service,callback:function(t){e.$set(e.instance,"service",t)},expression:"instance.service"}})],1)],1):e._e(),e._v(" "),e.instanceID?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("config.createAt")}},[n("el-input",{attrs:{disabled:"",value:e._f("dateFormat")(e.instance.createAt)}})],1)],1):e._e()],1)],1),e._v(" "),n("el-row",[n("el-col",{staticClass:"sub-title",staticStyle:{"font-size":"14px",margin:"30px 0 10px 0"}},[n("span",[e._v(e._s(e.instanceID?e.$t("instances.configInfo"):e.$t("instances.initConfig")))]),e._v(" "),e.view?e._e():n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",size:"medium"},on:{click:e.handleImport}},[e._v("\n          "+e._s(e.$t("config.importConfig"))+"\n        ")]),e._v(" "),e.view?e._e():n("el-popover",{attrs:{placement:"right",width:"200",title:e.$t("oper.notice"),trigger:"hover"}},[n("p",{staticStyle:{"text-align":"left"},domProps:{innerHTML:e._s(e.$t("config.notice"))}}),e._v(" "),n("i",{staticClass:"fa fa-question-circle-o tips",attrs:{slot:"reference","aria-hidden":"true"},slot:"reference"})])],1)],1),e._v(" "),n("el-form",{ref:"record",attrs:{record:e.record,rules:e.instanceID&&e.view?{}:e.rules,model:e.record,disabled:e.instanceID&&e.view,size:"medium","label-position":"top"}},[n("el-row",{attrs:{gutter:20}},e._l(e.items,function(t){return void 0!==e.record[t.key]?n("el-col",{key:t.key,attrs:{span:12}},[n("el-form-item",{attrs:{prop:t.required||e.rules[t.key]?t.key:"",label:t.key}},["boolean"===t.type?n("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.record[t.key],callback:function(n){e.$set(e.record,t.key,n)},expression:"record[item.key]"}},[n("el-option",{attrs:{label:"是",value:!0}}),e._v(" "),n("el-option",{attrs:{label:"否",value:!1}})],1):"array"===t.type?n("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.record[t.key],callback:function(n){e.$set(e.record,t.key,n)},expression:"record[item.key]"}},e._l(t.default,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})})):"number"===t.type?n("el-input",{attrs:{placeholder:t.desc},model:{value:e.record[t.key],callback:function(n){e.$set(e.record,t.key,e._n(n))},expression:"record[item.key]"}}):t.default.length>35?n("el-input",{attrs:{type:"textarea",rows:2,placeholder:t.desc},model:{value:e.record[t.key],callback:function(n){e.$set(e.record,t.key,n)},expression:"record[item.key]"}}):n("el-input",{attrs:{placeholder:t.desc},model:{value:e.record[t.key],callback:function(n){e.$set(e.record,t.key,n)},expression:"record[item.key]"}})],1)],1):e._e()}))],1),e._v(" "),e.view?e._e():n("div",{staticClass:"operation-area"},[n("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:e.updateConfig}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.$router.go(-1)}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")])],1)],1),e._v(" "),n("import-config",{attrs:{serviceName:e.serviceName,visible:e.importConfig},on:{close:function(t){e.importConfig=!1},import:e.handleImported}})],1)},staticRenderFns:[]};var I=n("VU/8")(C,x,!1,function(e){n("DDnD")},null,null);t.default=I.exports},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var i,s=n("C4MV"),a=(i=s)&&i.__esModule?i:{default:i};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()}});