import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/ui/CTABanner";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { posts, getPost, readingMinutes, type BlogSection } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="pt-36 pb-10 md:pt-44">
          <Container size="narrow">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-clay-600"
            >
              <Icon name="arrow" className="size-4 rotate-180" />
              All articles
            </Link>

            <h1 className="mt-6 text-[2rem] leading-[1.1] sm:text-[2.75rem]">
              {post.title}
            </h1>
            {post.standfirst && (
              <p className="mt-5 text-xl leading-relaxed text-ink">
                {post.standfirst}
              </p>
            )}
            <p className="mt-5 text-sm text-ink-muted">
              {readingMinutes(post)} min read
            </p>
          </Container>
        </header>

        <Container size="narrow">
          <div className="relative aspect-2/1 overflow-hidden rounded-2xl bg-mist">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              sizes="(min-width: 760px) 760px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>

        <Container size="narrow" className="pb-20 md:pb-28">
          <div className="mt-12 space-y-5 text-lg leading-relaxed text-ink-muted">
            {post.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {/* Numbered, because the articles are written as lists */}
          <ol className="mt-14 space-y-12">
            {post.sections.map((section, index) => (
              <li key={section.heading}>
                <h2 className="text-[1.5rem] leading-snug sm:text-[1.75rem]">
                  <span className="mr-3 text-clay-500">{index + 1}.</span>
                  {section.heading}
                </h2>
                <Body section={section} />
              </li>
            ))}
          </ol>

          {post.outro && (
            <div className="mt-16 rounded-2xl bg-sand-50 p-8 ring-1 ring-sand-200">
              <h2 className="text-[1.5rem] leading-snug sm:text-[1.75rem]">
                {post.outro.heading}
              </h2>
              <Body section={post.outro} />
            </div>
          )}
        </Container>
      </article>

      <CTABanner
        heading={post.cta?.heading ?? "Rather hear it in person?"}
        body={
          post.cta?.body ??
          "Every one of these stories is one we tell on the walk. Come and see them where they happened."
        }
        primary={{ label: "Explore Tours", href: "/tours" }}
        secondary={{ label: "Get in Touch", href: "/contact" }}
      />

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="text-[1.75rem] sm:text-[2rem]">Keep reading</h2>
          <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {more.map((other) => (
              <li key={other.slug}>
                <Link href={`/blog/${other.slug}`} className="group block">
                  <p className="text-sm text-ink-muted">
                    {readingMinutes(other)} min read
                  </p>
                  <h3 className="mt-2 text-xl leading-snug transition-colors group-hover:text-clay-600">
                    {other.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {other.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

function Body({ section }: { section: BlogSection }) {
  return (
    <>
      <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-muted">
        {section.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      {section.list && (
        <ul className="mt-5 space-y-2 text-lg leading-relaxed text-ink-muted">
          {section.list.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-clay-400">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
