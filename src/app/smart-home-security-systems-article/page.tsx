import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/smart-home-security-systems-article";
const SEO_TITLE = "Best Smart Home Security Systems in 2026";
const TITLE = "Best Smart Home Security Systems in 2026: DIY vs Professional";
const DESCRIPTION =
  "The best smart home security systems in 2026: Ring Alarm Pro, SimpliSafe, Abode, ADT and Vivint compared on install, monitoring and contracts. Find your fit.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "smart-home" });

const SYSTEMS: [string, string, string, string, string][] = [
  ["Ring Alarm Pro", "DIY", "Self or paid professional", "No", "Alexa homes"],
  ["SimpliSafe", "DIY", "Self or paid professional", "No", "Simple, flexible plans"],
  ["Abode", "DIY", "Self or paid professional", "No", "HomeKit and tinkerers"],
  ["ADT Command", "Professional", "Professional", "Usually", "Hands-off protection"],
  ["Vivint", "Professional", "Professional", "Usually", "Whole-home automation"],
];

const cell = "p-3 text-muted-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Smart home"
      title={TITLE}
      description={DESCRIPTION}
      topics={["home"]}
      disclosure={false}
      answer="The best smart home security system for most people is a DIY kit you install yourself: Ring Alarm Pro if your home runs on Alexa, SimpliSafe if you want the simplest setup and flexible monitoring, or Abode if you use Apple HomeKit. Choose ADT or Vivint only if you want professional installation and monitoring and accept a contract."
      image={{ src: illustrationPath("smart-home"), alt: "Smart home security system" }}
      bestFor="Choosing between DIY and professionally installed alarms"
      why={[
        "We compare the five systems most people shortlist, using each company's published features. Prices and plans change often, so we do not quote them here: check the brand's site for current kit and monitoring prices before you decide.",
      ]}
      sections={[
        {
          heading: "Smart home security systems compared",
          body: [
            <div key="table" className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-muted/50 text-left">
                    {["System", "Install", "Monitoring", "Long contract", "Best for"].map((h) => (
                      <th key={h} className="p-3 font-semibold text-foreground">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SYSTEMS.map((row) => (
                    <tr key={row[0]} className="border-t border-border align-top">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      {row.slice(1).map((c, i) => (
                        <td key={i} className={cell}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          ],
        },
        {
          id: "ring-alarm-pro",
          heading: "1. Ring Alarm Pro: best for Alexa homes",
          sub: [
            { heading: "Why we picked it", body: ["The base station doubles as an eero Wi-Fi 6 router, so the alarm and your Wi-Fi live in one box. Installation is DIY, professional monitoring is optional, and it works closely with Echo devices and Ring cameras and doorbells."] },
            { heading: "Who should skip it", body: ["Google Home and Apple HomeKit users, and anyone who does not want a subscription for video history and backup internet."] },
          ],
        },
        {
          id: "simplisafe",
          heading: "2. SimpliSafe: best for easy setup",
          sub: [
            { heading: "Why we picked it", body: ["Fully wireless sensors, no long-term contract, and monitoring plans you can change month to month. It works with Alexa and Google Assistant."] },
            { heading: "Who should skip it", body: ["People who want deep smart home automation. Cameras are sold separately and the app is simpler than Ring's or Abode's."] },
          ],
        },
        {
          id: "abode",
          heading: "3. Abode: best for HomeKit and DIY fans",
          sub: [
            { heading: "Why we picked it", body: ["The widest smart home support of the DIY kits, including Apple HomeKit, Alexa and Google, plus a free self-monitoring option and automations you can build yourself."] },
            { heading: "Who should skip it", body: ["Anyone who wants plug-and-forget simplicity: there are more settings to learn."] },
          ],
        },
        {
          id: "adt-command",
          heading: "4. ADT Command: best professional monitoring",
          sub: [
            { heading: "Why we picked it", body: ["Professional installation, professional 24/7 monitoring and a touchscreen panel, from the largest US alarm company. It works with Alexa and Google Assistant."] },
            { heading: "Who should skip it", body: ["Renters and budget buyers: installation fees, higher monthly costs and multi-year contracts are common. Read the terms before signing."] },
          ],
        },
        {
          id: "vivint",
          heading: "5. Vivint: best for whole-home automation",
          sub: [
            { heading: "Why we picked it", body: ["Professionally installed security that also controls locks, lights, thermostats and cameras from one panel and app."] },
            { heading: "Who should skip it", body: ["Anyone who wants to own the equipment outright or avoid financing and long agreements."] },
          ],
        },
        {
          heading: "How to choose a home security system",
          sub: [
            { heading: "DIY or professional", body: ["DIY kits cost less and move with you. Professional systems handle installation and response for you, usually with a contract."] },
            { heading: "Monitoring", body: ["Self-monitoring sends alerts to your phone. Professional monitoring calls you and dispatches help. Most DIY kits let you add it later."] },
            { heading: "Smart home platform", body: ["Pick the system that works with what you already use: Alexa, Google Home or Apple HomeKit."] },
            { heading: "Backup", body: ["Look for cellular and battery backup so the alarm still works during an internet or power outage."] },
            { heading: "Privacy", body: ["Check where video is stored, whether it can stay local, and who can access it."] },
          ],
        },
      ]}
      faqTitle="Home security system questions"
      faq={[
        { q: "What is the best smart home security system?", a: "For most people, a DIY system: Ring Alarm Pro for Alexa homes, SimpliSafe for easy setup, or Abode for HomeKit. ADT and Vivint suit people who want professional installation." },
        { q: "Is professional monitoring worth it?", a: "If you want someone to respond when you cannot check your phone, yes. If you mainly want alerts and video, self-monitoring is enough." },
        { q: "Do smart security systems work without Wi-Fi?", a: "Many keep working locally, and systems with cellular backup can still send alarms during an internet outage. Check each system's backup options." },
        { q: "Which home security systems have no contract?", a: "Ring, SimpliSafe and Abode can be used without long-term contracts. Professionally installed systems like ADT and Vivint usually require one." },
      ]}
      products={["Ring Alarm Pro", "SimpliSafe", "Abode", "ADT Command", "Vivint"]}
    />
  );
}
