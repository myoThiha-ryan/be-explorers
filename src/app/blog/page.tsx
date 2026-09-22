import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/ui/CTABanner";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { posts, readingMinutes } from "@/content/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, history and practical advice for visiting London, written by ${site.guide}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="London, one street at a time"
        intro="Practical advice for a first visit, and the stories behind the streets — written by the guide who walks them."
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col">
                  <Link
                    href={`/blog/${post.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-4/3 w-full overflow-hidden rounded-2xl bg-mist"
                  >
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      priority={index < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col pt-6">
                    <p className="text-sm text-ink-muted">
                      {readingMinutes(post)} min read
                    </p>

                    <h2 className="mt-2 text-2xl leading-snug">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-clay-600 focus-visible:text-clay-600"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 leading-relaxed text-black">
                      {post.summary}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy-800 transition-colors hover:text-clay-600 sm:mt-auto sm:pt-6"
                    >
                      Read the article
                      <Icon
                        name="arrow"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner
        heading="Rather hear it in person?"
        body="Every one of these stories is one we tell on the walk. Come and see them where they happened."
        primary={{ label: "Explore Tours", href: "/tours" }}
        secondary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
