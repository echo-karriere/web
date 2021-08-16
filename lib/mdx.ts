import { promises as fs } from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import { remarkMdxImages } from "remark-mdx-images";

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

export interface FrontMatter {
  title: string;
  description?: string;
  draft?: boolean;
  published?: boolean;
}

export interface MdxContent {
  mdx: string;
  frontMatter: FrontMatter;
}

export const findNewsFromSlug = async (slug: string): Promise<string> => {
  const posts = await allContentByType("news");
  const combined = postPathsToSlugs(posts);
  const post = combined.find((p) => p.slug == slug);

  if (post === undefined) {
    throw new Error("Could not find news");
  }

  return post.path;
};

export const postPathsToSlugs = (posts: string[]): Array<{ path: string; slug: string }> => {
  const slugs = posts.map((p) => p.replace(/\.mdx$/, "").replace(/\d{4}-\d{2}-\d{2}-/, "")).map((slug) => slug);
  const combined = posts.map((p, i) => ({ slug: slugs[i], path: p }));

  return combined;
};

export const pagePathsToSlug = (pages: string[]): string[] => {
  return pages.map((p) => removeMDXExtension(p));
};

const readAndBundleMdx = async (
  slug: string,
  type: ContentType,
): Promise<{ code: string; frontmatter: FrontMatter }> => {
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
    frontmatter: frontmatter as FrontMatter,
  };
};

export const allContentByType = async (type: ContentType): Promise<string[]> => {
  const path = CONTENT_MAP[type];
  const content = await fs.readdir(path);

  const paths = [];

  for (const p of content) {
    const itemPath = contentPathByPath(p, type);
    const { frontmatter } = await readAndBundleMdx(itemPath, type);

    if (!frontmatter.published) {
      continue;
    } else {
      paths.push(p);
    }
  }

  return paths;
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

export const renderMDX = async (slug: string, type: ContentType): Promise<MdxContent> => {
  const itemPath = contentPathByPath(slug, "page");
  const { code, frontmatter } = await readAndBundleMdx(itemPath, type);

  return {
    mdx: code,
    frontMatter: frontmatter as FrontMatter,
  };
};
