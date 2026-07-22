"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Reliability() {
  return (
    <section className="py-24 bg-background-subtle">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-display-lg text-white mb-4">Uncompromising Reliability</h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            In the trade, reputation is everything. Our AI is built with redundant fail-safes to ensure
            your brand is always represented perfectly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            whileHover={{ y: -8, borderColor: "#C5E033" }}
            className="md:col-span-8 bg-surface-container-highest p-10 rounded-xl text-white flex flex-col justify-between overflow-hidden relative border border-outline group"
          >
            <div className="z-10">
              <span
                className="material-symbols-outlined text-6xl text-growth-green mb-6 inline-block transition-transform duration-500 group-hover:scale-110"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              <h3 className="font-display text-headline-lg mb-4">Fail-Proof Communication</h3>
              <p className="font-body text-body-md text-on-surface-variant max-w-md">
                Our systems utilize triple-redundant server clusters. If one node drops, another takes
                over in milliseconds. Your customers will never hear a dial tone.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 transition-transform duration-700 group-hover:scale-125">
              <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                hub
              </span>
            </div>
          </motion.div>

          <div className="md:col-span-4 bg-growth-green p-10 rounded-xl text-deep-navy group transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,224,51,0.3)]">
            <span className="material-symbols-outlined text-5xl mb-6 inline-block transition-transform duration-500 group-hover:rotate-12">
              verified_user
            </span>
            <h3 className="font-display text-headline-md mb-4">Human-in-Loop Oversight</h3>
            <p className="font-body text-body-md font-medium">
              Every AI interaction is logged and reviewed by our quality assurance team to ensure tonal
              consistency and protocol adherence.
            </p>
          </div>

          <motion.div
            whileHover={{ borderColor: "#C5E033" }}
            className="md:col-span-4 bg-surface-container-low p-10 rounded-xl border border-outline transition-all duration-500"
          >
            <span className="material-symbols-outlined text-5xl text-primary mb-6 inline-block">database</span>
            <h3 className="font-display text-headline-md mb-4 text-white">Data Sovereignty</h3>
            <p className="font-body text-body-md text-on-surface-variant">
              Your customer data is encrypted and private. We never share lead intelligence with
              competitors.
            </p>
          </motion.div>

          <div className="md:col-span-8 bg-surface-container-high p-10 rounded-xl border border-outline flex gap-8 items-center group transition-all duration-500 hover:bg-surface-container">
            <div className="hidden lg:block w-48 shrink-0 overflow-hidden rounded">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgV58H5VdvMQNkSIVa3keKij2b7Kf_oPuXMwGBnnTWfICwnCIcyEW_qEuYQVHRLMr20RHMK6lluOVDNrajaIcTLCQgtMAsu4GaNjpI8-roJ8yFeX4uQFeVKVapS63x6s8IwPRmqg2_6VYIw9htrJyRzRdID_EJXY41FWNms2KDkxiszWWhtLzS3Onc6VwKkRky71Ndt87RqR1wSbyJ6NbmsWVQC1ejtmlzPv6W7tFpRDCFYV_ZZx0U"
                alt="High tech server"
                width={192}
                height={192}
                className="rounded shadow-md grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="font-display text-headline-md mb-4 text-white">Zero-Latency Response</h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Our proprietary edge-processing ensures that AI responses are indistinguishable from
                human timing. No awkward tech pauses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
