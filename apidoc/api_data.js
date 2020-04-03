define({ "api": [
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "date",
            "description": "<p>查询日期，格式 YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/card.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\card.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\card.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "teacherName",
            "description": "<p>老师名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "beginWeek",
            "description": "<p>开始周次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endWeek",
            "description": "<p>结束周次`</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayOfWeek",
            "description": "<p>星期几      // 为了数据直观以及前端绘图方便，1-7 分别表示周一到周日</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "flip",
            "description": "<p>单双周      // even 双周, odd 单周, none 全周</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "beginPeriod",
            "description": "<p>开始节次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endPeriod",
            "description": "<p>结束节次</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "location",
            "description": "<p>地点</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/curriculum.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\curriculum.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\curriculum.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "term",
            "description": "<p>学期号（不填则为教务处设定的当前学期）</p> <h2>返回格式举例：</h2> <p>{ term: { name, maxWeek, startDate?, endDate?, isCurrent?, isNext?, isPrev? } // 查不到开学日期时只有前两个 user: { cardnum, schoolnum, name, collegeId, collegeName, majorId, majorName } curriculum: [ { // 浮动课程只有前五个属性 courseName, teacherName, credit, beginWeek, endWeek,       // 1 ~ 16 // 非浮动课程兼有后面这些属性 dayOfWeek?,               // 为了数据直观以及前端绘图方便，1-7 分别表示周一到周日 flip?,                    // even 双周, odd 单周, none 全周 location?, beginPeriod?, endPeriod?, // 1 ~ 13 events: [ { week, startTime, endTime } // 课程每一周上课的具体时间戳 ] } ] }</p> <h2>关于丁家桥课表的周次问题：</h2> <p>在之前 webserv2 的使用中，我们发现部分院系课表的周次与常理相悖，这种现象尤以丁家桥校区为甚。 经过调查，该现象是因为丁家桥校区多数院系不设短学期，短学期和秋季学期合并为一个大学期， 而教务处系统不支持这种设定，致使排课老师对此进行主观处理导致的。 由于不同院系排课老师理解的区别，所做的主观处理也不尽相同，具体表现有以下三种：</p> <ol> <li> <p>短学期课表有 1-4 周，长学期课表有 1-16 周 这种课表属于正常课表，不需要做任何处理即可兼容；</p> </li> <li> <p>短学期课表为空，长学期课表有 1-20 周 这类课表出现时，老师通常让学生直接查询长学期课表，将短学期的开学日期当做长学期的开学日期。 对于这类课表，我们需要在系统中将长学期开学日期向前推4周，而且短学期为空时应当主动转化为长学期查询；</p> </li> <li> <p>短学期课表有 1-4 周，长学期课表有 5-20 周 这类课表出现时，老师通常让学生查询短学期课表作为前四周，长学期课表作为后 16 周。 对于这类课表，我们需要在系统中将长学期开学日期向前推4周。</p> </li> </ol>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/curriculum.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\curriculum.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\curriculum.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "semester",
            "description": "<p>学年学期</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "campus",
            "description": "<p>校区       ['九龙湖', '丁家桥', '四牌楼']</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "teacherName",
            "description": "<p>老师名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间   格式：时间戳</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "location",
            "description": "<p>考试地点</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "duration",
            "description": "<p>考试时长   单位：分</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/exam.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\exam.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\exam.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "credit",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "score",
            "description": "<p>分数</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseType",
            "description": "<p>课程类型</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "scoreType",
            "description": "<p>修读类型</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "semester",
            "description": "<p>学期</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "credit",
            "description": "<p>学分</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "score",
            "description": "<p>分数</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "courseType",
            "description": "<p>课程类型</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "scoreType",
            "description": "<p>修读类型</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "semester",
            "description": "<p>学期</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/gpa.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\gpa.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "bookId",
            "description": "<p>图书续借</p> <p>暂时继借是不可能的</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/library.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\library.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\library.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "url",
            "description": "<p>? 需要转换为 Markdown 的地址</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nid",
            "description": "<p>? 需要查看 Markdown 的通知 nid</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/notice/index.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\notice\\index.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\notice\\index.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "useMode",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "userIds",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "validateCode",
            "description": "<p>预约场馆</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/index.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>预约信息查询</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/index.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\index.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dayInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": "<p>预约场馆 初始化</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/initOrder.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\initOrder.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\initOrder.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ids",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "useTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "allowHalf",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "validateCode",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/judgeUser.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\judgeUser.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\judgeUser.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "cardnum",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/reservation/user.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\user.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\reservation\\user.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "months",
            "description": "<p>要开通/续期的月数</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/wlan.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "ip",
            "description": "<p>要下线的IP地址</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "mac",
            "description": "<p>要删除的设备MAC地址</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/api/wlan.js",
    "group": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "groupTitle": "D:\\Project\\herald-webservice\\routes\\api\\wlan.js",
    "name": ""
  },
  {
    "type": "DELETE",
    "url": "/api/admin/admin",
    "title": "删除管理员权限",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "DeleteApiAdminAdmin"
  },
  {
    "type": "DELETE",
    "url": "/api/admin/banner",
    "title": "删除轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "DeleteApiAdminBanner"
  },
  {
    "type": "Get",
    "url": "/api/admin/activity",
    "title": "getActivities",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页长</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"page\": 1,\n \"pagesize\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": true,\n  \"code\": 200\n  \"result\": [\n{ \n \"id\":\"9CBA606EC456E0F6E05012AC02002685\",\n \"click\":0,\n \"title\":\"测试标题6\",\n \"pic\":\"http://picurl\",\n \"url\":\"https://url\",\n \"content\":\"testContent\",\n \"endTime\":1582473601000,\n \"startTime:\":1579708800000\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminActivity"
  },
  {
    "type": "Get",
    "url": "/api/admin/admin",
    "title": "查询管理员",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "description": "<p>指定功能域 带 domain 参数表示查询指定域下的管理员；不带 domain 参数表示查询自己的管理员身份</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": true,\n  \"code\": 200\n  \"result\": [\n'authrization'\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminAdmin"
  },
  {
    "type": "GET",
    "url": "/api/admin/banner",
    "title": "获取轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>页面尺寸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "GetApiAdminBanner"
  },
  {
    "type": "POST",
    "url": "/api/admin/activity",
    "title": "添加活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>指定功能域</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminActivity"
  },
  {
    "type": "POST",
    "url": "/api/admin/admin",
    "title": "添加管理员权限",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>指定功能域</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminAdmin"
  },
  {
    "type": "POST",
    "url": "/api/admin/banner",
    "title": "添加轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "banner",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "PostApiAdminBanner"
  },
  {
    "type": "PUT",
    "url": "/api/admin/activity",
    "title": "删除活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminActivity"
  },
  {
    "type": "PUT",
    "url": "/api/admin/activity",
    "title": "修改活动",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>指定功能域</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/activity.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminActivity"
  },
  {
    "type": "PUT",
    "url": "/api/admin/admin",
    "title": "修改管理员信息",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/admin.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminAdmin"
  },
  {
    "type": "PUT",
    "url": "/api/admin/banner",
    "title": "修改轮播图",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "banner",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/admin/banner.js",
    "groupTitle": "管理员接口",
    "name": "PutApiAdminBanner"
  }
] });
