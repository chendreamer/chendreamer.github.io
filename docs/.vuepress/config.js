module.exports = {
	title: "chen's blog",
	description: '个人博客',
	head: [
        ['link', { rel: 'icon', href: 'image/logo.png' }]
    ],
	themeConfig: {
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: '前端',
				link: '/前端/首页'
			},
			{
				text: '后端',
				link: '/后端/首页'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/chendreamer'
			},
			{
				text: 'baidu',
				link: 'https://baidu.com'
			}
		],
		sidebar: {
			'/前端/': [
				'首页',
				'知识点',
				'markdown语法',
				'ES6',
                'flex&grid',
				'git使用手册',
                'js思维导图',
				'JS函数大全',
				'vue',
				'Mockjs',
				'WEB安全',
                'webpack',
                'typescript'
			],
			'/后端/': [
				'首页',
				'知识点',
				'node',
				'sql语句',
				'mongoDB'
			]
		}
	}
}
