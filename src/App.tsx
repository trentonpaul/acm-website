import React, { useEffect } from "react";
import { Hero, Navbar, Typewriter, Capsule, Footer } from "./components";
import { aboutUs, acmLogo, discordLogo, discordQR } from "./assets";
const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;

      // Iterate through sections
      document.querySelectorAll<HTMLElement>("section").forEach((section) => {
        const id = section.id;
        const link = document.querySelector<HTMLAnchorElement>(`a[href="#${id}"]`);

        if (link) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if the scroll position is within the section
          if (st + 200 > sectionTop && st + 200 <= sectionBottom) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    };

    // Initial check on component mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const shiftWindow = () => {
      window.scrollBy(0, -92);
    };
    if (window.location.hash) {
      shiftWindow();
    }
    window.addEventListener("hashchange", shiftWindow);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", shiftWindow);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="">
      <Navbar />
      <Hero />
      <section id="about-us" className="px-12 py-12 min-h-screen overflow-hidden scroll-mt-[92px]">
        <h1 className="text-center text-5xl md:text-6xl font-black text-bred font-nunito text pill-underline">
          about us
        </h1>
        <div className="max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito mt-10">
            Who are we?
          </h2>
          <p className="mt-4 w-full text-center text-xl">
            We're{" "}
            <a className="font-semibold relative overflow-hidden" href="https://www.bradley.edu/">
              <span className="shimmer-text-bradley">Bradley University's</span>
            </a>{" "}
            ACM chapter located in Peoria, IL.
          </p>
          <p className="mt-4 w-full text-center text-xl">
            ACM club is Bradley's largest computer science student organization, but anybody with an
            interest in programming and computing is more than welcome to join in on meetings and
            events!
          </p>
          <figure>
            <img className="max-h-[380px] m-auto mt-10" src={aboutUs} alt="ICPC 2023" />
            <figcaption className="text-sm mt-2">
              Our ICPC team at University of Illinois Urbana-Champaign
            </figcaption>
          </figure>
        </div>
        <div className="mt-4 max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito pt-10">
            What is ACM?
          </h2>
          <p className="mt-4 w-full text-center text-xl">
            The{" "}
            <a href="https://www.acm.org/" className="font-semibold relative overflow-hidden">
              <span className="shimmer-text-acm">Association for Computing Machinery (ACM)</span>
            </a>{" "}
            was founded in 1947 with a mission to encourage collaboration, knowledge-sharing, and
            innovation in the computing space. It's an international organization composed of 500+
            chapters and over 100,000 students outside the United States.
          </p>

          <p className="mt-4 w-full text-center text-xl">
            Not only does ACM connect Bradley to one of the largest international computing
            organizations, but it also provides professional networking, career development skills,
            access to exclusive publications and digital libraries, community engagement, and so
            much more.
          </p>
        </div>
        <div className="mt-4 max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito pt-10">
            Our Mission
          </h2>
          <p className="mt-4 w-full text-center text-xl">
            ACM at Bradley's mission is to share computer science knowledge and resources with
            students. In order to accomplish this, we offer
          </p>
          <Typewriter />
        </div>
      </section>
      <section id="join-us" className="px-12 py-12 min-h-screen overflow-hidden scroll-mt-[92px]">
        <h1 className="text-center text-5xl md:text-6xl font-black text-bred font-nunito text pill-underline">
          join us
        </h1>
        <div className="max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito mt-10">
            Get involved!
          </h2>
          <p className="mt-4 w-full text-center text-xl">
            Looking for experience? We hold meetings every Saturday during the semester
            <span className="text-bred">*</span> from 10-11 AM at{" "}
            <a
              href="https://maps.app.goo.gl/SgmLKQUVuvmKyCCw6"
              target="_blank"
              className="shimmer-text-bradley"
              rel="noopener noreferrer"
            >
              BR 160
            </a>
            !
          </p>
          <p className="mt-4 w-full text-center text-xl">
            Learn new programming concepts and collaborate on projects with these coding workshops.
            We solve big problems and gain practical experience beyond the classroom.
          </p>
          <p className="mt-4 w-full text-center text-sm text-gray">
            <span className="text-bred">*</span> Not including summer or J-term.
          </p>
          <p className="mt-4 w-full text-center text-xl">
            Please note: There's no official sign-up or payment to become a member of Bradley's ACM
            club! Simply join in on any of our meetings and immerse yourself in our amazing
            community!
          </p>
          <p className="mt-4 w-full text-center text-xl">
            However, ACM itself provides its own membership (at a small cost) which provides
            additional benefits. For more details, read below.
          </p>
        </div>
        <div className="max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito mt-10">
            Become an official ACM Member
          </h2>
          <div className="flex items-center flex-col md:flex-row">
            {/* Left Column (Image) */}
            <div className="w-1/3 p-4 mt-4 w-full text-center text-xl max-h-[300px] max-w-[300px] hidden md:inline-block">
              <img src={acmLogo} alt="ACM" className="w-full h-auto rounded-lg" />
            </div>
            {/* Right Column (Text) */}
            <div className="md:text-left text-xl md:w-2/3 p-4">
              <p className="mt-4 w-full">
                Join ACM to gain access to additional publications, journals, special interest
                groups, and more!
              </p>
              <p className="mt-4 w-full">
                Simply click the button below to be directed to ACM's official student membership
                form.
              </p>
              <a
                className="inline-block text-lg bg-blue-700 hover:bg-blue-500 text-white p-3 rounded-lg mt-4 font-semibold"
                href="https://services.acm.org/public/qj/quickjoin/qj_control.cfm?promo=PWEBTOP&form_type=Student"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[580px] md:max-w-[780px] text-center m-auto">
          <h2 className="text-center text-4xl md:text-4xl font-black text-black font-nunito mt-10">
            Join the conversation
          </h2>
          <p className="mt-4 w-full text-center text-xl">
            Join us on Discord for announcements, discussions, events, and more!
          </p>
          <div className="w-full flex items-center justify-center md:gap-5 flex-col md:flex-row mt-5">
            <a href="https://discord.gg/BqjT2cgH">
              <div className="border-gray-700 border-[3px] w-[250px] rounded-xl p-[20px] flex items-center gap-4 bg-gray-100 hover:bg-blue-100">
                <img className="max-w-[50px] h-full" src={discordLogo} alt="Discord" />
                <p className="text-left font-semibold">Bradley University ACM Chapter</p>
              </div>
            </a>
            <img className="max-h-[200px] md:max-h-[150px]" src={discordQR} alt="QR" />
          </div>
        </div>
      </section>
      <section id="resources" className="px-12 py-12 min-h-screen overflow-hidden scroll-mt-[92px]">
        <h1 className="text-center text-5xl md:text-6xl font-black text-bred font-nunito text pill-underline">
          resources
        </h1>
        <div className="max-w-[580px] md:max-w-[780px] text-center m-auto">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="flex flex-col md:w-1/2">
              {/* App Development Capsule */}
              <Capsule
                title="App Development"
                items={[
                  {
                    description:
                      "Get started with mobile app development! Want to try Android Development? Try Android Studio's official tutorial:",
                    link: "https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app#0",
                    linkText: "Visit Android Studio",
                  },
                  {
                    description:
                      "For iOS development, try Apple's very own Xcode, SwiftUI, and UIKit crashcourse:",
                    link: "https://developer.apple.com/tutorials/app-dev-training",
                    linkText: "Visit iOS Tutorials",
                  },
                  {
                    description:
                      "Want to do both at once? Try one of these cross platform solutions suggested by Kotlin:",
                    link: "https://kotlinlang.org/docs/cross-platform-frameworks.html",
                    linkText: "Visit Kotlin",
                  },
                ]}
              />
              {/* Web Development Capsule */}
              <Capsule
                title="Web Development"
                items={[
                  {
                    description:
                      "Want to learn more about web development but don't know where to start? This GeeksForGeeks article gives an excellent overview of all your options. To begin, we recommend trying their basic HTML, CSS, and JavaScript tutorials. Once you get the hang of it, try out a framework such as Angular.js!",
                    link: "https://www.geeksforgeeks.org/web-development/#",
                    linkText: "Visit GeeksForGeeks",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              {/* Game Development Capsule */}
              <Capsule
                title="Game Development"
                items={[
                  {
                    description:
                      "There's so many game engines out there. Which one do you choose? Check out this article from IncrediBuild and pick the right one for you! Having trouble deciding? We recommend Unity, Unreal Engine, and Godot to start!",
                    link: "https://www.incredibuild.com/blog/top-gaming-engines-you-should-consider",
                    linkText: "Visit IncrediBuild",
                  },
                ]}
              />
              {/* Data Science and AI Capsule */}
              <Capsule
                title="Data Science and AI"
                items={[
                  {
                    description:
                      "Data lovers will be excited to know that data science and machine learning are some of the fastest growing fields! Not sure if it's for you? DataCamp offers a free introductory course.",
                    link: "https://www.datacamp.com/courses/understanding-data-science",
                    linkText: "Visit DataCamp",
                  },
                  {
                    description:
                      "If you're ready to get into the weeds, freeCodeCamp.org offers an full 6-hour course. Not only does it teach you coding concepts, it touches important fundamentals and gives you a strong basis for your own research and projects.",
                    link: "https://www.youtube.com/watch?v=ua-CiDNNj30&ab_channel=freeCodeCamp.org",
                    linkText: "Watch the video",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
