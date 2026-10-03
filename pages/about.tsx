import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Zara Kitchen</title>
        <meta
          name="description"
          content="Learn more about Zara Kitchen, our story, our values and the people behind our food."
        />
      </Head>

      <main className="w-full bg-white overflow-hidden">

        {/* =====================================================
            ABOUT HERO
            Design artwork:
            /public/images/about/top_about.png
        ===================================================== */}
        <section className="w-full">
          <Image
            src="/images/about/top_about.png"
            alt="About Zara Kitchen - Good Food. Great People."
            width={1920}
            height={650}
            priority
            className="block w-full h-auto"
          />
        </section>


        {/* =====================================================
            OUR STORY
            Design artwork / story image:
            /public/images/about/story.png

            The text remains HTML so it is responsive/accessibile.
            The supplied artwork is used for the visual portion.
        ===================================================== */}
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

              {/* Story copy */}
              <div className="order-2 lg:order-1">

                <img
                  src="/images/about/story.png"
                  alt="Our Story"
                  className="w-full h-auto max-h-[80px] object-contain object-left"
                />

                <div className="mt-4 text-[#334155] text-[15px] sm:text-base leading-6 sm:leading-7">
                  <p>
                    Zara Kitchen started with a simple dream — to serve
                    great food, bring people together and make every meal
                    a special experience. What began as a small local
                    eatery has grown into a place where families, friends,
                    and colleagues come to enjoy authentic Ghanaian
                    and continental dishes in a clean, comfortable and
                    welcoming environment.
                  </p>

                  <p className="mt-4">
                    We are passionate about good food, friendly service
                    and the joy that comes from sharing a great meal.
                  </p>
                </div>

                <img
                  src="/images/about/somme.png"
                  alt="Same great taste. Always!"
                  className="mt-5 w-auto max-w-[270px] h-auto"
                />
              </div>


              {/* Story photograph */}
              <div className="order-1 lg:order-2">
                <img
                  src="/images/about/about_people.png"
                  alt="Zara Kitchen customers"
                  className="block w-full h-auto rounded-xl"
                />
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            VALUES
            The supplied value_bar artwork is used directly.
        ===================================================== */}
        <section className="w-full">
          <img
            src="/images/about/value_bar.png"
            alt="Our Values - Quality Food, Customer First, Teamwork and Community"
            className="block w-full h-auto"
          />
        </section>


        {/* =====================================================
            TEAM
            Supplied team artwork
        ===================================================== */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="relative">
              <img
                src="/images/about/team_bar.png"
                alt="Our Team - The people behind Zara Kitchen"
                className="block w-full h-auto"
              />

              {/* If team_bar_btn is a separate artwork button,
                  use it as the actual CTA. */}
              <Link
                href="/contact"
                aria-label="Meet Our Team"
                className="
                  absolute
                  left-[42%]
                  bottom-[10%]
                  w-[160px]
                  sm:w-[180px]
                  md:w-[200px]
                  transition-transform
                  hover:scale-[1.02]
                "
              >
                <img
                  src="/images/about/team_bar_btn.png"
                  alt="Meet Our Team"
                  className="block w-full h-auto"
                />
              </Link>
            </div>

          </div>
        </section>


        {/* =====================================================
            BOTTOM CTA
            Supplied artwork
        ===================================================== */}
        <section className="w-full">
          <div className="relative">

            <img
              src="/images/about/bottom_bar.png"
              alt="Good Food Brings People Together"
              className="block w-full h-auto"
            />

            <Link
              href="/menu"
              aria-label="View Menu"
              className="
                absolute
                left-[47%]
                top-1/2
                -translate-y-1/2
                w-[135px]
                sm:w-[155px]
                md:w-[175px]
                transition-transform
                hover:scale-[1.02]
              "
            >
              <img
                src="/images/about/bottom_bar_btn.png"
                alt="View Menu"
                className="block w-full h-auto"
              />
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}
