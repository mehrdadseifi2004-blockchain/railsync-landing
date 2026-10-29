"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Headset,
  LockKeyhole,
  Moon,
  ShieldCheck,
  Sun,
  TrainFront,
  X,
  Zap,
} from "lucide-react";

const faqs = [
  {
    q: "آیا RailSync خودش بلیت را خریداری می‌کند؟",
    a: "دستیار رجا جست‌وجو و مراحل پیکربندی‌شده رزرو را خودکار می‌کند و فرایند را تا مرحله تعریف‌شده در محصول پیش می‌برد. جزئیات نهایی و نیاز به تأیید کاربر، مطابق تنظیمات و مراحل سایت رجا خواهد بود.",
  },
  {
    q: "برای استفاده از نرم‌افزار چطور حساب کاربری تهیه کنم؟",
    a: "برای دریافت نام کاربری و اطلاع از شرایط فعال‌سازی، از طریق بخش تماس با ما با تیم فروش ارتباط بگیرید. دسترسی به بخش ورود و ادامه فرایند، به داشتن حساب کاربری معتبر نیاز دارد.",
  },
  {
    q: "این ابزار برای چه کسانی طراحی شده است؟",
    a: "مخاطب اصلی، آژانس‌ها و شرکت‌های مسافرتی هستند که می‌خواهند کارهای تکراری جست‌وجو و ورود اطلاعات مسافران را کاهش دهند.",
  },
  {
    q: "چطور دمو یا مشاوره سازمانی بگیرم؟",
    a: "از دکمه درخواست دمو استفاده کنید یا از راه‌های ارتباطی درج‌شده در سایت پیام بدهید تا درباره نیاز مجموعه و شرایط تهیه حساب راهنمایی شوید.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const productImages = [
    {
      src: "/product/raja-home.webp",
      alt: "نمای واقعی افزونه دستیار رجا در کنار وب‌سایت رجا",
      caption: "نمای اصلی افزونه دستیار رجا",
    },
    {
      src: "/product/raja-search.webp",
      alt: "اسکرین‌شات واقعی تنظیمات افزونه دستیار رجا",
      caption: "تنظیمات جست‌وجو و افزونه",
    },
    {
      src: "/product/raja-booking.webp",
      alt: "اسکرین‌شات واقعی مرحله‌ای از فرایند رزرو رجا",
      caption: "نمای فرایند رزرو",
    },
  ];

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImageIndex(null);

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) =>
          current === null
            ? null
            : (current + productImages.length - 1) % productImages.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) =>
          current === null ? null : (current + 1) % productImages.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, productImages.length]);

  return (
    <main className={dark ? "site dark" : "site"}>
      <div className="announcement">
        <span className="pulse" /> راهکار اتوماسیون بلیت رجا برای آژانس‌های
        مسافرتی <span className="announcement-tag">نسخه قابل فروش</span>
      </div>
      <header className="nav wrap">
        <a href="#top" className="brand" aria-label="RailSync">
          <span className="brand-mark">
            <TrainFront size={22} />
          </span>
          <span className="brand-name">
            Rail<span>Sync</span>
            <small>RAIL TICKET ASSISTANT</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#features">امکانات</a>
          <a href="#product">دریافت فایل</a>
          <a href="#pricing">دریافت دسترسی</a>
          <a href="#faq">سؤالات متداول</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="تغییر تم"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn btn-dark nav-cta" href="#contact">
            درخواست دمو <ArrowLeft size={16} />
          </a>
        </div>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-icon">
              <Zap size={14} />
            </span>{" "}
            دستیار حرفه‌ای رزرو بلیت قطار
          </div>
          <h1>
            برای پیدا کردن بلیت،
            <br />
            <span>زودتر آماده باش.</span>
          </h1>
          <p className="hero-lead">
            RailSync، دستیار رجا برای آژانس‌هایی که زمان و سرعت عمل در فروش بلیت
            برایشان مهم است؛ جست‌وجوی خودکار، اطلاعات مسافر آماده و فرایندی
            منظم‌تر.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              دریافت حساب کاربری <ArrowLeft size={17} />
            </a>
            <button
              type="button"
              className="btn btn-soft"
              onClick={() => setActiveImageIndex(0)}
            >
              مشاهده محصول <ArrowUpLeft size={17} />
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-icon">
              <ShieldCheck size={18} />
            </div>
            <div>
              <b>مخصوص فرایند رزرو رجا</b>
              <span>طراحی‌شده برای استفاده حرفه‌ای و روزمره</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-label">
            <span className="live-dot" /> محیط واقعی محصول
          </div>
          <div className="screen-frame">
            <div className="screen-top">
              <span className="traffic">
                <i />
                <i />
                <i />
              </span>
              <span className="screen-address">raja.ir / جست‌وجوی بلیت</span>
              <span className="screen-chip">RailSync</span>
            </div>
            <button
              type="button"
              className="image-open-trigger hero-image-trigger"
              onClick={() => setActiveImageIndex(0)}
              aria-label="بزرگ‌نمایی نمای اصلی افزونه"
            >
              <Image
                src="/product/raja-home.webp"
                alt="نمای واقعی افزونه دستیار رجا در کنار وب‌سایت رجا"
                width={1280}
                height={720}
                priority
                className="product-shot"
              />
            </button>
            <div className="floating-status">
              <span className="status-icon">
                <Check size={17} />
              </span>
              <div>
                <b>آماده برای بررسی</b>
                <small>تنظیمات جست‌وجو در دسترس است</small>
              </div>
              <span className="status-pill">فعال</span>
            </div>
          </div>
          <div className="float-card float-card-top">
            <span className="mini-icon">
              <Clock3 size={16} />
            </span>
            <div>
              <b>بررسی پیوسته</b>
              <small>طبق بازه تنظیم‌شده</small>
            </div>
          </div>
          <div className="float-card float-card-bottom">
            <span className="mini-icon mini-icon-light">
              <Check size={16} />
            </span>
            <div>
              <b>اطلاعات مسافر</b>
              <small>آماده تکمیل خودکار</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip wrap">
        <div>
          <span className="strip-icon">
            <TrainFront size={18} />
          </span>
          <b>متمرکز بر رجا</b>
          <small>فرایند متناسب با سایت مقصد</small>
        </div>
        <div>
          <span className="strip-icon">
            <Clock3 size={18} />
          </span>
          <b>کاهش کارهای تکراری</b>
          <small>تنظیم و بررسی با دخالت کمتر</small>
        </div>
        <div>
          <span className="strip-icon">
            <LockKeyhole size={18} />
          </span>
          <b>دسترسی حساب‌محور</b>
          <small>دریافت حساب از طریق تیم فروش</small>
        </div>
        <div>
          <span className="strip-icon">
            <Headset size={18} />
          </span>
          <b>ارتباط مستقیم</b>
          <small>هماهنگی برای تهیه دسترسی</small>
        </div>
      </section>

      <section className="section wrap" id="features">
        <div className="section-heading">
          <div>
            <div className="eyebrow">امکانات کلیدی</div>
            <h2>
              کارهای تکراری کمتر؛
              <br />
              <span>تمرکز بیشتر روی فروش.</span>
            </h2>
          </div>
          <p>
            ابزارهایی برای کمک به تیم فروش و رزرو؛ از تنظیم مسیر تا آماده‌سازی
            اطلاعات مسافر و ادامه فرایند.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-featured">
            <div className="feature-number">01 / SEARCH</div>
            <div className="feature-icon">
              <Zap size={22} />
            </div>
            <h3>جست‌وجوی خودکار بلیت</h3>
            <p>
              مبدأ، مقصد و تنظیمات بررسی را مشخص کنید تا دستیار مطابق بازه
              انتخابی، جست‌وجو را دنبال کند.
            </p>
            <div className="feature-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <small>تنظیم‌پذیر بر اساس نیاز کاربر</small>
          </article>
          <article className="feature-card">
            <div className="feature-number">02 / PASSENGERS</div>
            <div className="feature-icon">
              <Check size={22} />
            </div>
            <h3>اطلاعات مسافر آماده</h3>
            <p>
              اطلاعات از پیش تعریف‌شده را برای کاهش ورود دستی و تکراری آماده نگه
              دارید.
            </p>
            <div className="mini-passenger">
              <span className="avatar">م</span>
              <span>
                <b>پروفایل مسافر</b>
                <small>اطلاعات ذخیره‌شده</small>
              </span>
              <Check size={16} />
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-number">03 / WORKFLOW</div>
            <div className="feature-icon">
              <ArrowLeft size={22} />
            </div>
            <h3>ادامه فرایند رزرو</h3>
            <p>
              با توجه به تنظیمات محصول، مراحل بعدی رزرو را دنبال کنید و در زمان
              مناسب وارد عمل شوید.
            </p>
            <div className="steps">
              <span className="step-done">جست‌وجو</span>
              <i />
              <span className="step-done">انتخاب</span>
              <i />
              <span>ادامه</span>
            </div>
          </article>
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="wrap product-layout">
          <div className="product-copy">
            <div className="eyebrow">محصول</div>
            <h2>
              دریافت
               
              <span> فایل.</span>
            </h2>
            <p>
              رابط افزونه در کنار سایت رجا قرار می‌گیرد تا تنظیمات جست‌وجو و
              گزینه‌های مرتبط با رزرو در دسترس باشند. تصاویر زیر از محیط واقعی
              محصول تهیه شده‌اند.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} /> تنظیم مسیر و گزینه‌های بررسی
              </li>
              <li>
                <Check size={16} /> دسترسی به تنظیمات تکمیل مسافر
              </li>
              <li>
                <Check size={16} /> مشاهده فرایند در محیط سایت رجا
              </li>
            </ul>
            <div className="product-download-actions">
              <a
                className="btn btn-primary"
                href="/downloads/raja-assistant-v0.4.11-basic-release.zip"
                download="raja-assistant-v0.4.11-basic.zip"
              >
                دانلود محصول <ArrowLeft size={17} />
              </a>
              <a
                className="btn btn-soft"
                href="/downloads/raja-extension-installation-guide.txt"
                download="raja-extension-installation-guide.txt"
              >
                دانلود راهنمای نصب <ArrowLeft size={17} />
              </a>
            </div>
          </div>
          <div className="gallery">
            <figure className="gallery-main">
              <button
                type="button"
                className="image-open-trigger gallery-image-trigger"
                onClick={() => setActiveImageIndex(1)}
                aria-label="بزرگ‌نمایی تنظیمات جست‌وجو"
              >
                <Image
                  src="/product/raja-search.webp"
                  alt="اسکرین‌شات واقعی تنظیمات افزونه دستیار رجا"
                  width={1280}
                  height={720}
                />
              </button>
              <figcaption>
                <span>01</span> تنظیمات جست‌وجو و افزونه
              </figcaption>
            </figure>
            <figure className="gallery-secondary">
              <button
                type="button"
                className="image-open-trigger gallery-image-trigger"
                onClick={() => setActiveImageIndex(2)}
                aria-label="بزرگ‌نمایی نمای فرایند رزرو"
              >
                <Image
                  src="/product/raja-booking.webp"
                  alt="اسکرین‌شات واقعی مرحله‌ای از فرایند رزرو رجا"
                  width={1280}
                  height={720}
                />
              </button>
              <figcaption>
                <span>02</span> نمای فرایند رزرو
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="access-section wrap" id="pricing">
        <div className="access-card">
          <div className="access-orb" />
          <div className="access-content">
            <div className="eyebrow eyebrow-light">دریافت دسترسی</div>
            <h2>برای شروع، به حساب کاربری نیاز دارید.</h2>
            <p>
              نام کاربری و شرایط استفاده از دستیار رجا از طریق ارتباط با تیم
              فروش ارائه می‌شود. برای دریافت اطلاعات قیمت، بررسی نیاز مجموعه یا
              هماهنگی دمو با ما تماس بگیرید.
            </p>
            <div className="access-actions">
              <a className="btn btn-white" href="tel:+989154444852">
                تماس با فروش <ArrowLeft size={17} />
              </a>
              <span>
                <LockKeyhole size={15} /> فعال‌سازی با حساب کاربری
              </span>
            </div>
          </div>
          <div className="access-art">
            <div className="access-ring ring-a" />
            <div className="access-ring ring-b" />
            <div className="access-center">
              <TrainFront size={42} />
              <span>RAILSYNC</span>
            </div>
            <div className="access-orbit-label label-a">دسترسی معتبر</div>
            <div className="access-orbit-label label-b">پشتیبانی فروش</div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="trust">
        <div className="section-heading compact-heading">
          <div>
            <div className="eyebrow">اعتماد و شفافیت</div>
            <h2>
              ابزاری برای کار واقعی،
              <br />
              <span>با مسیر ارتباط روشن.</span>
            </h2>
          </div>
          <p>
            پیش از خرید می‌توانید درباره سازگاری، شیوه استفاده و شرایط دسترسی با
            تیم فروش هماهنگ کنید.
          </p>
        </div>
        <div className="trust-grid">
          <div>
            <ShieldCheck size={22} />
            <h3>توضیح روشن درباره عملکرد</h3>
            <p>
              محدوده اتوماسیون و مراحل نیازمند اقدام کاربر پیش از خرید قابل
              بررسی است.
            </p>
          </div>
          <div>
            <Headset size={22} />
            <h3>ارتباط با تیم فروش</h3>
            <p>
              برای دریافت حساب، قیمت و هماهنگی دمو یک مسیر ارتباطی مشخص دارید.
            </p>
          </div>
          <div>
            <CircleHelp size={22} />
            <h3>پاسخ به پرسش‌های پیش از خرید</h3>
            <p>پیش از تهیه دسترسی، سؤالات فنی و فرایندی خود را مطرح کنید.</p>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="wrap faq-layout">
          <div>
            <div className="eyebrow">سؤالات متداول</div>
            <h2>
              قبل از شروع،
              <br />
              <span>این‌ها را بدانید.</span>
            </h2>
            <p>
              پاسخ کوتاه به پرسش‌های رایج درباره دستیار رجا و تهیه حساب کاربری.
            </p>
            <a href="#contact" className="text-link">
              سؤال دیگری دارید؟ با ما در ارتباط باشید <ArrowLeft size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                className={"faq-item " + (openFaq === i ? "faq-open" : "")}
                key={f.q}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <ChevronDown size={18} />
                </button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section wrap" id="contact">
        <div className="contact-box">
          <div>
            <div className="eyebrow">ارتباط با ما</div>
            <h2>
              برای تهیه حساب یا درخواست دمو،
              <br />
              <span>از همین‌جا شروع کنید.</span>
            </h2>
            <p>
              با تیم فروش RailSync ارتباط بگیرید تا شرایط دسترسی، قیمت و نیاز
              مجموعه شما بررسی شود.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href="tel:+989154444852"
            >
              تماس با ما <ArrowLeft size={17} />
            </a>
            <small>
             
            </small>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <TrainFront size={20} />
          </span>
          <span className="brand-name">
            Rail<span>Sync</span>
            <small>RAIL TICKET ASSISTANT</small>
          </span>
        </a>
        <span className="footer-note">
          دستیار رجا · راهکاری برای اتوماسیون فرایند رزرو
        </span>
        <div className="footer-actions">
          <span className="footer-credit">
            Design &amp; Development by:{" "}
            <a
              href="https://mehrdadseif.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MehrdadSeif.ir
            </a>
          </span>
          <a
            href="#top"
            className="back-top"
            aria-label="بازگشت به بالای صفحه"
            title="بازگشت به بالا"
          >
            <ArrowUp size={19} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </footer>
      {activeImageIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="نمایش بزرگ تصویر محصول"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveImageIndex(null)}
              aria-label="بستن تصویر"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={() =>
                setActiveImageIndex(
                  (activeImageIndex + productImages.length - 1) %
                    productImages.length,
                )
              }
              aria-label="تصویر قبلی"
            >
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-content">
              <Image
                src={productImages[activeImageIndex].src}
                alt={productImages[activeImageIndex].alt}
                width={1280}
                height={720}
                priority
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <span>
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(productImages.length).padStart(2, "0")}
                </span>
                {productImages[activeImageIndex].caption}
              </div>
            </div>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={() =>
                setActiveImageIndex(
                  (activeImageIndex + 1) % productImages.length,
                )
              }
              aria-label="تصویر بعدی"
            >
              <ChevronLeft size={28} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
