import { createCategorySlug } from './slug';

/** 全站路由的唯一出处，页面与组件统一从这里取链接 */
export const routes = {
  home: () => '/',
  /** 首页分页：第 1 页即首页，其余为 /page/N/ */
  page: (n: number) => (n <= 1 ? '/' : `/page/${n}/`),
  articles: () => '/articles/',
  /** 文章归档分页：第 1 页即 /articles/，其余为 /articles/page/N/ */
  articlesPage: (n: number) => (n <= 1 ? '/articles/' : `/articles/page/${n}/`),
  article: (number: number) => `/articles/${number}/`,
  categories: () => '/categories/',
  category: (name: string) => `/categories/${createCategorySlug(name)}/`,
  seriesList: () => '/series/',
  series: (id: string) => `/series/${id}/`,
  weeklyList: () => '/weekly/',
  weekly: (slug: string) => `/weekly/${slug}/`,
  rss: () => '/rss.xml',
  weeklyRss: () => '/weekly/rss.xml',
  about: () => '/about/',
};
