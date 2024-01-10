import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	integrations: [
		starlight({
			title: 'BSDWIKI',
			components: {
				// 重写默认的 `SocialIcons` 组件。
				Footer: './src/components/ConditionalFooter.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			  },
			editLink: {
    			baseUrl: 'https://github.com/bsdwiki/bsdwiki/edit/main/',
  			},
			social: {
				github: 'https://github.com/bsdwiki',
				email: 'mailto:sam@bsd.wiki',
			},
			sidebar: [
				{
					label: 'FreeBSD 从入门到跑路',

					items: [
						 //Each item here is one entry in the navigation menu.
						 { label: '社区介绍', link: '/guides/introduction/' },
					],
				},
				
				{
					label: '第一章 走进 FreeBSD',
					autogenerate: { directory: 'di-1-zhang-zou-jin-freebsd' },
				},
				
				{
					label: '第二章 安装 FreeBSD',
					autogenerate: { directory: 'di-2-zhang-an-zhuang-freebsd' },
				},
				
				{
					label: '第三章 软件源及包管理器',
					autogenerate: { directory: 'di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi' },
				},
				
				{
					label: '第四章 桌面安装',
					autogenerate: { directory: 'di-4-zhang-zhuo-mian-an-zhuang' },
				},
				
				{
					label: '第五章 输入法及常用软件',
					autogenerate: { directory: 'di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian' },
				},
				
				{
					label: '第六章 文件系统与磁盘管理',
					autogenerate: { directory: 'di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li' },
				},
				
				{
					label: '第七章 VPN与代理',
					autogenerate: { directory: 'di-7-zhang-vpn-yu-dai-li' },
				},
				
				{
					label: '第八章 用户与权限',
					autogenerate: { directory: 'di-8-zhang-yong-hu-yu-quan-xian' },
				},
				
				{
					label: '第九章 jail	',
					autogenerate: { directory: 'di-9-zhang-jail' },
				},
				
				{
					label: '第十章 虚拟化',
					autogenerate: { directory: 'di-10-zhang-xu-ni-hua' },
				},
				
				{
					label: '第十一章',
					autogenerate: { directory: 'di-11-zhang-geng-xin-yu-sheng-ji-freebsd' },
				},
				
				{
					label: '第十二章',
					autogenerate: { directory: 'di-12-zhang-geom-cun-chu-kuang-jia' },
				},
				
				{
					label: '第十三章',
					autogenerate: { directory: 'di-13-zhang-dtrace' },
				},
				
				{
					label: '第十四章',
					autogenerate: { directory: 'di-14-zhang-wang-luo-guan-li' },
				},
				
				{
					label: '第十五章',
					autogenerate: { directory: 'di-15-zhang-freebsd-fang-huo-qiang' },
				},
				
				{
					label: '第十六章',
					autogenerate: { directory: 'di-16-zhang-fu-wu-qi' },
				},
				
				{
					label: '第十七章',
					autogenerate: { directory: 'di-17-zhang-wang-luo-fu-wu-qi' },
				},
				
				{
					label: '第十八章',
					autogenerate: { directory: 'di-18-zhang-shu-mei-pai-yu-riscv' },
				},
				
				{
					label: '第十九章',
					autogenerate: { directory: 'di-19-zhang-wen-xue-gu-shi' },
				},
				
				{
					label: '第二十章',
					autogenerate: { directory: 'di-20-zhang-yu-le-yu-jiao-yu' },
				},
			],
		}),
	],
});
