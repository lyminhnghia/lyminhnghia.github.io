import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ArticleItem } from "@/registry/blocks/blog-01/components/article-item"

export default function Blog01() {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="ml-4 font-heading text-4xl leading-snug font-medium tracking-tight md:text-5xl">
        Blog
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <a key={article.id} className="block h-full" href="#">
            <ArticleItem
              title={article.title}
              coverUrl={article.coverUrl}
              createdAt={article.createdAt}
            />
          </a>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="gap-2 pr-2.5 pl-3" asChild>
          <a href="#">
            View All
            <ArrowRightIcon />
          </a>
        </Button>
      </div>
    </div>
  )
}

type Article = {
  id: string
  title: string
  coverUrl: string
  createdAt: string
}

const articles: Article[] = [
  {
    id: "1",
    title:
      "Apple unveils iPhone 17 Pro: Aluminum frame returns, new colors, upgraded camera",
    coverUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    createdAt: "2025-09-13",
  },
  {
    id: "2",
    title:
      'While the world is expecting AGI, François Chollet is showing just how "naive" AI can be',
    coverUrl:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
    createdAt: "2025-04-21",
  },
  {
    id: "3",
    title:
      "Apple introduces iPhone 16e: A powerful new model for the iPhone 16 lineup",
    coverUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    createdAt: "2025-02-20",
  },
  {
    id: "4",
    title:
      "Apple unveils MacBook Pro M4: Same design, base model now with 16GB RAM, priced from $1,599",
    coverUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    createdAt: "2024-10-31",
  },
  {
    id: "5",
    title:
      "Apple unveils new Mac mini M4: Smaller, 16GB RAM on the base model, priced from $599",
    coverUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
    createdAt: "2024-10-31",
  },
  {
    id: "6",
    title:
      "Apple unveils iMac M4: Unchanged design, more powerful M4 chip, RAM starts at 16GB, priced from $1,299",
    coverUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    createdAt: "2024-10-29",
  },
]
