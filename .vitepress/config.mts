import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "挂壁it课堂",
    description: "A VitePress Site",
    themeConfig: {
        nav: [
            { text: '前端', link: '/frontend/index' },
            { text: 'Go', link: '/go/index' },
            { text: 'Java', link: '/java/index' },
            { text: 'NodeJS', link: '/nodejs/index' },
            { text: 'Linux运维', link: '/linux/index' },
            { text: '嵌入式&物联网', link: '/embedded/index' },
            { text: 'Arpc.js', link: '/frontend/index' },
            { text: 'Go', link: '/go/index' },
            { text: 'Java', link: '/java/index' },
            { text: 'NodeJS', link: '/nodejs/index' },
            { text: 'Linux运维', link: '/linux/index' },
            { text: '嵌入式&物联网', link: '/embedded/index' },
            { text: 'NodeJS', link: '/nodejs/index' },
            { text: 'Linux运维', link: '/linux/index' },
            { text: '嵌入式&物联网', link: '/embedded/index' }
        ],

        sidebar: {
// 前端
            '/frontend/': [
                { text: '介绍', link: '/frontend/index' },

                // html 章节
                {
                    text: 'html', collapsed: true, items: [
                        { text: '环境搭建', link: '/frontend/env' },
                        { text: 'HTML 基础', link: '/frontend/basic/html' },
                        { text: 'CSS 基础', link: '/frontend/basic/css' },
                        { text: 'JavaScript 基础', link: '/frontend/basic/javascript' },
                        { text: 'DOM 与事件', link: '/frontend/basic/dom_event' }
                    ]
                },

                // css 章节
                {
                    text: 'css', collapsed: true, items: [
                        { text: 'Vue 3 基础', link: '/frontend/framework/vue3' },
                        { text: 'React 入门', link: '/frontend/framework/react' },
                        { text: 'UniApp 开发', link: '/frontend/framework/uniapp' }
                    ]
                },

                // JavaScript 章节
                {
                    text: 'JavaScript', collapsed: true, items: [
                        { text: 'IndexedDB', link: '/frontend/database/indexeddb' },
                        { text: '本地存储与缓存', link: '/frontend/database/local_storage' }
                    ]
                },

                // vue 章节
                {
                    text: 'vue', collapsed: true, items: [
                        { text: 'vue介绍', link: '/frontend/microservice/concept' },
                        { text: 'vite创建vue项目', link: '/frontend/microservice/module_component' },
                        { text: '模板语法', link: '/vue/basic/template_syntax' },
                        { text: '数据绑定与计算属性', link: '/vue/basic/data_computed' },
                        { text: '条件渲染与列表渲染', link: '/vue/basic/conditional_list' },
                        { text: '事件处理与方法', link: '/vue/basic/events_methods' },
                        { text: '组件基础', link: '/vue/basic/components' },
                        { text: 'Props 与自定义事件', link: '/vue/basic/props_emit' },
                        { text: '插槽与组合组件', link: '/vue/basic/slots' }
                    ]
                },

                // uniapp 章节
                {
                    text: 'uniapp跨端+小程序', collapsed: true, items: [
                        { text: '单页面应用', link: '/frontend/project/spa' },
                        { text: '电商页面开发', link: '/frontend/project/ecommerce' },
                        { text: '前端性能优化', link: '/frontend/project/performance' }
                    ]
                },
                // uniapp 章节
                {
                    text: 'element-ui', collapsed: true, items: [
                        { text: '单页面应用', link: '/frontend/project/spa' },
                        { text: '电商页面开发', link: '/frontend/project/ecommerce' },
                        { text: '前端性能优化', link: '/frontend/project/performance' }
                    ]
                },
                // 项目实战章节
                {
                    text: '项目实战', collapsed: true, items: [
                        { text: '单页面应用', link: '/frontend/project/spa' },
                        { text: '电商页面开发', link: '/frontend/project/ecommerce' },
                        { text: '前端性能优化', link: '/frontend/project/performance' }
                    ]
                }
            ],

            // Go 路线
            '/go/': [
                {
                    text: 'go基础', collapsed: true, items: [
                        { text: 'go介绍', link: '/go/basic/brief' },
                        { text: '环境搭建', link: '/go/basic/env' },
                        { text: '变量与常量', link: '/go/basic/variables_constants' },
                        {
                            text: '数据类型', collapsed: true, items: [
                                { text: '数字类型', link: '/go/basic/data_type/number' },
                                { text: '布尔类型', link: '/go/basic/array' },
                                { text: '字符串类型', link: '/go/basic/slice' },
                                { text: '数组类型', link: '/go/basic/map' },
                                { text: '切片类型', link: '/go/basic/map' },
                                { text: 'map类型', link: '/go/basic/map' },
                                { text: '结构体类型', link: '/go/basic/struct' },
                                { text: '接口类型', link: '/go/basic/struct' },
                                { text: '函数类型', link: '/go/basic/methods_interfaces' },
                                { text: 'Channel通道类型', link: '/go/basic/struct' },
                                { text: '指针类型', link: '/go/basic/methods_interfaces' }
                            ]
                        },
                        { text: '运算符', link: '/go/basic/variables_constants' },
                        {
                            text: '流程控制', collapsed: true, items: [
                                { text: 'if', link: '/go/basic/array' },
                                { text: 'switch(可选)', link: '/go/basic/array' },
                                { text: 'for', link: '/go/basic/slice' },
                                { text: 'range ', link: '/go/basic/map' },
                            ]
                        },
                        { text: '函数', link: '/go/basic/variables_constants' },
                        { text: '结构体和实例', link: '/go/basic/variables_constants' },
                        { text: '方法，实例的动作', link: '/go/basic/variables_constants' },
                        { text: '错误处理', link: '/go/basic/variables_constants' },
                    ]
                },
                {
                    text: 'go进阶(可选)', collapsed: true, items: [
                        {
                            text: '并发编程', collapsed: true, items: [
                                { text: '协程', link: '/go/basic/array' },
                                { text: '通道', link: '/go/basic/array' },
                                { text: '协程通讯', link: '/go/basic/slice' },
                                { text: 'Sync并发包', link: '/go/basic/slice' },
                                { text: 'atomic原子包 ', link: '/go/basic/map' },
                                { text: '多路复用 ', link: '/go/basic/map' },
                                { text: 'GMP模型 ', link: '/go/basic/map' },
                            ]
                        },
                        { text: '网络编程', link: '/go/advanced/goroutine_channel' },
                        { text: '反射', link: '/go/advanced/reflection_generics' },
                        { text: '泛型', link: '/go/advanced/reflection_generics' },
                        { text: 'io流', link: '/go/advanced/error_logging' },
                    ]
                },
                {
                    text: 'Web 服务', collapsed: true, items: [
                        { text: 'HTTP 基础', link: '/go/http/http_basic' },
                        { text: '路由与请求处理', link: '/go/http/router_request' },
                        { text: 'Gin 框架', collapsed: true, items: [
                                { text: 'Gin 入门', link: '/go/http/gin/intro' },
                                { text: 'Gin REST API 实战', link: '/go/http/gin/rest_api' },
                                { text: 'Gin 中间件使用', link: '/go/http/gin/middleware' }
                            ]}
                    ]
                },
                {
                    text: '数据库', collapsed: true, items: [
                        { text: 'mysql数据库', collapsed: true, items: [
                                { text: '介绍', link: '/go/database/gorm/intro' },
                                { text: '安装和连接', link: '/go/database/gorm/crud' },
                                { text: '创建数据库', link: '/go/database/gorm/project' },
                                { text: '创建表', link: '/go/database/gorm/project' },
                                { text: '插入', link: '/go/database/gorm/project' },
                                { text: '查询', link: '/go/database/gorm/project' },
                                { text: '修改', link: '/go/database/gorm/project' },
                                { text: '删除', link: '/go/database/gorm/project' },
                                { text: '索引', link: '/go/database/gorm/project' },
                            ]
                        },                        { text: '事务与连接池', link: '/go/database/mysql_transactions' },
                        { text: 'GORM 框架', collapsed: true, items: [
                                { text: 'GORM 基础', link: '/go/database/gorm/intro' },
                                { text: '模型定义与 CRUD', link: '/go/database/gorm/crud' },
                                { text: '事务与项目实战', link: '/go/database/gorm/project' }
                            ]
                        },
                        { text: 'Redis 使用', link: '/go/database/redis' },
                        { text: 'MongoDB 使用', link: '/go/database/redis' }
                    ]
                },
                {
                    text: '微服务(可选)', collapsed: true, items: [
                        {
                            text: '集群', collapsed: true, items: [
                                { text: 'Nginx 搭建集群', link: '/go/microservice/cluster/nginx' },
                                { text: '集群间通信问题', link: '/go/microservice/cluster/communication' },
                                { text: '集群缓存与Session管理', link: '/go/microservice/cluster/session' },
                                { text: '分布式锁', link: '/go/microservice/cluster/task_scheduling' },
                                { text: '集群任务调度', link: '/go/microservice/cluster/task_scheduling' }
                            ]
                        },
                        {
                            text: '分布式', collapsed: true, items: [
                                { text: '分布式锁', link: '/go/microservice/distributed/lock' },
                                { text: '分布式事务', link: '/go/microservice/distributed/transaction' },
                                { text: '分布式缓存', link: '/go/microservice/distributed/cache' },
                                { text: '分布式配置中心', link: '/go/microservice/distributed/config' }
                            ]
                        },
                        {
                            text: '同步微服务', collapsed: true, items: [
                                { text: 'REST API', link: '/go/microservice/sync/rest' },
                                { text: 'gRPC', link: '/go/microservice/sync/grpc' }
                            ]
                        },
                        {
                            text: '异步微服务', collapsed: true, items: [
                                { text: '消息队列概念', link: '/go/microservice/async/mq_concept' },
                                { text: 'Kafka 使用', link: '/go/microservice/async/kafka' },
                                { text: 'RabbitMQ 使用', link: '/go/microservice/async/rabbitmq' },
                                { text: 'RocketMQ 使用', link: '/go/microservice/async/rocketmq' }
                            ]
                        },
                        {
                            text: '服务网格', collapsed: true, items: [
                                { text: 'Istio 基础', link: '/go/microservice/mesh/istio' },
                                { text: '流量管理', link: '/go/microservice/mesh/traffic' },
                                { text: '熔断与限流', link: '/go/microservice/mesh/circuit_breaker' }
                            ]
                        },
                        {
                            text: 'Serverless 无服务架构', collapsed: true, items: [
                                { text: '概念与优势', link: '/go/microservice/serverless/concept' },
                                { text: 'AWS Lambda 使用', link: '/go/microservice/serverless/lambda' },
                                { text: 'OpenFaaS 使用', link: '/go/microservice/serverless/openfaas' }
                            ]
                        },
                        {
                            text: 'Edge WASM 边缘计算', collapsed: true, items: [
                                { text: '概念与应用场景', link: '/go/microservice/edge/wasm_concept' },
                                { text: 'Cloudflare Workers', link: '/go/microservice/edge/cloudflare' },
                                { text: '边缘缓存与负载', link: '/go/microservice/edge/cache_load' }
                            ]
                        }
                    ]
                },
                {
                    text: '项目实战', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/go/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/go/project/web_service' },
                        { text: 'Gin + GORM 综合实战', link: '/go/project/gin_gorm_project' },
                        { text: '微服务项目实战', link: '/go/project/microservice_project' }
                    ]
                },
                {
                    text: '微服务项目(可选)', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/go/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/go/project/web_service' },
                        { text: 'Gin + GORM 综合实战', link: '/go/project/gin_gorm_project' },
                        { text: '微服务项目实战', link: '/go/project/microservice_project' }
                    ]
                },
                {
                    text: '面试八股文', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/go/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/go/project/web_service' },
                        { text: 'Gin + GORM 综合实战', link: '/go/project/gin_gorm_project' },
                        { text: '微服务项目实战', link: '/go/project/microservice_project' }
                    ]
                }
            ],

            // Java 路线（跟 Go 完全一致的章节模板）
            '/java/': [
                { text: '介绍', link: '/java/index' },
                {
                    text: 'java基础', collapsed: true, items: [
                        { text: '环境搭建', link: '/java/basic/env' },
                        { text: '变量与数据类型', link: '/java/basic/variables_types' },
                        { text: '运算符与表达式', link: '/java/basic/operators' },
                        { text: '条件判断与循环', link: '/java/basic/conditions_loops' },
                        { text: '数组与集合', link: '/java/basic/arrays_collections' },
                        { text: '函数与方法', link: '/java/basic/functions_methods' },
                        { text: '面向对象基础', link: '/java/oop/index' }
                    ]
                },
                {
                    text: 'java进阶(可选)', collapsed: true, items: [
                        { text: 'Spring Boot', link: '/java/advanced/springboot' },
                        { text: 'MyBatis', link: '/java/advanced/mybatis' },
                        { text: 'Maven/Gradle', link: '/java/advanced/maven_gradle' },
                        { text: '配置管理与环境变量', link: '/java/advanced/config_env' },
                        { text: '单元测试与调试', link: '/java/advanced/testing_debugging' }
                    ]
                },
                {
                    text: 'Web 服务', collapsed: true, items: [
                        { text: 'HTTP 基础', link: '/java/http/http_basic' },
                        { text: '路由与请求处理', link: '/java/http/router_request' },
                        { text: 'Spring MVC 框架', collapsed: true, items: [
                                { text: 'Spring MVC 入门', link: '/java/http/springmvc/intro' },
                                { text: 'REST API 实战', link: '/java/http/springmvc/rest_api' },
                                { text: '中间件使用', link: '/java/http/springmvc/middleware' }
                            ]}
                    ]
                },
                {
                    text: '数据库', collapsed: true, items: [
                        { text: 'MySQL 基础操作', link: '/java/database/mysql_basic' },
                        { text: '事务与连接池', link: '/java/database/mysql_transactions' },
                        { text: 'MyBatis 使用', link: '/java/database/mybatis' },
                        { text: 'Redis 使用', link: '/java/database/redis' }
                    ]
                },
                {
                    text: '微服务(可选)', collapsed: true, items: [
                        { text: '微服务概念', link: '/java/microservice/concept' },
                        { text: '服务注册与发现', link: '/java/microservice/registry' },
                        { text: 'API 网关', link: '/java/microservice/gateway' },
                        { text: '消息队列与异步', link: '/java/microservice/mq_async' },
                        { text: '分布式 Session', link: '/java/microservice/distributed_session' },
                        { text: '分布式锁', link: '/java/microservice/distributed_lock' },
                        { text: 'ElasticSearch 使用', link: '/java/microservice/elasticsearch' }
                    ]
                },
                {
                    text: '项目实战', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/java/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/java/project/web_service' },
                        { text: 'Spring Boot 综合实战', link: '/java/project/springboot_project' },
                        { text: '微服务项目实战', link: '/java/project/microservice_project' }
                    ]
                },
                {
                    text: '微服务项目(可选)', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/java/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/java/project/web_service' },
                        { text: 'Spring Boot 综合实战', link: '/java/project/springboot_project' },
                        { text: '微服务项目实战', link: '/java/project/microservice_project' }
                    ]
                },
                {
                    text: '面试八股文', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/java/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/java/project/web_service' },
                        { text: 'Spring Boot 综合实战', link: '/java/project/springboot_project' },
                        { text: '微服务项目实战', link: '/java/project/microservice_project' }
                    ]
                }
            ],

            // NodeJS 路线（跟 Go 完全一致的章节模板）
            '/nodejs/': [
                { text: '介绍', link: '/nodejs/index' },
                {
                    text: 'js基础', collapsed: true, items: [
                        { text: '环境搭建', link: '/nodejs/basic/env' },
                        { text: 'NodeJS 基础语法', link: '/nodejs/basic/syntax' },
                        { text: '模块与包管理', link: '/nodejs/basic/modules' },
                        { text: '异步与事件', link: '/nodejs/basic/async_event' }
                    ]
                },
                {
                    text: 'js进阶(可选)', collapsed: true, items: [
                        { text: 'Express 基础', link: '/nodejs/advanced/express' },
                        { text: 'Koa 入门', link: '/nodejs/advanced/koa' },
                        { text: '配置管理与环境变量', link: '/nodejs/advanced/config_env' },
                        { text: '单元测试与调试', link: '/nodejs/advanced/testing_debugging' }
                    ]
                },
                {
                    text: 'Web 服务', collapsed: true, items: [
                        { text: 'HTTP 基础', link: '/nodejs/http/http_basic' },
                        { text: '路由与请求处理', link: '/nodejs/http/router_request' },
                        { text: 'Express/Koa 框架', collapsed: true, items: [
                                { text: '框架入门', link: '/nodejs/http/framework/intro' },
                                { text: 'REST API 实战', link: '/nodejs/http/framework/rest_api' },
                                { text: '中间件使用', link: '/nodejs/http/framework/middleware' }
                            ]}
                    ]
                },
                {
                    text: '数据库', collapsed: true, items: [
                        { text: 'MySQL 使用', link: '/nodejs/database/mysql' },
                        { text: 'MongoDB 使用', link: '/nodejs/database/mongodb' },
                        { text: 'Redis 使用', link: '/nodejs/database/redis' }
                    ]
                },
                {
                    text: '微服务(可选)', collapsed: true, items: [
                        { text: '微服务概念', link: '/nodejs/microservice/concept' },
                        { text: '服务注册与发现', link: '/nodejs/microservice/registry' },
                        { text: 'API 网关', link: '/nodejs/microservice/gateway' },
                        { text: '消息队列与异步', link: '/nodejs/microservice/mq_async' },
                        { text: '分布式 Session', link: '/nodejs/microservice/distributed_session' },
                        { text: '分布式锁', link: '/nodejs/microservice/distributed_lock' },
                        { text: 'ElasticSearch 使用', link: '/nodejs/microservice/elasticsearch' }
                    ]
                },
                {
                    text: '项目实战', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/nodejs/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/nodejs/project/web_service' },
                        { text: 'REST API 综合实战', link: '/nodejs/project/rest_api' },
                        { text: '微服务项目实战', link: '/nodejs/project/microservice_project' }
                    ]
                },
                {
                    text: '微服务项目(可选)', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/nodejs/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/nodejs/project/web_service' },
                        { text: 'REST API 综合实战', link: '/nodejs/project/rest_api' },
                        { text: '微服务项目实战', link: '/nodejs/project/microservice_project' }
                    ]
                },
                {
                    text: '面试八股文', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/nodejs/project/cli_tool' },
                        { text: 'Web 服务搭建', link: '/nodejs/project/web_service' },
                        { text: 'REST API 综合实战', link: '/nodejs/project/rest_api' },
                        { text: '微服务项目实战', link: '/nodejs/project/microservice_project' }
                    ]
                }
            ],
            '/linux/': [
                { text: '介绍', link: '/linux/index' },

                // 1. Linux 基础
                {
                    text: 'Linux 基础', collapsed: true, items: [
                        { text: 'Linux介绍', link: '/linux/basic/overview' },
                        { text: 'Linux安装', link: '/linux/basic/overview' },
                        { text: '常用命令', link: '/linux/basic/commands' },
                        { text: '文件与目录管理', link: '/linux/basic/filesystem' },
                        { text: '用户与权限管理', link: '/linux/basic/user_permission' },
                        { text: '进程与服务管理', link: '/linux/basic/process_service' },
                        { text: '软件安装与包管理', link: '/linux/basic/package' },
                        { text: '网络与防火墙', link: '/linux/basic/network_firewall' },
                        { text: '日志管理与监控', link: '/linux/basic/log_monitor' },
                        { text: '云服务器实战', link: '/linux/basic/log_monitor' }
                    ]
                },

                // 3. Linux 高级运维
                {
                    text: '系统运维', collapsed: true, items: [
                        { text: 'nginx网站部署', link: '/linux/ops/performance' },
                        { text: '宝塔网站部署', link: '/linux/ops/performance' },
                        { text: '日志分割', link: '/linux/ops/performance' },
                        { text: 'Prometheus，Zabbix性能监控与优化', link: '/linux/ops/performance' },
                        { text: '任务调度（cron）', link: '/linux/ops/cron' },
                        { text: 'Ansible集群管理', link: '/linux/ops/distributed_service' },
                        { text: '集群与负载均衡', link: '/linux/ops/cluster' }
                    ]
                },
                // 2. Linux 环境搭建
                {
                    text: '常见环境搭建', collapsed: true, items: [
                        { text: 'Node.js环境安装', link: '/linux/env/nodejs' },
                        { text: 'java环境安装', link: '/linux/env/database' },
                        { text: 'Web服务器安装Nginx/Apache）', link: '/linux/env/webserver' },
                        { text: '容器与虚拟化（Docker/K8s 简介）', link: '/linux/env/container' }
                    ]
                },
                // 10. 面试八股文
                {
                    text: '面试八股文', collapsed: true, items: [
                        { text: '命令行工具开发', link: '/linux/interview/cli_tool' },
                        { text: 'Web 服务搭建', link: '/linux/interview/web_service' },
                        { text: 'REST API 综合实战', link: '/linux/interview/rest_api' },
                        { text: '微服务项目实战', link: '/linux/interview/microservice_project' }
                    ]
                }
            ]
        }
    }
})
