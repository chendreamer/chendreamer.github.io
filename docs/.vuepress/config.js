module.exports = {
	title: "chen's blog",
	description: '个人博客',
	themeConfig: {
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [{
				text: 'Home',
				link: '/'
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
		sidebar: [{
				title: '前端',
				children: ['/前端/markdown语法', '/前端/vue']
			},
			{
				title: '后端',
				children: ['/后端/b', '/后端/web']
			}
		]
	}
}
