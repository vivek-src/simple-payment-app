const Footer = ({
  logo = {
    src: "/logo.png",
    alt: "logo",
    title: "Payment App",
    url: "/",
  },
  tagline = "Your Money, Your Way.",
  menuItems = [
    {
      title: "Menu",
      links: [
        { text: "Home", url: "/" },
        { text: "Send Money", url: "#" },
        { text: "About Us", url: "#" },
        { text: "Contact Us", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
}) => {
  return (
    <section className="mt-20 p-5 md:p-30 border-t">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url} className="flex items-center gap-2 px-10">
                <img
                    src={logo.src}
                    className="max-h-8 dark:invert"
                    alt={logo.alt}
                />
                <span className="text-lg font-semibold tracking-tighter">
                    {logo.title}
                </span>
                </a>
              </div>
              <p className="px-10 mt-4 font-semibold">{tagline}</p>
               <p className="px-10 text-sm text-muted-foreground">{copyright}</p>
            </div>
            <{menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
