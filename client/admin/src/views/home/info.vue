<template>
  <div class="pd-10">
    <el-row :gutter="20">
      <el-col class="mb-20" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <h1>历史进程</h1>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item
              type="primary"
              :hollow="true"
              timestamp="2022/6/12"
            >
              <p>第四次重构（chanyuecms）基于express mysql knex开发第三版</p>
            </el-timeline-item>
            <el-timeline-item
              type="primary"
              :hollow="true"
              timestamp="2020/10/1"
            >
              <p>第三次重构（eggcms） 基于egg mysql Sequelize重构</p>
            </el-timeline-item>
            <el-timeline-item
              type="primary"
              :hollow="true"
              timestamp="2018/4/2"
            >
              <p>第二次重构（koacms）基于koa2 mysql重构</p>
            </el-timeline-item>
            <el-timeline-item
              type="primary"
              :hollow="true"
              timestamp="2015/6/2"
            >
              <p>第一次构想 基于express mongoDB开发第一版cms</p>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>

      <el-col class="mb-20" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <h1>技术架构</h1>
            </div>
          </template>
          <p class="f-14 mb-6">
            <strong>技术架构：</strong>nodejs v18.16.0 express4+ mysql-5.6/5.7
          </p>
          <p class="f-14 mb-6">
            <strong>前端架构：</strong>vite4.0 vue3 element-plus pinia axios
          </p>
          <p class="f-14 mb-6"><strong>程序版本：</strong>v.1.0.2</p>
          <p class="f-14 mb-6"><strong>程序路径：</strong>{{ dirname }}</p>
          <p class="f-14 mb-6"><strong>发布时间：</strong>2023-07-21</p>
          <p class="f-14 mb-6"><strong>独立开发：</strong>明空</p>
          <p class="f-14 mb-6"><strong>UI界面：</strong>16号</p>
          <p class="f-14 mb-6 row"><strong>联系微信：</strong>yanyutao2014</p>
          <p class="f-14 mb-6">
            <strong>禅悦内容管理系统：</strong>
            <a class="c-9ca4bf" href="http://www.chanyue.top" target="_blank">
              &copy; www.chanyue.top
            </a>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { tongji } from "@/api/article.js";
import { runEnv } from "@/api/site.js";
export default {
  name: "home-info",
  data: () => {
    return {
      data: {
        month: 0,
        quarter: 0,
        today: 0,
        week: 0,
        year: 0,
        yesterday: 0,
        message: 0,
      },
      dirname: "",
      loading: true,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.tongji();
    this.runEnv();
  },

  methods: {
    async tongji() {
      try {
        let res = await tongji();
        if (res.code === 200) {
          this.data = res.data;
          this.loading = false;
          this.articleNum();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async runEnv() {
      try {
        let res = await runEnv();
        const { code, data } = res;
        if (code === 200) {
          this.dirname = data.dirname;
        }
      } catch (error) {
        console.log(error);
      }
    },

    articleNum() {
      const data = [
        {
          type: "昨日",
          num: this.data.yesterday,
        },
        {
          type: "今天",
          sales: this.data.today,
        },
        {
          type: "7天",
          sales: this.data.week,
        },
        {
          type: "30天",
          sales: this.data.month,
        },
        {
          type: "一个季度",
          sales: this.data.quarter,
        },
        {
          type: "一年",
          sales: this.data.year,
        },
        {
          type: "留言总数",
          sales: this.data.message,
        },
      ];
    },
  },
};
</script>
<style scoped>
#article {
  height: 320px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 0 14px hsla(0, 0%, 93.3%, 0.5);
  border-radius: 4px;
  padding: 35px 25px 30px;
}

.info {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 0 14px hsla(0, 0%, 93.3%, 0.5);
  border-radius: 4px;
  padding: 25px;
}

.c-9ca4bf {
  color: #9ca4bf;
}
</style>
