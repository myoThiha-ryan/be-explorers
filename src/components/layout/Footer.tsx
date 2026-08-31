import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { languages, legalNav, mainNav, site, socials } from "@/content/site";

const footerNav = mainNav.filter((item) => item.href !== "/");

export function Footer() {
  return (
    <footer id="site-footer" className="border-t border-line bg-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed text-ink-muted">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] text-navy-800 underline-offset-4 hover:underline"
            >
              <Icon name="mail" className="size-4" />
              {site.email}
            </a>
          </div>

          <FooterColumn title="Explore">
            {footerNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Languages">
            {languages.map((language) => (
              <li key={language.code}>
                <span
                  className={
                    // Myanmar glyphs are tall; give the line room so they don't
                    // collide with neighbouring rows.
                    language.script === "myanmar"
                      ? "font-my block leading-8 text-ink-muted"
                      : "text-ink-muted"
                  }
                >
                  {language.native}
                </span>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Follow">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-navy-800"
                >
                  <Icon
                    name={social.label.toLowerCase() as IconName}
                    className="size-4"
                  />
                  {social.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BeExplorers · {site.city}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-navy-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-[0.9375rem]">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-ink-muted transition-colors hover:text-navy-800"
      >
        {children}
      </Link>
    </li>
  );
}
