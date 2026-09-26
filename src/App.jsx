import { useState, useEffect } from "react";
import "./App.css";

const blogs = [
  {
    id: 1,
    category: "Buying Guide",
    title: "10 Things to Check Before Buying a Phone",
    date: "24 Sep 2026",
    emoji: "📱",
    color: "blue",
    content: `
When buying a new smartphone, looking only at the price is not enough.

You should also compare the processor, RAM, storage, display, camera,
battery, and software carefully.

If your main focus is gaming, give priority to the processor and GPU.
For photography, check the camera sensor and image processing.

For long-term use, battery life and software updates are also important.
`
  },

  {
    id: 2,
    category: "Camera",
    title: "Best Camera Phones in 2026",
    date: "23 Sep 2026",
    emoji: "📸",
    color: "pink",
    content: `
When choosing a smartphone camera, looking only at megapixels is not enough.

Sensor size, image processing, OIS, video recording, and low-light
performance are also important factors.

Before buying a phone, compare its daylight and low-light camera performance.
`
  },

  {
    id: 3,
    category: "Gaming",
    title: "Best Gaming Phones in 2026",
    date: "22 Sep 2026",
    emoji: "🎮",
    color: "purple",
    content: `
A gaming smartphone should have a powerful processor, a good GPU,
a high refresh-rate display, and an effective cooling system.

A large battery and fast charging can also be useful for
long gaming sessions.
`
  },

  {
    id: 4,
    category: "Battery",
    title: "How to Make Your Phone Battery Last Longer",
    date: "21 Sep 2026",
    emoji: "🔋",
    color: "green",
    content: `
To maintain your battery for a longer time, keep unnecessary
background applications closed.

Keep the screen brightness at a suitable level and turn off
unnecessary location services, Bluetooth, and hotspot.

Use fast charging when needed and avoid allowing the phone
to become excessively hot.
`
  },

  {
    id: 5,
    category: "Display",
    title: "AMOLED vs LCD: Which Display Should You Choose?",
    date: "20 Sep 2026",
    emoji: "🖥️",
    color: "orange",
    content: `
AMOLED displays generally provide deeper blacks and higher contrast.

LCD displays can also offer good brightness and color quality
on many smartphones.

When buying a phone, compare brightness, resolution, and
refresh rate along with the display type.
`
  },

  {
    id: 6,
    category: "Technology",
    title: "How Does Fast Charging Work?",
    date: "19 Sep 2026",
    emoji: "⚡",
    color: "yellow",
    content: `
Fast charging technology uses higher power delivery between
the charger and the smartphone.

Along with charging speed, check charger compatibility
and the phone's supported charging capacity.
`
  },

  {
    id: 7,
    category: "RAM",
    title: "8GB vs 12GB RAM: What's the Difference?",
    date: "18 Sep 2026",
    emoji: "💾",
    color: "cyan",
    content: `
RAM helps keep applications active and supports multitasking.

8GB RAM can be sufficient for normal daily usage, while more RAM
can be useful for heavy multitasking and certain gaming scenarios.

Actual performance also depends on the processor
and software optimization.
`
  },

  {
    id: 8,
    category: "5G",
    title: "Things to Check Before Buying a 5G Phone",
    date: "17 Sep 2026",
    emoji: "📶",
    color: "indigo",
    content: `
When buying a 5G phone, make sure to check the supported 5G bands.

You should also consider the processor, battery efficiency,
display, and network compatibility.

Simply having 5G support is not enough;
supported 5G bands are also important.
`
  },

  {
    id: 9,
    category: "Comparison",
    title: "Android vs iPhone: Key Feature Differences",
    date: "16 Sep 2026",
    emoji: "🍎",
    color: "red",
    content: `
Android and iPhone offer different ecosystems
and software experiences.

Android phones are available from different brands
and across a wide range of price categories.

iPhone provides a closely integrated experience
with the Apple ecosystem.

When choosing between them, consider your budget,
ecosystem, software preferences, and required features.
`
  },

  {
    id: 10,
    category: "Guide",
    title: "What to Check Before Buying a Refurbished Phone",
    date: "15 Sep 2026",
    emoji: "🔄",
    color: "teal",
    content: `
When buying a refurbished smartphone, check
the seller's reputation and warranty.

Verify the phone's battery health, display, camera,
speakers, charging port, IMEI, and physical condition.

It is also important to read the return policy
and warranty terms carefully.
`
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [liked, setLiked] = useState([]);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category))
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const searchMatch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || blog.category === category;

    return searchMatch && categoryMatch;
  });

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const shareBlog = async (blog) => {
    const shareData = {
      title: blog.title,
      text: blog.title,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Blog link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>📱</span>
          Phone<span>O</span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Mobiles</a>
          <a href="#">Compare</a>
          <a className="active" href="#">Blogs</a>
          <a href="#">Seller</a>
        </div>

        <button className="login-btn">
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="floating-phone phone-one">
          📱
        </div>

        <div className="floating-phone phone-two">
          📲
        </div>

        <div className="hero-content">

          <div className="badge">
            🚀 PHONEO TECH BLOG
          </div>

          <h1>
            Explore the World of
            <span> Mobile Technology</span>
          </h1>

          <p>
            Latest smartphone guides, technology tips,
            comparisons and buying advice — all in one place.
          </p>

          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>
      </section>

      {/* CATEGORY */}
      <section className="category-section">

        <h2>Explore Categories</h2>

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category active"
                  : "category"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </section>

      {/* BLOG */}
      <main className="blog-container">

        <div className="section-heading">

          <div>
            <span>OUR ARTICLES</span>
            <h2>Latest Mobile Blogs</h2>
          </div>

          <p>
            {filteredBlogs.length} Articles
          </p>

        </div>

        <div className="blog-grid">

          {filteredBlogs.map((blog, index) => (

            <article
              className="blog-card"
              key={blog.id}
              style={{
                animationDelay: `${index * 0.08}s`
              }}
            >

              <div className={`blog-image ${blog.color}`}>

                <div className="image-icon">
                  {blog.emoji}
                </div>

                <span className="blog-category">
                  {blog.category}
                </span>

                <div className="image-circle"></div>

              </div>

              <div className="blog-content">

                <div className="blog-date">
                  📅 {blog.date}
                </div>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.content.substring(0, 130)}...
                </p>

                <div className="card-bottom">

                  <button
                    className="read-btn"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    Read Article →
                  </button>

                  <div className="actions">

                    <button
                      className={
                        liked.includes(blog.id)
                          ? "icon-btn liked"
                          : "icon-btn"
                      }
                      onClick={() => toggleLike(blog.id)}
                    >
                      {liked.includes(blog.id) ? "❤️" : "♡"}
                    </button>

                    <button
                      className="icon-btn"
                      onClick={() => shareBlog(blog)}
                    >
                      ↗
                    </button>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {filteredBlogs.length === 0 && (
          <div className="no-result">
            <div>🔍</div>
            <h2>No Articles Found</h2>
            <p>Try another search keyword.</p>
          </div>
        )}

      </main>

      {/* NEWSLETTER */}
      <section className="newsletter">

        <div className="newsletter-content">

          <div className="newsletter-icon">
            📩
          </div>

          <h2>
            Get Mobile Updates
          </h2>

          <p>
            Subscribe to PhoneO and get the latest
            smartphone news and guides.
          </p>

          <div className="email-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          📱 Phone<span>O</span>
        </div>

        <p>
          Your trusted destination for mobile technology.
        </p>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <div className="copyright">
          © 2026 PhoneO. All Rights Reserved.
        </div>

      </footer>

      {/* ARTICLE MODAL */}
      {selectedBlog && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedBlog(null)}
        >

          <div
            className="article-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedBlog(null)}
            >
              ✕
            </button>

            <div className="modal-icon">
              {selectedBlog.emoji}
            </div>

            <span className="modal-category">
              {selectedBlog.category}
            </span>

            <h2>
              {selectedBlog.title}
            </h2>

            <div className="modal-date">
              📅 {selectedBlog.date}
            </div>

            <div className="article-text">
              {selectedBlog.content
                .trim()
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            <div className="modal-actions">

              <button
                onClick={() => toggleLike(selectedBlog.id)}
              >
                {liked.includes(selectedBlog.id)
                  ? "❤️ Liked"
                  : "♡ Like"}
              </button>

              <button
                onClick={() => shareBlog(selectedBlog)}
              >
                ↗ Share
              </button>

            </div>

          </div>

        </div>

      )}

      {/* TOP BUTTON */}
      {showTop && (
        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          ↑
        </button>
      )}

    </div>
  );
}
export default App;