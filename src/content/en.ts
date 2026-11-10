import type { Dict } from "./types";

const en: Dict = {
  lang: "en",
  dir: "ltr",
  locale: "en",
  langName: "English",
  nav: {
    home: "Home",
    rules: "Rules",
    terms: "Terms",
    privacy: "Privacy",
    deleteAccount: "Delete account",
    menu: "Menu",
  },
  common: {
    updated: "Last updated",
    toc: "On this page",
    backHome: "Back to home",
    contactUs: "Contact",
    notAffiliated:
      "TikGuest is an independent app. It is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, Google or ElevenLabs. TikTok is a trademark of its owners.",
    rights: "All rights reserved.",
    languages: "Language",
    skip: "Skip to content",
  },
  home: {
    metaTitle: "TikGuest | Your AI guest for TikTok LIVE",
    metaDesc:
      "TikGuest is an Android app that creates an AI voice guest with the voice and dialect you choose. It answers only from the knowledge and rules you add, in your TikTok LIVE streams.",
    badge: "Android app · independent from TikTok",
    title: "Your AI guest in",
    titleAccent: "every live",
    sub: "Create a persona with the voice and dialect you choose, give it your knowledge and your rules, then let it chat with you as a guest in your TikTok LIVE streams. It answers only from what you added, and stays quiet when it isn’t being spoken to.",
    ctaPlay: "Get it on Google Play",
    ctaSoon: "Coming soon on Google Play",
    ctaHow: "How does it work?",
    micAlt: "TikGuest logo: a microphone",
    stepsTitle: "Three steps to start",
    steps: [
      {
        t: "Create your persona",
        d: "Sign in with Google, then pick the guest’s name, dialect (13 Arabic dialects) and voice: 30 Gemini voices or an ElevenLabs voice.",
      },
      {
        t: "Give it your knowledge",
        d: "Add the information and rules it must follow. Any question outside them gets a short reply and is logged so you can add the answer later.",
      },
      {
        t: "Run it in the live",
        d: "Add your own Gemini key, grant the permissions and open the live. Control everything from a floating panel above TikTok.",
      },
    ],
    featuresTitle: "Everything a real guest needs",
    features: [
      {
        t: "Voices and dialects",
        d: "30 Gemini voices, 13 Arabic dialects, a delivery style of your choice, or an ElevenLabs voice you have the right to use.",
      },
      {
        t: "Natural conversation",
        d: "It tells when it is being addressed and when to stay silent, and never cuts anyone off mid-sentence.",
      },
      {
        t: "Your knowledge is the source of truth",
        d: "It answers factual questions only from what you added. It doesn’t guess and doesn’t use outside information.",
      },
      {
        t: "Strict rules",
        d: "Define what it may and may not say. Your rules take priority over everything else.",
      },
      {
        t: "Optional memory",
        d: "It can remember names and details between lives. This is off by default and only works if you turn it on.",
      },
      {
        t: "Control panel and instant reporting",
        d: "A floating panel to run the live, and a “Report” button for any inappropriate reply, in one tap.",
      },
    ],
    trustTitle: "Your privacy and control come first",
    trustIntro: "TikGuest is built to keep as little data as possible:",
    trust: [
      "We don’t store what live participants say, nor its transcript, recording or any screenshots.",
      "Your API keys are stored encrypted on your device and in your account, and are used only to run your guest.",
      "Screenshots are taken only when needed, and the system asks for your screen-sharing permission every time.",
      "Delete your account and all your data permanently with one button inside the app.",
      "No ads, and no tracking or analytics libraries in the app.",
    ],
    trustNote:
      "To be fully transparent: while running, the audio and any necessary screenshots are sent in real time to Gemini (Google) using your own key, because Gemini is what understands and replies. Full details in the [[privacy]].",
    permTitle: "Why does the app ask for these permissions?",
    permIntro: "We only ask for what the guest needs to work. Here is each one:",
    perms: [
      {
        t: "Microphone",
        d: "Required by Android to capture the device’s internal audio (the live’s sound) so the guest can hear it.",
      },
      {
        t: "Screen recording / sharing",
        d: "To capture internal audio, and screenshots only when needed. The system asks for your consent every time you start the guest.",
      },
      {
        t: "Display over other apps",
        d: "To show the floating control panel above TikTok during the live.",
      },
      {
        t: "Notifications and foreground service",
        d: "They keep the guest running in the background, with a visible notification that always tells you it’s on.",
      },
      {
        t: "Ignore battery optimization",
        d: "Optional. Stops the system from killing the guest in the middle of a long live.",
      },
      {
        t: "Accessibility services",
        d: "The app doesn’t use them and doesn’t read the contents of other apps.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Is TikGuest an official TikTok app?",
        a: "No. It is an independent app with no official link to TikTok. You are responsible for using it in line with TikTok’s terms and community guidelines, and for disclosing that the guest is an AI where required. See the [[regles]].",
      },
      {
        q: "Do I need a Gemini key?",
        a: "Yes. You add your own key from Google AI Studio, so quota and any cost are on your Google account under its terms. The app walks you through it step by step.",
      },
      {
        q: "Is what other people say in the live stored?",
        a: "Not by us. But it is sent to Gemini for processing while running, and Google’s terms apply to it. See the [[privacy]].",
      },
      {
        q: "What if someone asks: “is this an AI?”",
        a: "If the guest is asked a direct, sincere question about whether it is a human or an AI, it answers honestly.",
      },
      {
        q: "Which devices does it run on?",
        a: "Android 10 and later. There is no iPhone version at the moment.",
      },
      {
        q: "How do I delete my account?",
        a: "In the app: Settings → Account → “Delete my account and all my data”. If you can’t, follow the steps on [[delete-account]].",
      },
    ],
    finalTitle: "Try your first guest today",
    finalSub: "One persona, your knowledge, a live stream. That’s all you need.",
    legalTitle: "Legal documents",
    legalLinks: [
      { key: "regles", d: "Responsible-use rules and AI disclosure" },
      { key: "conditions", d: "Terms of use for the app" },
      { key: "privacy", d: "What we collect, how we protect it, who we share it with" },
      { key: "delete-account", d: "How to delete your account and data" },
    ],
  },
  pages: {
    regles: {
      metaTitle: "Rules of use | TikGuest",
      metaDesc:
        "TikGuest’s responsible-use rules: AI transparency, prohibited content, respect for others’ privacy and TikTok’s terms, and how to report.",
      h1: "Rules of use",
      intro:
        "TikGuest gives you an artificial voice that speaks in front of a real audience, and with that comes real responsibility. These rules govern every use of the app and are part of the [[conditions]]. Breaking them may lead to your account being suspended.",
      sections: [
        {
          id: "transparency",
          title: "1. Transparency: the guest is an AI",
          p: ["The TikGuest guest is an AI-generated voice, not a human. You must not use it to deceive people about what it is."],
          ul: [
            "If someone asks the guest a direct, sincere question about whether it is human or an AI, it answers honestly. You must not disable this behavior or instruct it to deny being an AI.",
            "You are responsible for telling your audience that the guest is an AI whenever the law or TikTok requires it (for example, labeling AI-generated content). We recommend mentioning it in the live’s title or description.",
            "Don’t give the guest expertise, titles or credentials it doesn’t have, and don’t present it as a specific real person.",
          ],
        },
        {
          id: "impersonation",
          title: "2. Impersonation of people and voices",
          ul: [
            "Don’t create a persona that impersonates a real person (famous or not), an organization or a brand in order to make people believe it is them.",
            "In ElevenLabs, only use voices you have the right to use or whose owners explicitly allowed you. Cloning someone’s voice without their consent is prohibited.",
            "Don’t put invented statements attributed to real people into the knowledge or rules.",
          ],
        },
        {
          id: "content",
          title: "3. Prohibited content",
          p: ["You may not use TikGuest to produce or spread any of the following, whether in the knowledge and rules you add or in what the guest says:"],
          ul: [
            "Any sexual content involving minors or any child exploitation. This is absolutely prohibited and we may report it to the competent authorities.",
            "Sexually explicit content, extreme violence, and incitement to violence, hatred or discrimination based on race, religion, sex, origin, disability and the like.",
            "Harassment, bullying, threats and stalking.",
            "Fraud, scams, impersonation, phishing and promotion of deceptive products or services.",
            "Deliberate misinformation, especially about health, elections, money or emergencies.",
            "Encouraging self-harm, suicide, eating disorders or drug use.",
            "Any illegal activity or anything that helps commit one.",
          ],
        },
        {
          id: "advice",
          title: "4. No medical, legal or financial advice",
          p: [
            "The TikGuest guest is not a doctor, a lawyer or a financial advisor. Don’t rely on it for decisions affecting anyone’s health, rights or money, and don’t add such information to its knowledge for it to present as an authority. Don’t make it talk about politics, religion or disputes between people; by default it avoids them.",
          ],
        },
        {
          id: "privacy-others",
          title: "5. Respecting participants’ privacy",
          p: ["While running, the live’s audio, which includes other participants’ voices, is sent to Gemini for processing (see the [[privacy]]). Therefore:"],
          ul: [
            "Make sure you have the right to do so under your country’s law and the platform’s rules, and inform participants where required.",
            "Don’t use the app to collect personal information about people, to track them, or to reveal their identity or location.",
            "Turn on “memory” only to keep what you are allowed to keep, and don’t store sensitive data about anyone (health, religion, political or sexual orientation, address, ID numbers).",
          ],
        },
        {
          id: "tiktok",
          title: "6. Respecting TikTok’s terms",
          ul: [
            "Follow TikTok’s terms, community guidelines and policies on LIVE, guests and AI-generated content. They may change, and the platform may restrict your account; this is outside our control.",
            "Don’t use the app for spam, to artificially inflate engagement, or to get around the platform’s limits.",
            "The app does not tap or type for you inside TikTok, and must not be used to automate that.",
          ],
        },
        {
          id: "audience",
          title: "7. Age and audience",
          p: ["The app is for adults aged 18 and over. If minors are part of your audience, you are responsible for making sure what the guest says stays appropriate for them."],
        },
        {
          id: "keys",
          title: "8. Your keys and your account",
          ul: [
            "Don’t share your API keys with anyone, and don’t use anyone else’s keys without permission.",
            "You are responsible for everything that happens through your account and keys.",
            "Don’t try to disable or bypass the app’s safeguards, or reverse-engineer it to abuse it.",
          ],
        },
        {
          id: "report",
          title: "9. Reporting an inappropriate reply",
          p: [
            "If the guest says something inappropriate, offensive or wrong, tap “🚩 Report” in the floating panel. The text of the guest’s last reply and the reason are sent to us, and we use them to improve safeguards. No one’s voice is sent.",
            "You can also write to us at {email} with any report, comment or abuse.",
          ],
        },
        {
          id: "enforcement",
          title: "10. What happens if you break the rules",
          p: ["Depending on severity and repetition, we may warn you, restrict some features, suspend or delete the account, without prior notice in serious cases. We may also alert the authorities where the law requires it."],
        },
        {
          id: "contact",
          title: "11. Contact",
          p: ["Questions or reports about these rules: {email}."],
        },
      ],
    },
    conditions: {
      metaTitle: "Terms of use | TikGuest",
      metaDesc:
        "TikGuest’s terms of use: eligibility, API keys, responsibilities, content, disclaimers and account termination.",
      h1: "Terms of use",
      intro:
        "By using the TikGuest app (package {pkg}) and its website, you agree to these terms. If you don’t agree, don’t use the app. They are read together with the [[regles]] and the [[privacy]].",
      sections: [
        {
          id: "service",
          title: "1. The service",
          p: [
            "TikGuest is an Android app that lets you create AI voice “personas”, give them knowledge and rules, and run them as a guest in live streams. The service is provided by {dev} (“we”).",
            "TikGuest is independent: it has no official relationship with TikTok, ByteDance, Google or ElevenLabs, and all trademarks belong to their owners.",
          ],
        },
        {
          id: "eligibility",
          title: "2. Eligibility and account",
          ul: [
            "You must be at least 18 and have the legal capacity to agree to these terms.",
            "You sign in with a Google account. You are responsible for your account’s security and all activity under it.",
            "The information you provide must be accurate and kept up to date.",
          ],
        },
        {
          id: "keys",
          title: "3. API keys and third-party services",
          ul: [
            "The guest runs with the Gemini key you add, and with an ElevenLabs key if you choose its voice. Quota and fees are charged to your accounts with those providers, whose terms and policies apply to you and may change or end without our knowledge.",
            "We don’t guarantee the continuity, quality or availability of third-party services, and we don’t cover any fees you incur with them.",
            "We store your keys encrypted solely to run the guest on your behalf. You are responsible for revoking them with their issuer if you suspect a leak.",
          ],
        },
        {
          id: "use",
          title: "4. Permitted use",
          p: ["You agree to use the app lawfully and in line with the [[regles]], and with TikTok’s terms and community guidelines. You alone are responsible for:"],
          ul: [
            "Everything your guest says in your live, and the knowledge and rules you add to it.",
            "Disclosing that the guest is an AI where required, and informing participants about the processing of their voices where the law requires.",
            "Any action a platform takes against your account (such as restricting lives or suspension). We don’t guarantee that TikTok allows this use or will continue to.",
          ],
        },
        {
          id: "content",
          title: "5. Content you add",
          p: [
            "You keep ownership of the personas, knowledge and rules you add. You grant us a limited license to host, process and transmit them to our service providers (such as Gemini), only as needed to provide the service to you.",
            "You warrant that you have the right to this content, that it doesn’t infringe anyone’s rights, and that it complies with the law and the [[regles]].",
          ],
        },
        {
          id: "ai",
          title: "6. AI output",
          p: ["The guest’s replies may be wrong, incomplete or inappropriate despite the safeguards built into the app. We don’t guarantee their accuracy or fitness for any purpose, and they are not medical, legal, financial or professional advice. Review them and take responsibility for how you use them. If a reply is inappropriate, use the “Report” button."],
        },
        {
          id: "ip",
          title: "7. Intellectual property",
          p: ["The app, its logo, design and code are protected and remain ours or our licensors’. We grant you a personal, limited, non-exclusive, non-transferable license to use the app under these terms. You may not copy, modify, distribute or reverse-engineer it except as the law permits."],
        },
        {
          id: "availability",
          title: "8. Availability and changes",
          p: ["We do our best to make the app work well, but it is provided as is. It may stop, change, gain new restrictions or be removed from the store at any time, including because of changes in Google Play, TikTok or AI-provider policies."],
        },
        {
          id: "termination",
          title: "9. Termination",
          ul: [
            "You can stop using the app and delete your account at any time from inside the app (see [[delete-account]]).",
            "We may suspend or terminate your account if you break these terms or the [[regles]], to protect users or the service, or because of a legal obligation.",
          ],
        },
        {
          id: "disclaimer",
          title: "10. Disclaimer of warranties",
          p: ["To the maximum extent permitted by law, the app is provided “as is” and “as available”, without any express or implied warranties, including accuracy, fitness for a particular purpose, and uninterrupted or error-free operation."],
        },
        {
          id: "liability",
          title: "11. Limitation of liability",
          p: [
            "To the maximum extent permitted by law, we are not liable for indirect, incidental, special or punitive damages, or for loss of profits, reputation, audience, data or an account with a third party, arising from your use of, or inability to use, the app, including what the guest says or platforms’ decisions. Our total liability does not exceed the amount you paid us for the app in the twelve months before the event (which is zero if it is free).",
            "This does not affect any right you cannot waive by law, nor our liability for fraud, gross negligence or personal injury where the law forbids excluding it.",
          ],
        },
        {
          id: "indemnity",
          title: "12. Indemnity",
          p: ["You agree to indemnify and hold us harmless from any claim or loss arising from your breach of these terms, the [[regles]], the law, others’ rights or platform terms, to the extent permitted by applicable law."],
        },
        {
          id: "changes",
          title: "13. Changes to these terms",
          p: ["We may change these terms and will update the date at the top. For material changes we will try to let you know in the app or on this website. Continuing to use the app after a change means you accept it."],
        },
        {
          id: "law",
          title: "14. Governing law",
          p: ["These terms are governed by the law of the country where {dev} resides, without prejudice to the mandatory consumer rights you have in your own country. We prefer to settle any dispute amicably first: write to us at {email}."],
        },
        {
          id: "contact",
          title: "15. Contact",
          p: ["{dev} · {email}"],
        },
      ],
    },
    privacy: {
      metaTitle: "Privacy policy | TikGuest",
      metaDesc:
        "TikGuest’s privacy policy: the data we collect, the permissions we request and why, who we share it with, retention, your rights and account deletion.",
      h1: "Privacy policy",
      intro:
        "Here we explain plainly what TikGuest does with your data and with other people’s data that passes through it. We keep only what is needed and we don’t sell your data. This policy applies to the TikGuest app (package {pkg}) and to this website.",
      sections: [
        {
          id: "who",
          title: "1. Who we are",
          p: [
            "Data controller: {dev}. Contact for any privacy matter: {email}.",
            "TikGuest is independent from TikTok, ByteDance, Google and ElevenLabs.",
          ],
        },
        {
          id: "collect",
          title: "2. Data we collect and store",
          ul: [
            "**Account:** your e-mail and ID from Google sign-in (through Supabase Auth).",
            "**What you create:** the personas (name, dialect, description, voice settings), rules and knowledge you add. They are tied to your account and not visible to other users.",
            "**API keys (Gemini and ElevenLabs):** stored encrypted on your device (using a key protected by the Android Keystore) and encrypted server-side in your account, so they follow you across devices. We use them only to run the guest on your behalf.",
            "**People memory (optional, off by default):** if you turn it on, we store names of people who appear in your live and short notes about them, plus questions the guest couldn’t answer. This is third-party data, so keep only what you are allowed to.",
            "**Reports:** if you tap “Report”, we store the text of the guest’s reply (up to 1,500 characters) and the reason, never anyone’s voice.",
            "**Technical data:** like any online service, our hosting and authentication providers may log standard technical data (such as IP address and device type) for operation and security.",
          ],
        },
        {
          id: "not",
          title: "3. What we don’t store",
          ul: [
            "We don’t store what live participants say, nor its transcript or any recording of it.",
            "We don’t store screenshots.",
            "Conversation memory stays in the device’s memory during the session only, and disappears afterwards.",
            "We don’t use your data for advertising, we don’t sell it, and the app contains no tracking or analytics libraries.",
          ],
        },
        {
          id: "permissions",
          title: "4. Device permissions and why",
          ul: [
            "**Microphone (RECORD_AUDIO):** required by Android to capture the device’s internal audio (what other apps play, including the live’s sound). The app excludes its own sound from the capture.",
            "**Screen sharing (MediaProjection):** to capture internal audio and, only when needed, take a screenshot, for example to check your status in the live or when the guest asks to see the screen. The system asks for your consent every session.",
            "**Display over other apps (SYSTEM_ALERT_WINDOW):** to show the floating control panel.",
            "**Foreground service and notifications (FOREGROUND_SERVICE, POST_NOTIFICATIONS):** to keep the guest running in the background with a visible notification.",
            "**WAKE_LOCK and ignoring battery optimization:** to stop the system from killing the guest during a long live. The latter is optional.",
            "**Internet:** to reach the services listed below.",
            "**The app does not use accessibility services** and does not read the text of other apps.",
          ],
        },
        {
          id: "sharing",
          title: "5. Who we share it with",
          ul: [
            "**Google (Gemini API):** while running, the device’s internal audio (which may include participants’ voices in the live) and, only when needed, screenshots are streamed in real time to Gemini using your own key. Google processes them under its terms and policies. On free tiers Google may use content to improve its products and humans may review it; use a paid key for greater privacy. In the EEA, Switzerland and the UK, Google requires paid services.",
            "**Google (sign-in):** to authenticate you with your Google account.",
            "**ElevenLabs:** if you choose its voice, only the guest’s reply text is sent to it to be turned into speech.",
            "**Supabase:** the database and authentication provider that hosts your account data.",
            "We may disclose data if the law requires it or to protect rights and safety.",
          ],
          after: ["These third parties are independent and process data under their own policies. Processing may take place in countries other than yours."],
        },
        {
          id: "others",
          title: "6. Your responsibility toward your live’s participants",
          p: ["Because other participants’ voices are sent to Gemini while running, you are responsible for having the legal basis to do so, for informing them where the law requires, and for disclosing that the guest is an AI. See the [[regles]]."],
        },
        {
          id: "retention",
          title: "7. Retention and deletion",
          p: ["We keep your account data for as long as your account exists. You can permanently delete your account, all your data and your keys from the app: Settings → Account → “Delete my account and all my data”. If you can’t, write to us at {email}. Details on [[delete-account]]."],
        },
        {
          id: "security",
          title: "8. Security",
          ul: [
            "Encrypted connections (HTTPS/WSS).",
            "API keys encrypted on the device and on the server.",
            "Row-level security policies in the database that restrict each user to their own data.",
          ],
          after: ["No system is perfectly secure, so we cannot guarantee absolute security."],
        },
        {
          id: "rights",
          title: "9. Your rights",
          p: ["Depending on your country (for example GDPR in Europe), you may have the right to access, correct, delete and port your data, to object to or restrict its processing, to withdraw consent at any time, and to complain to your data protection authority. To exercise a right, write to {email}; we will reply within a reasonable time."],
        },
        {
          id: "children",
          title: "10. Children",
          p: ["The app is not directed to anyone under 18 and we don’t knowingly collect their data. If we learn that an account belongs to a minor, we delete it."],
        },
        {
          id: "changes",
          title: "11. Changes to this policy",
          p: ["We may update this policy and the date at the top; for material changes we will let you know in the app or on this website."],
        },
        {
          id: "contact",
          title: "12. Contact",
          p: ["{dev} · {email}"],
        },
      ],
    },
    "delete-account": {
      metaTitle: "Delete account and data | TikGuest",
      metaDesc:
        "How to delete your TikGuest account and all your data: from inside the app in a few steps, or by e-mail request.",
      h1: "Delete your account and data",
      intro:
        "You have the right to delete your account and data at any time. This page applies to the TikGuest app (package {pkg}) developed by {dev}.",
      sections: [
        {
          id: "in-app",
          title: "Method 1: inside the app (fastest)",
          ul: [
            "Open TikGuest and sign in.",
            "Go to **Settings → Account**.",
            "Tap **“Delete my account and all my data”** and confirm.",
          ],
          after: ["Deletion happens immediately and you are signed out."],
        },
        {
          id: "by-email",
          title: "Method 2: by e-mail",
          p: ["If the app is no longer installed or you can’t sign in, send an e-mail to {email} from the address of the Google account you signed up with, with the subject “Delete my TikGuest account”. We verify your identity and delete your account and data within 30 days at most, and confirm it to you."],
        },
        {
          id: "what",
          title: "What is deleted",
          ul: [
            "Your account (e-mail and ID).",
            "All your personas and what is attached to them: rules, knowledge, voice settings.",
            "Notes about people and unanswered questions, if you had turned on memory.",
            "Saved API keys (Gemini, ElevenLabs) from our system, and from your device when you delete from the app.",
          ],
          after: ["Copies may remain temporarily in our database provider’s backups before being permanently erased in the normal cycle."],
        },
        {
          id: "third",
          title: "What our deletion does not cover",
          p: ["What is held by other parties is subject to their policies and your account with them: your Google account and Gemini key (Google AI Studio), and your ElevenLabs account. Delete or revoke your keys there too if you wish. The TikTok app and your TikTok account are outside our scope."],
        },
        {
          id: "questions",
          title: "Questions?",
          p: ["Write to us at {email}. For more, see the [[privacy]]."],
        },
      ],
    },
  },
};

export default en;
