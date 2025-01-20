import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

function Mixcastes() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // Content sections animation
    const sections = contentRef.current.children;
    gsap.from(sections, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Cards animation
    const cards = cardsRef.current.children;
    gsap.from(cards, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="relative w-full min-h-screen ">
        {/* Header Section */}
        <div ref={headerRef} className="w-full flex items-center flex-col py-8">
          <div className="w-auto">
            <NavLink
              to={"/"}
              className="w-fit border-slate-700 rounded-lg px-4 py-2"
            >
              <div className="text-6xl font-black text-black font-bodoni">
                AI Constitution of India
              </div>
            </NavLink>
            <div className="font-playball font-light text-3xl text-gray-700 -mt-8 ml-auto text-center">
              <span className="hello italic">AI</span> must prevail the
              diversity of the land
            </div>
          </div>
          {/* </div> */}
          <hr className="mx-auto border border-slate-800 w-1/2 mt-2" />
        </div>

        {/* Main Content Section */}
        <div ref={contentRef} className="w-5/6 mx-auto px-4 py-8">
          <div className="prose prose-lg mx-auto text-[#73716C]">
            <h2 className="text-5xl font-bold text-[#776B5D] mb-8 text-center font-bodoni">
              Understanding Cross-Religious Caste Commonalities
            </h2>
            <p className="mb-6 w-3/4 text-center mx-auto text-black hello text-2xl">
              India's social tapestry reveals a fascinating pattern of shared
              caste names and social structures across different religious
              communities. This interconnected nature of castes transcends
              religious boundaries, reflecting our shared cultural heritage and
              historical evolution.
            </p>
          </div>

          {/* Cards Section */}
          <div ref={cardsRef} className="mt-16 w-full">
            <div className="bg-[#776B5D]/5 p-6 w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow flex gap-8">
              <div className="bg-[#776B5D]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl text-[#776B5D] mb-4 font-bodoni">
                  Historical Evolution & Cultural Synthesis
                </h3>
                <p className="text-xl hello text-black">
                  Throughout India's history, social structures and occupational
                  groups have transcended religious boundaries. Many
                  professional and community identities maintained their social
                  roles even after religious conversions, leading to similar
                  caste names appearing across Hindu, Muslim, and Christian
                  communities. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>

              <div className="bg-[#776B5D]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl text-[#776B5D] mb-4 font-bodoni">
                  Regional Variations & Local Cultures
                </h3>
                <p className="text-xl hello text-black">
                  Geographic regions often share common caste names across
                  religious communities, reflecting local cultural influences.
                  These regional variations demonstrate how social identities
                  are shaped by geographical and cultural proximity rather than
                  religious differences alone.
                </p>
              </div>

              <div className="bg-[#776B5D]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-4xl text-[#776B5D] mb-4 font-bodoni">
                  Occupational Heritage
                </h3>
                <p className="text-xl hello text-black">
                  Traditional occupations often form the basis of caste names
                  across religions. Artisans, craftsmen, scholars, and other
                  professional groups maintain similar social identities despite
                  different religious affiliations. This highlights how
                  professional heritage often supersedes religious boundaries in
                  Indian social structure.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <div className="mt-24 text-center">
            <h2 className="text-5xl font-bold text-[#776B5D] mb-12 font-bodoni">
              Examples of Cross-Religious Caste Commonalities from our Database
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-6 border border-[#776B5D]/20 rounded-lg hover:bg-[#776B5D]/5 transition-colors">
                <h3 className="text-xl font-semibold text-[#776B5D] mb-4">
                  Ethical Framework
                </h3>
                <p className="text-[#73716C]">
                  Establishing robust guidelines for AI development and
                  deployment while preserving human values and rights.
                </p>
              </div>
              <div className="p-6 border border-[#776B5D]/20 rounded-lg hover:bg-[#776B5D]/5 transition-colors">
                <h3 className="text-xl font-semibold text-[#776B5D] mb-4">
                  Inclusive Growth
                </h3>
                <p className="text-[#73716C]">
                  Ensuring AI benefits reach all segments of society while
                  maintaining cultural diversity and equality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mixcastes;
