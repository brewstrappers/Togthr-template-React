import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="/production_id_4683406%20(720p)%20(1)%20(1).mp4"
          loop
          muted
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/external/1-removebg-preview-400w.png"
            className="home-branding"
          />
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text06">authenticity</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              Embark on a journey to acquire authentic and handmade creations
              directly from skilled artists and creators worldwide
            </p>
          </div>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption1">
          <span className="home-text08">
            the App Brewstrappers is the bridge to talented artists from around
            the world and their authentic creations.
          </span>
          <br className="home-text09"></br>
          <span className="home-text10">
            From exquisite jewelry to captivating home decor, unveil the
            mysteries and hidden cultures beyond the seas. 
          </span>
          <br></br>
          <br></br>
        </h2>
      </section>
      <section className="home-slider">
        <div className="home-header01">
          <h2 className="home-heading1">
            <span>The first Marketplace that </span>
            <span className="home-text14">
              stretches to all corners of the world
            </span>
          </h2>
        </div>
      </section>
      <section className="home-slides">
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
        <div data-role="current-banner" className="home-slide banner">
          <img
            alt="image"
            src="https://drive.google.com/uc?export=view&amp;id=13cAyRwQ65k8ugnW6VpoWCzrrBsKdEG2f"
            className="home-image"
          />
          <div className="home-content">
            <div className="home-header02">
              <h3 className="home-heading2">Artists</h3>
              <p className="home-caption2">
                In the Brewstrappers App, creators of beautiful pieces now have
                the chance to offer their creation to a new audience. This will
                help them share their art and culture and sustain their
                traditions.
              </p>
            </div>
            <div className="home-more"></div>
          </div>
        </div>
        <div data-role="current-banner" className="home-slide1 banner">
          <div className="home-content1">
            <div className="home-header03">
              <h3 className="home-heading3">Culture</h3>
              <p className="home-caption3">
                Artist from all over the world are creating beautiful pieces of
                art that fail to reach a lot of people. Brewstrappers makes it
                possible to introduce those artist with the item they create and
                all the magic stories they carry to you. An experience of
                magical immersion awaits.
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="https://drive.google.com/uc?export=view&amp;id=1wx3nVexMe1joVH2POR_iytwwP3hjs24G"
            className="home-image1"
          />
        </div>
        <div data-role="current-banner" className="home-slide2 banner">
          <img
            alt="image"
            src="https://drive.google.com/uc?export=view&amp;id=1SsKzn1tXOeZxke_5T3cf2LuONokPu3Up"
            className="home-image2"
          />
          <div className="home-content2">
            <div className="home-header04">
              <h3 className="home-heading4">Products</h3>
              <p className="home-caption4">
                Cultural art has no bouderies. Artists from foreign cultures
                offer a variety of items in their countries and now also to you;
                thanks to Brewstrappers. The products can range from jewelery to
                clothing, household pots or even furniture like rugs and lamps.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-more1"></div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-container5">
          <div className="home-container6">
            <div className="home-content3">
              <div className="home-header05">
                <div className="home-header06"></div>
              </div>
            </div>
          </div>
          <h2 className="home-heading5">
            <span>Only authehtic items</span>
            <br></br>
          </h2>
          <p className="home-caption5">
            Shop with only authetic handmade products on Brewstrappers, where
            our thorough seller verification ensure a stress-free shopping and
            discovery experience.
          </p>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="https://drive.google.com/uc?export=view&amp;id=13--b6ki_5TBgPIafCFG6pqVgBDoKQr0E"
            className="home-image3"
          />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="https://drive.google.com/uc?export=view&amp;id=1K_raSSN3uSjdY95ot4S2Yq9bbuE4wO9K"
            className="home-image4"
          />
        </div>
        <div className="home-content4">
          <div className="home-header07">
            <div className="home-header-container1">
              <div className="home-header08">
                <h2 className="home-heading6">
                  <span>With heavy cultural influence</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption6">
                Uncover the narratives behind each meticulously crafted item,
                and seize the opportunity to weave a piece of that enchanting
                heritage into your life. Purchase these products and champion
                local artisans, contributing to the preservation of their
                magical craft and cultural legacy.
              </p>
            </div>
          </div>
          <div className="home-testimonial"></div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container2">
          <div className="home-header09">
            <h2 className="home-heading7">
              Dwonload Brewstrappers from App Store Or Play Store and discover
              Hundreds of Handmade Cultural Items
            </h2>
          </div>
          <div className="home-button">
            <button className="home-button1 button">
              <span>Download</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://drive.google.com/uc?export=view&amp;id=1xPGvy4zNnvUcpnDK3Jxn0m9eHuape3YV"
          className="home-image5"
        />
      </section>
      <section className="home-create">
        <div className="home-content5">
          <div className="home-header10">
            <h2 className="home-heading8">
              <span className="home-text20">Discover the world&apos;s </span>
              <span className="home-text21">magic cultures</span>
              <span className="home-text22"> now!</span>
              <br></br>
            </h2>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content6">
          <div className="home-main">
            <div className="home-branding1">
              <img
                alt="image"
                src="/external/1-removebg-preview-400w.png"
                className="home-image6"
              />
              <span className="home-text24">
                Embark on a journey to acquire authentic and handmade creations
                directly from skilled artists and creators worldwide
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column">
                <span className="home-header11">Contact</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    Info@brewstrappers.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text25">
              © 2024 Brewstrappers- All rights reserved
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container8">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
