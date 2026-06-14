"use client";

import Link from "next/link";

const footerNavigation = {
  navigate: {
    title: "Navigasi",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
    ],
  },
  connect: {
    title: "Terhubung",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/kevinalvarel",
        external: true,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/kevinalvarel",
        external: true,
      },
      {
        name: "Email",
        href: "mailto:hello@kevinalvarel.dev",
        external: true,
      },
    ],
  },
};

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background rounded-t-3xl">
      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Main footer content */}
      <div className="relative bg-background">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, var(--foreground) 6%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-8">
          {/* Top section: Brand + Navigation */}
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
            {/* Brand column */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:max-w-xs">
              <Link href="/" className="group inline-flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-foreground transition-opacity duration-300 group-hover:opacity-70">
                  Muhammad Kevin Alvarel
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Software Engineer &amp; Informatics student at Universitas
                Al-Khairiyah, passionate about{" "}
                <span className="font-medium text-foreground">
                  Front-End Engineering
                </span>{" "}
                and <span className="font-medium text-foreground">AI/ML</span>.
              </p>
            </div>

            {/* Navigation columns */}
            <div className="flex gap-16 sm:gap-24">
              {Object.values(footerNavigation).map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col items-center md:items-start"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name} className="text-center md:text-left">
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link relative inline-flex text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                          >
                            <span className="relative">
                              {link.name}
                              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 transition-all duration-300 group-hover/link:w-full" />
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group/link relative inline-flex text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                          >
                            <span className="relative">
                              {link.name}
                              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 transition-all duration-300 group-hover/link:w-full" />
                            </span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Big name watermark */}
          <div className="my-4 flex items-center justify-center select-none overflow-hidden">
            <span
              className="whitespace-nowrap text-[clamp(3rem,12vw,9rem)] font-bold tracking-tighter leading-none text-foreground/[0.04]"
              aria-hidden="true"
            >
              THANK YOU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
