"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const clips = [
  {
    src: "/video/video-atmosphere-1.mp4",
    caption: "Inside Nu Restaurant",
  },
  {
    src: "/video/video-atmosphere-2.mp4",
    caption: "The dining room, in motion",
  },
];

export function VideoExperience() {
  return (
    <section className="relative py-28 md:py-36 bg-card/40">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="In Motion"
          title="A Closer Look Inside Nu"
          description="Short, muted clips of the restaurant in action \u2014 no sound needed."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {clips.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] glass-card">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={clip.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-base/80 to-transparent">
                  <p className="text-sm text-white/80 font-body">{clip.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
