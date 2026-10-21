import sql from "better-sqlite3";
import type { NewsItem } from "@/components/news-list";

const db = sql("data.db");

export async function getAllNews(): Promise<NewsItem[]> {
  const news = db.prepare<[], NewsItem>("SELECT * FROM news").all();
  await new Promise(resolve => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  const newsItem = db.prepare<[string], NewsItem>("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export function getLatestNews(): NewsItem[] {
  return db
    .prepare<[], NewsItem>("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
}

export function getAvailableNewsYears(): number[] {
  const rows = db
    .prepare<[], { year: string }>(
      "SELECT DISTINCT strftime('%Y', date) AS year FROM news ORDER BY year DESC"
    )
    .all();

  return rows.map((row) => Number(row.year));
}

export function getAvailableNewsMonths(year: string | number): number[] {
  const rows = db
    .prepare<[string], { month: string }>(
      "SELECT DISTINCT strftime('%m', date) AS month FROM news WHERE strftime('%Y', date) = ? ORDER BY month DESC"
    )
    .all(String(year));

  return rows.map((row) => Number(row.month));
}

export function getNewsForYear(year: string | number): NewsItem[] {
  return db
    .prepare<[string], NewsItem>(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(String(year));
}

export function getNewsForYearAndMonth(year: string | number, month: string | number): NewsItem[] {
  return db
    .prepare<[string, string], NewsItem>(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(String(year), String(month).padStart(2, "0"));
}
