import{o as e,A as a,s as t,p as r,q as s,f as o,B as l,C as i}from"./element-plus.js";import{F as n,D as c,v as d,G as u}from"./@element-plus.js";import{s as p,a as h}from"./tag.js";import{_ as m}from"./index.js";import{ae as g,o as f,c as y,a as k,T as w,V as j,F as C,Z as S}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";/* empty css        */const b={class:"search row justify-between align-c pd-20 mb-20"};const _=m({name:"tag-index",setup:()=>({Edit:n,Delete:c,View:d,Search:u}),data:()=>({tableData:[],multipleSelection:[],count:0,cur:1,keywords:""}),computed:{},created(){let{cur:e=1,keywords:a=""}=this.$route.query;this.cur=+e,this.keywords=a,this.search()},watch:{$route(e,a){if("tag-index"==e.name){let{cur:a,keywords:t}=e.query;this.cur=+a,this.keywords=t,this.search()}}},methods:{clearSearch(){this.$router.replace({name:"tag-index",query:{cur:1,cid:0,keywords:""}})},doSearch(){this.$router.replace({name:"tag-index",query:{cur:this.cur,keywords:this.keywords}}),this.search()},async search(){try{let e=await p(this.cur,this.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=+e,this.doSearch()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"tag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{let e=await h(a);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"error"})}catch(t){console.log(t)}}}},[["render",function(n,c,d,u,p,h){const m=r,_=s,x=o,$=e,v=g("router-link"),D=l,q=a,E=i,V=t;return f(),y(C,null,[k("div",b,[w($,{inline:!0,model:n.params},{default:j((()=>[w(_,{label:"标题",prop:"keywords"},{default:j((()=>[w(m,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":u.Search,clearable:"",onClear:h.clearSearch,modelValue:n.keywords,"onUpdate:modelValue":c[0]||(c[0]=e=>n.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),w(_,null,{default:j((()=>[w(x,{type:"primary",onClick:h.search,round:""},{default:j((()=>[S("搜索")])),_:1},8,["onClick"]),w(x,{onClick:h.clearSearch,round:""},{default:j((()=>[S("清空")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),w(v,{to:"/tag/add"},{default:j((()=>[w(x,{type:"primary",round:""},{default:j((()=>[S("新增")])),_:1})])),_:1})]),w(q,{ref:"multipleTable",data:n.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:h.handleSelectionChange},{default:j((()=>[w(D,{type:"selection"}),w(D,{prop:"id",label:"编号"}),w(D,{prop:"name",label:"名称"}),w(D,{prop:"path",label:"标识"}),w(D,{fixed:"right",label:"操作"},{default:j((e=>[w(x,{icon:u.Edit,circle:"",onClick:a=>h.toEdit(e.row)},null,8,["icon","onClick"]),w(x,{icon:u.Delete,circle:"",onClick:a=>h.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),w(V,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:j((()=>[w(E,{background:"",layout:"prev, pager, next",onCurrentChange:h.handleCurrentChange,"pager-size":10,total:n.count,currentPage:n.cur,"onUpdate:currentPage":c[1]||(c[1]=e=>n.cur=e),"hide-on-single-page":""},null,8,["onCurrentChange","total","currentPage"])])),_:1})],64)}],["__scopeId","data-v-2fc1c56a"]]);export{_ as default};
//# sourceMappingURL=index16.js.map