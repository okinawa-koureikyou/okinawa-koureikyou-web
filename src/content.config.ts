import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  // src/content/news フォルダ内の Markdown ファイルを自動読み込み
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().default('お知らせ'),
    isImportant: z.boolean().default(false),
  }),
});

export const collections = { news };
