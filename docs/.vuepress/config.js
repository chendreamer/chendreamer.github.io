module.exports = {
	title: 'blog',
	description: '个人博客',
	themeConfig: {
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Guide',
				link: '/guide/'
			},
			{
				text: 'External',
				link: 'https://google.com'
			},
			{
				text: 'Languages',
				items: [{
						text: 'Chinese',
						link: '/language/chinese'
					},
					{
						text: 'Japanese',
						link: '/language/japanese'
					}
				]
			}
		],
		sidebar: [{
				title: '前端',
				children: ['/前端/markdown语法', '/前端/android']
			},
			{
				title: '后端',
				children: ['/后端/b', '/后端/web']
			}
		]
	}
}
