import { promises as fs } from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import { remarkMdxImages } from "remark-mdx-images";

import { Content, NewsContent, NewsItem } from "@/lib/types";

const CONTENT_PATH = path.join(path.resolve("."), "content");
export const NEWS_PATH = path.join(CONTENT_PATH, "news");
export const PAGES_PATH = path.join(CONTENT_PATH, "pages");
export const STUDENT_PATH = path.join(PAGES_PATH, "for-studenter");
export const COMPANY_PATH = path.join(PAGES_PATH, "for-bedrifter");

type ContentType = "page" | "news" | "students" | "companies";

const CONTENT_MAP = {
  news: NEWS_PATH,
  page: PAGES_PATH,
  students: STUDENT_PATH,
  companies: COMPANY_PATH,
};

export interface MdxContent<T> {
  mdx: string;
  frontMatter: T;
}

export const pagePathsToSlug = (pages: string[]): string[] => {
  return pages.map((p) => removeMDXExtension(p));
};

const readAndBundleMdx = async <T>(slug: string, type: ContentType): Promise<{ code: string; frontmatter: T }> => {
  const file = path.parse(slug).name;
  const content = await fs.readFile(slug);
  const { code, frontmatter } = await bundleMDX(content.toString(), {
    cwd: esbuildCwd(type),
    xdmOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: path.join(path.resolve("."), `public/images/${type}/${file}`),
      loader: {
        ...options.loader,
        ".png": "file",
        ".jpg": "file",
        ".svg": "file",
      },
      publicPath: `images/${type}/${file}`,
      write: true,
    }),
  });

  return {
    code,
    frontmatter: frontmatter as T,
  };
};

export const allContentByType = async <T extends Content>(type: ContentType): Promise<(T & { path: string })[]> => {
  const path = CONTENT_MAP[type];
  const content = await fs.readdir(path);

  const out = [];

  for (const p of content) {
    if (p.startsWith(".")) continue;
    const itemPath = contentPathByPath(p, type);
    const { frontmatter } = await readAndBundleMdx<T>(itemPath, type);

    if (!frontmatter.published) {
      continue;
    } else {
      out.push({ ...frontmatter, path: p });
    }
  }

  return out;
};

const removeMDXExtension = (filePath: string): string => {
  return filePath.replace(/\.mdx$/, "");
};

export const contentPathByPath = (slug: string, type: ContentType): string => {
  const filePath = removeMDXExtension(slug);
  switch (type) {
    case "page":
      return path.join(PAGES_PATH, `${filePath}.mdx`);
    case "news":
      return path.join(NEWS_PATH, `${filePath}.mdx`);
    case "students":
      return path.join(STUDENT_PATH, `${filePath}.mdx`);
    case "companies":
      return path.join(COMPANY_PATH, `${filePath}.mdx`);
  }
};

const esbuildCwd = (type: ContentType): string => {
  switch (type) {
    case "page":
      return PAGES_PATH;
    case "news":
      return NEWS_PATH;
    case "students":
      return STUDENT_PATH;
    case "companies":
      return COMPANY_PATH;
  }
};

export const renderMDX = async <T extends Content>(slug: string, type: ContentType): Promise<MdxContent<T>> => {
  const itemPath = contentPathByPath(slug, type);
  const { code, frontmatter } = await readAndBundleMdx(itemPath, type);

  return {
    mdx: code,
    frontMatter: frontmatter as T,
  };
};

export const renderNewsItem = async (slug: string[]): Promise<MdxContent<NewsContent>> => {
  const items = await allContentByType<NewsContent>("news");
  const item = items.find((i) => i.slug === slug[1]);

  if (item === undefined) {
    throw new Error("Could not find news item");
  }

  return renderMDX(item.path, "news");
};

export const getNews = async (): Promise<NewsItem[]> => {
  const items = await allContentByType<NewsContent>("news");
  items.sort((a, b) => b.date.getTime() - a.date.getTime());

  const news = items.map((i) => ({
    title: i.title,
    path: `/nyheter/${i.date.getFullYear()}/${i.slug}`,
    date: i.date.toISOString(),
    prettyDate: i.date.toLocaleDateString("no-NB", { day: "2-digit", month: "long", year: "numeric" }),
    excerpt: i.description,
  }));

  return news;
};
