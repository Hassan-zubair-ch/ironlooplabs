"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "They were great! We discussed everything we needed for an AI answering service and they delivered. We started booking emergency jobs right away from the new system. I had a question on a Sunday and they responded right away. Highly Recommend.",
    author: "Wayne Meadows",
  },
  {
    text: "Thanks so much for a job well done. I was so nervous hiring someone to take care of our patient intake, it took me 2 months to make that decision. We are only a month into our campaign and my biggest concern now is keeping up with the new patient volume, what a great problem to have. I would highly recommend you to anyone.",
    author: "Rob Cavey",
  },
  {
    text: "Thanks to the team for creating the very automation system we were envisioning! From start to finish they guided us along and were extremely knowledgeable. Requested workflow changes were made within hours, and phone calls returned promptly. I would highly recommend IronLoop!",
    author: "Aimee Lindsley",
  },
];

export default function StoriesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#08090a] border-t border-white/[0.04]">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a3e635] block mb-4">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-5">
            What Our Clients <span className="text-[#a3e635]">Are Saying</span>
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed">
            Don&apos;t just take our word for it.<br />
            Here&apos;s what service and healthcare business owners have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121316] rounded-2xl p-8 lg:p-10 relative overflow-hidden flex flex-col h-full border border-white/[0.02]"
            >
              {/* Large Quote Icon Background */}
              <svg 
                className="absolute top-6 right-6 w-16 h-16 text-white/[0.03] fill-current pointer-events-none" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Stars & Lines Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-[#a3e635]/40 flex-1"></div>
                <div className="flex gap-1 text-[#facc15] text-[13px] tracking-widest">
                  ★★★★★
                </div>
                <div className="h-px bg-[#a3e635]/40 flex-1"></div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="font-body text-[14px] text-white/85 leading-[1.8] relative z-10 mb-8">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              {/* Author Name */}
              <p className="font-display text-[15px] font-extrabold text-white relative z-10">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
