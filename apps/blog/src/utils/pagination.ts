/** 首页分页：每页文章数 */
export const PAGE_SIZE = 5;

/**
 * 分页器要展示的页码序列：数字为页码，'…' 表示省略的区间。
 * 页数较少时全部展示；页数较多时只展示首尾两页与当前页前后一页，中间以省略号连接。
 */
export function getPageNumbers(
  current: number,
  total: number,
): (number | '…')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const shown = new Set([1, total, current - 1, current, current + 1]);
  const pages = [...shown]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);
  const result: (number | '…')[] = [];
  let prev = 0;
  for (const n of pages) {
    if (n - prev > 1) result.push('…');
    result.push(n);
    prev = n;
  }
  return result;
}
