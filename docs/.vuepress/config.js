const { defaultTheme } = require('@vuepress/theme-default')

let theme = defaultTheme({
	// colorMode: 'dark',
	navbar: [
		// NavbarItem
		{
			text: '首页',
			link: '/',
		},
		// NavbarGroup
		{
			text: 'JS',
			children: ['/js/ESMandCJS.md'],
		},
		// 字符串 - 页面文件路径
		//'/bar/README.md',
	],
	logo: '/images/logo.png',
	repo: 'Gavrain/myVuePress',
	sidebar: 'auto',
	editLink: false,
	lastUpdatedText: '上次更新于',
	notFound: ['没这个东西', '走错了吧'],
	backToHome: '返回首页'
})

let userConfig = {
	base: '/',
	lang: 'zh-CN',
	title: 'Gavrain的笔记本',
	description: `Gavrain's VuePressSite`,
	head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
	theme,
	pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']
}

module.exports = userConfig