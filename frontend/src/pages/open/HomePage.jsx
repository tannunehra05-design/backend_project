const menu = [
  {
    icon: "☕",
    title: "Chai & coffee",
    description: "Adrak chai, filter coffee, cold coffee and more.",
    price: "Starting at ₹30",
  },
  {
    icon: "🥪",
    title: "Quick bites",
    description: "Toasty sandwiches, loaded fries and easy favourites.",
    price: "Starting at ₹79",
  },
  {
    icon: "🍝",
    title: "Café classics",
    description: "Pastas, pizzas and satisfying meals for the table.",
    price: "Starting at ₹129",
  },
  {
    icon: "🍰",
    title: "Something sweet",
    description: "Fresh bakes and little treats for the last bite.",
    price: "Starting at ₹59",
  },
];
const features = [
  ["Fresh, always", "Made to order, just for you."],
  ["Easy on the pocket", "Good times without the big bill."],
  ["Room for everyone", "Friends, family or a solo chai."],
  ["Come as you are", "Your table is ready."],
];
const Button = ({ children, href = "#visit", dark = false }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-bold transition hover:-translate-y-0.5 ${dark ? "bg-pine text-white hover:bg-pine-light" : "bg-orange text-white hover:bg-orange-dark"}`}
  >
    {children}
  </a>
);
const Eyebrow = ({ children }) => (
  <div className="eyebrow flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.17em] text-orange">
    {children}
  </div>
);
const Brand = () => (
  <a
    className="flex items-center gap-3 font-bold tracking-[.07em] text-pine"
    href="#home"
  >
    <span className="grid size-10 place-items-center rounded-full bg-pine font-serif text-[21px] text-cream">
      C
    </span>
    <span>
      CAFE CLASSIC
      <small className="mt-0.5 block text-[9px] tracking-[.25em] text-stone">
        YOUR NEIGHBOURHOOD CAFÉ
      </small>
    </span>
  </a>
);

export default function App() {
  return (
    <>
      <div className="bg-pine px-4 py-2.5 text-center text-xs tracking-wide text-cream">
        Good food. Great chai. Your kind of adda.{" "}
        <span className="px-1">·</span> Drop in today!
      </div>
      <header className="mx-auto flex h-[78px] w-[min(1160px,calc(100%-48px))] items-center justify-between max-sm:h-[68px] max-sm:w-[calc(100%-34px)]">
        <Brand />
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-8 text-[13px] font-semibold max-sm:gap-3"
        >
          <a className="hover:text-orange max-[850px]:hidden" href="#menu">
            Menu
          </a>
          <a className="hover:text-orange max-[850px]:hidden" href="#story">
            Our story
          </a>
          <a className="hover:text-orange max-[850px]:hidden" href="#visit">
            Find us
          </a>
          <Button>
            Visit us <span>↗</span>
          </Button>
        </nav>
      </header>
      <main>
        <section className="mx-auto w-[min(1160px,calc(100%-48px))] py-9 pb-[70px] max-sm:w-[calc(100%-34px)] max-sm:py-5 max-sm:pb-12">
          <div className="grid min-h-[495px] grid-cols-[1.03fr_.97fr] items-center gap-12 max-[850px]:gap-6 max-sm:grid-cols-1 max-sm:gap-8">
            <div>
              <Eyebrow>A little pause, a lot of warmth</Eyebrow>
              <h1 className="my-5 font-serif text-[clamp(48px,6vw,76px)] font-bold leading-[1.04] tracking-[-.04em] text-pine max-sm:text-[54px]">
                Chai. Coffee.
                <br />
                <em className="not-italic text-orange">Apna adda.</em>
              </h1>
              <p className="mb-7 max-w-[450px] text-base leading-7 text-muted max-sm:text-sm">
                From that first cutting chai to one more plate for the table,
                there’s always room for you at Cafe Classic.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="#menu" dark>
                  Explore the menu <span>→</span>
                </Button>
                <a
                  className="border-b border-stone/50 py-2 text-[13px] font-bold text-pine"
                  href="#visit"
                >
                  Come on in&nbsp; ↗
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2.5 text-xs text-muted">
                <span className="tracking-[2px] text-amber-600">★★★★★</span>
                <span>
                  <strong className="text-ink">
                    Loved by the neighbourhood
                  </strong>
                  <br />
                  Good food, good company, every day.
                </span>
              </div>
            </div>
            <div className="hero-visual relative grid min-h-[430px] place-items-center overflow-hidden rounded-t-[220px] rounded-b-[18px] max-sm:min-h-[350px]">
              <div className="visual-tag absolute left-5 top-[76px] max-sm:top-[55px]">
                ☕ &nbsp;Made fresh<strong>Every single time</strong>
              </div>
              <div className="saucer absolute bottom-[74px] max-sm:bottom-[58px]" />
              <div className="cup relative z-[1] translate-y-20 max-sm:translate-y-[62px]" />
              <div className="visual-tag absolute bottom-[47px] right-[18px] max-sm:bottom-[30px]">
                A seat for everyone<strong>Bas aa jao!</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-[76px] max-sm:py-14" id="menu">
          <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-34px)]">
            <div className="mx-auto mb-[38px] max-w-[620px] text-center">
              <Eyebrow>
                <span className="mx-auto">Made for your cravings</span>
              </Eyebrow>
              <h2 className="my-3.5 font-serif text-[clamp(32px,4vw,46px)] font-bold leading-tight text-pine">
                Your favourites, served fresh
              </h2>
              <p className="text-sm leading-7 text-muted">
                Comfort food, familiar flavours, and the perfect cup. There’s
                something for every kind of break.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 max-[850px]:grid-cols-2 max-sm:gap-2.5">
              {menu.map((item) => (
                <article
                  className="rounded-2xl border border-line bg-[#fffefa] p-[22px_20px] transition hover:-translate-y-1 hover:shadow-lg max-sm:p-[17px_14px]"
                  key={item.title}
                >
                  <div className="mb-5 grid size-[54px] place-items-center rounded-2xl bg-[#f6ead8] text-[26px]">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-serif text-[19px] font-bold text-pine">
                    {item.title}
                  </h3>
                  <p className="mb-4 min-h-10 text-xs leading-5 text-muted max-sm:min-h-[58px]">
                    {item.description}
                  </p>
                  <div className="text-xs font-bold text-orange">
                    {item.price}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-[30px] text-center">
              <a
                className="border-b border-stone/50 py-2 text-[13px] font-bold text-pine"
                href="#visit"
              >
                See what’s brewing at your nearest Cafe Classic&nbsp; →
              </a>
            </div>
          </div>
        </section>
        <section className="py-[76px] max-sm:py-14" id="story">
          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[.9fr_1.1fr] items-center gap-[70px] max-[850px]:gap-9 max-sm:w-[calc(100%-34px)] max-sm:grid-cols-1 max-sm:gap-7">
            <div className="why-art relative grid min-h-[360px] place-items-center overflow-hidden rounded-[18px] max-[850px]:min-h-[300px] max-sm:min-h-[270px]">
              <div className="text-[142px] drop-shadow-xl">☕</div>
              <div className="absolute bottom-[22px] left-[22px] rounded-[10px] bg-[#fffdf0] px-4 py-3 text-[11px] font-bold text-pine">
                A proper break, made simple ✦
              </div>
            </div>
            <div>
              <Eyebrow>More than just a café</Eyebrow>
              <h2 className="my-3 font-serif text-[42px] font-bold leading-[1.1] text-pine max-sm:text-4xl">
                Your everyday adda
                <br />
                is waiting.
              </h2>
              <p className="mb-6 text-sm leading-7 text-muted">
                Some plans need a place. Some days just need good chai. Cafe
                Classic brings people together over familiar food, warm service
                and the kind of vibe that makes you stay a little longer.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {features.map(([title, text]) => (
                  <div
                    className="flex gap-3 text-xs leading-5 text-muted"
                    key={title}
                  >
                    <span className="grid size-[25px] shrink-0 place-items-center rounded-full bg-[#e7efe5] font-bold text-pine">
                      ✓
                    </span>
                    <span>
                      <strong className="block text-[13px] text-ink">
                        {title}
                      </strong>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-pine py-[62px] text-cream" id="visit">
          <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] items-center justify-between gap-[30px] max-sm:w-[calc(100%-34px)] max-sm:flex-col max-sm:items-start">
            <div>
              <Eyebrow>Your table is calling</Eyebrow>
              <h2 className="my-2.5 font-serif text-[38px] font-bold leading-tight max-sm:text-[34px]">
                Meet you at Cafe Classic?
              </h2>
              <p className="text-[13px] leading-6 text-[#d0d8ce]">
                Drop by for a quick cup or make an evening of it.
                <br />
                We’ll keep the chai warm.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#f0a05f] px-6 py-3.5 text-[13px] font-bold text-[#2b291f] transition hover:-translate-y-0.5"
              href="https://maps.google.com/?q=Cafe+Classic"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span>↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-[#103020] py-[30px] text-[11px] text-[#c7d0c6]">
        <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] items-center justify-between gap-5 max-sm:w-[calc(100%-34px)] max-sm:flex-col max-sm:items-start">
          <Brand />
          <span>Chai. Coffee. Apna adda. &nbsp;·&nbsp; © Cafe Classic</span>
          <span>Good food tastes better together.</span>
        </div>
      </footer>
      <a
        className="fixed bottom-3 left-3.5 right-3.5 z-10 hidden justify-center rounded-full bg-orange px-6 py-3.5 text-center text-[13px] font-bold text-white shadow-xl max-sm:flex"
        href="#visit"
      >
        Find your Cafe Classic&nbsp; ↗
      </a>
    </>
  );
}
