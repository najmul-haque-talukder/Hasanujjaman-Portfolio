import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            portfolio: "Work",
            reviews: "Reviews",
            contact: "Contact",
            cta: "Let's Collaborate"
        },
        hero: {
            headline_1: "Engineering",
            headline_2: "Motion.",
            headline_3: "Designing",
            headline_4: "Reality.",
            subheadline: "Professional Graphic Designer & Motion Artist specializing in high-end video editing and dynamic visual effects.",
            cta: "Get Started",
            trusted: "Trusted by 100+ clients",
            experience: "Years of Experience",
            exp_years: "+5 Years",
            projects_title1: "Web Designer Portfolio",
            projects_title2: "Creative Agency Site",
            projects_title3: "Motion Design Showreel",
            projects_title4: "Brand Identity System",
            tags: {
                creativity: "Creativity",
                production: "Production",
                strategy: "Strategy",
                innovation: "Innovation"
            }
        },
        about: {
            tag: "My Story",
            headline: "Bridging the gap between logic and art.",
            bento_title: "Crafting Stories Through Motion & Design",
            body_p1: "Hi, I'm Hasanujjaman, a passionate Motion Designer and Video Editor with over 5 years of experience in turning complex ideas into visually stunning digital realities. My journey started with a fascination for how movement can bring life to static designs, and it has evolved into a full-scale creative career.",
            body_p2: "I specialize in high-end video production, 2D/3D animation, and strategic branding. Whether it's a short-form social media clip or a complex corporate presentation, I bring the same level of precision and artistic flair to every frame. My goal is always to deliver content that doesn't just look good, but drives meaningful engagement.",
            quality_title: "Premium Quality",
            quality_desc: "Top-tier industry standards",
            delivery_title: "Fast Delivery",
            delivery_desc: "Efficient & reliable workflow",
            strategy_title: "Creative Strategy",
            strategy_desc: "Focusing on your brand goals",
            mission_title: "The Mission",
            mission_body: "Constantly developing as a motion artist, staying ahead of trends and mastering the latest tools.",
            languages_tag: "Languages",
            languages: "Fluent in Japanese & English, Native in Bangla"
        },
        services: {
            tag: "Specialization",
            headline: "Focused Creative Expertise",
            bento_headline: "Transforming Ideas Into Stunning Digital Realities",
            video_editing: "Video Post-Production",
            video_desc: "Cinematic story-driven editing with seamless transitions and professional color grading for high-end narratives.",
            motion_graphics: "Advanced Motion Design",
            motion_desc: "Dynamic 2D/3D typography and abstract motion design that breathes life into your brand's digital identity.",
            vfx: "High-End Visual Effects",
            vfx_desc: "Compositing, rotoscoping, and high-quality 3D integration that transforms ordinary footage into extraordinary reality.",
            branding: "Strategic Digital Branding",
            branding_desc: "A cohesive visual language designed to build trust and resonate with your target audience across all platforms.",
            ai_title: "AI Creative Workflow",
            ai_desc: "Leveraging Gemini & ChatGPT for lightning-fast ideation, scripting, and smart automation in production.",
            ai_tag: "AI Powered",
            journey: "Professional Evolution",
            journey_title: "Professional Journey",
            journey_desc: "Years of experience crafting digital excellence.",
            exp_desc: "Professional expertise in creative services for global clients."
        },
        portfolio: {
            tag: "Selected Work",
            headline: "Case Studies",
            view_all: "View All Work",
            view_project: "View Project",
            tags: {
                research: "User Research",
                ux: "UX Design",
                ui: "UI Design",
                interaction: "Interaction",
                video: "Video",
                vfx: "VFX",
                branding: "Branding",
                logos: "Logos"
            }
        },
        footer: {
            sitemap: "Sitemap",
            socials: "Socials",
            contact: "Contact",
            rights: "All rights reserved.",
            description: "Engineering motion and designing digital experiences that leave a lasting impact. Let's build the future together.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        reviews: {
            tag: "Testimonials",
            headline: "Feedback from Global Partners",
            subheadline: "Trusted by forward-thinking brands and startups worldwide.",
            review1: "Michael Chen: Hasanujjaman is a true professional. His motion graphics transformed our brand identity completely. Strategic, fast, and incredibly talented.",
            review2: "Sarah Jenkins: The attention to detail in his video editing is unmatched. He understands the rhythm of storytelling and brings a unique creative edge to every project.",
            review3: "David Miller: Working with Hasan has been a breeze. He takes feedback perfectly and always delivers more than what was expected. Highly recommended!",
            review4: "Emily Watts: One of the best video editors I have worked with. The turnaround time is amazing without compromising on the quality.",
            review5: "Robert Fox: His understanding of IT systems and motion design is a lethal combination. He created a technical explainer that was both dense and beautiful.",
            review6: "Jessica Alba: Clean designs, smooth animations, and a great eye for color. Hasan is our go-to for all our high-end marketing clips.",
            review7: "Alex Rivera: He helped me visualize my app features with stunning 2D animations. The process was smooth and the result was beyond expectation.",
            review8: "Linda Zhang: Professional, communicative, and extremely skilled. Hasan understands the business side of creative work, which is rare."
        },
        cta: {
            tag: "Risk-Free",
            headline_talk: "Enough talk,",
            headline_build: "let's build",
            headline_incredible: "something incredible together",
            subheadline: "Looking to elevate your brand? I craft immersive experiences that captivate, engage, and make your business unforgettable in every interaction.",
            primary_btn: "Let's Collaborate"
        },
        contact: {
            tag: "Get In Touch",
            headline: "Let's Start a Conversation",
            subheadline: "Have a project in mind, or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.",
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            submit: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully! I'll be in touch soon.",
            error: "Failed to send message. Please try again later.",
            required: "Please fill out all fields."
        },
        process: {
            tag: "Workflow",
            headline: "My Creative Process",
            subheadline: "A streamlined, goal-oriented process designed to take your brand from concept to high-end reality.",
            step1_title: "Discovery & Briefing",
            step1_desc: "Deep dive into your brand's goals and target audience to define the core mission.",
            step2_title: "Strategy & Concepts",
            step2_desc: "Mapping out the visual journey and narrative before the first frame is animated.",
            step3_title: "Production & Motion",
            step3_desc: "The magic happens—using industry-standard tools to build your vision into reality.",
            step4_title: "Delivery & Feedback",
            step4_desc: "Polishing every detail based on your feedback to ensure world-class results.",
            step1_short: "Discovery",
            step2_short: "Concepts",
            step3_short: "Motion",
            step4_short: "Feedback"
        },
        insights: {
            tag: "Expert Insights",
            headline: "Knowledge Behind The Motion",
            read_more: "Read Insight",
            categories: {
                strategy: "Motion Strategy",
                technical: "Technical Tip",
                trends: "Creative Trends"
            },
            articles: {
                art1: "Why 70% of viewers prefer subtitles in social video",
                art2: "How to optimize 4K footage for faster mobile playback",
                art3: "The rise of minimalist 3D in modern brand identity"
            }
        },
        toolkit: {
            tag: "Powerhouse",
            headline: "Technical Toolkit",
            desc: "A curated selection of industry-standard tools ensuring high-end production results for every single project.",
            edu_tag: "Foundation",
            edu_headline: "Academic Background",
            edu_desc: "The technical foundation that perfectly complements my creative pursuits and engineering logic.",
            badge_title: "Story",
            badge_date: "EST. 2018",
            workstation_title: "High-End Workstation",
            workstation_desc: "Zero-downtime production environment with specialized hardware for complex 3D rendering and 4K editing.",
            workstation_status: "Available for Remote Collaboration",
            cert_btn: "View All Certifications",
            lang_proficiency: "Language Proficiency",
            prof_certs: "Professional Certifications",
            philosophy_title: "Creative Philosophy",
            philosophy_text: "\"Simple is better than complex. Complexity should only serve the narrative, never distract from it.\"",
            methodology_title: "Methodology",
            methodology_text: "User-centric design focused on high retention and visual storytelling.",
            availability_title: "Global Availability",
            availability_text: "Working across GMT+6, EST, and CET timezones.",
            tech_systems_title: "Technical Systems",
            tech_systems_desc: "Bridging the gap between creative motion and technical execution.",
            tech_systems: [
                "Advanced OS Deployment & Security",
                "Server-side Troubleshooting",
                "Enterprise Network Configuration",
                "CCTV & Access Control Systems"
            ],
            levels: {
                fluent: "Fluent",
                native: "Native",
                conversational: "Conversational"
            },
            categories: {
                vfx: "Animation & VFX",
                post: "Post-Production",
                vector: "Vector & Raster",
                mgmt: "Management",
                it_solutions: "IT Solutions",
                it_networking: "IT Networking",
                motion: "Motion Workflow",
                tech: "Tech Integration"
            },
            edu_list: [
                { degree: "Diploma in Computer Engineering", institute: "Cumilla Polytechnic Institute (BTEB)", year: "2019 - 2022" },
                { degree: "Secondary Vocational", institute: "Daudkandi Adarsha High School", year: "2015 - 2017" }
            ],
            cert_list: [
                { name: "Advanced Motion Graphics", issuer: "School of Motion", year: "2023" },
                { name: "UI/UX Design Specialization", issuer: "Coursera (Google)", year: "2022" },
                { name: "Video Editing Masterclass", issuer: "Udemy", year: "2021" }
            ],
            journey_list: [
                { role: "MasterAnimations Media LTD", year: "2023 - Present" },
                { role: "Refsmedia Digital Limited", year: "2022 - 2023" },
                { role: "Shopno Jatra Learning Institute", year: "2021 - 2022" },
                { role: "Global Freelancing (Fiverr)", year: "2018 - Present" },
                { role: "Early Design Projects", year: "2015 - 2018" }
            ],
            studio: {
                tag: "The Engine Room",
                headline_part1: "High-End",
                headline_part2: "Hardware",
                headline_part3: "for Precision Work",
                desc: "Motion graphics and VFX require immense computing power. My studio is equipped with enterprise-grade hardware to ensure smooth renders and zero technical bottlenecks.",
                stats: {
                    stat1_val: "4K",
                    stat1_label: "Render Pipeline",
                    stat2_val: "Realtime",
                    stat2_label: "Preview Speed",
                    stat3_val: "10-Bit",
                    stat3_label: "Color Depth",
                    stat4_val: "Zero",
                    stat4_label: "Dropped Frames"
                },
                specs: [
                    { title: "Processing Power", detail: "AMD Ryzen 9 5900X | 12 Cores 4.8GHz" },
                    { title: "VFX Acceleration", detail: "NVIDIA GeForce RTX 3080 10GB" },
                    { title: "Memory & Speed", detail: "64GB DDR4 3600MHz RAM | 2TB NVMe SSD" },
                    { title: "Production Display", detail: "Primary 4K HDR Color-Calibrated Monitor" }
                ]
            }
        }
    },
    bn: {
        nav: {
            home: "হোম",
            about: "আমার সম্পর্কে",
            portfolio: "কাজ",
            reviews: "রিভিউ",
            contact: "যোগাযোগ",
            cta: "চলুন শুরু করি"
        },
        hero: {
            headline_1: "ইঞ্জিনিয়ারিং",
            headline_2: "মোশন।",
            headline_3: "ডিজাইনিং",
            headline_4: "রিয়ালিটি।",
            subheadline: "পেশাদার গ্রাফিক ডিজাইনার এবং মোশন আর্টিস্ট, হাই-এন্ড ভিডিও এডিটিং এবং ডায়নামিক ভিজ্যুয়াল ইফেক্টে বিশেষজ্ঞ।",
            cta: "শুরু করুন",
            trusted: "১০০+ ক্লায়েন্টের বিশ্বস্ত",
            experience: "অভিজ্ঞতা",
            exp_years: "+৫ বছর",
            projects_title1: "ওয়েব ডিজাইনার পোর্টফোলিও",
            projects_title2: "ক্রিয়েটিভ এজেন্সি সাইট",
            projects_title3: "মোশন ডিজাইন শোরিল",
            projects_title4: "ব্র্যান্ড আইডেন্টিটি সিস্টেম",
            tags: {
                creativity: "সৃজনশীলতা",
                production: "উৎপাদন",
                strategy: "কৌশল",
                innovation: "উদ্ভাবন"
            }
        },
        about: {
            tag: "আমার গল্প",
            headline: "যুক্তি এবং শিল্পের মধ্যে সেতুবন্ধন।",
            bento_title: "মোশন এবং ডিজাইনের মাধ্যমে গল্প বলা",
            body_p1: "হ্যালো, আমি হাসানুজ্জামান, একজন উৎসাহী মোশন ডিজাইনার এবং ভিডিও এডিটর। জটিল ধারণাগুলোকে গত ৫ বছর ধরে অসাধারণ ভিজ্যুয়াল রিয়েলিটিতে রূপান্তর করার অভিজ্ঞতা আমার আছে। আমার যাত্রা শুরু হয়েছিল স্থির ডিজাইনে কীভাবে প্রাণের সঞ্চার করা যায় সেই মুগ্ধতা থেকে, যা আজ একটি পূর্ণাঙ্গ ক্যারিয়ারে রূপ নিয়েছে।",
            body_p2: "আমি হাই-এন্ড ভিডিও প্রোডাকশন, ২ডি/৩ডি অ্যানিমেশন এবং কৌশলগত ব্র্যান্ডিংয়ে বিশেষজ্ঞ। এটি সোশ্যাল মিডিয়া ক্লিপ হোক বা জটিল কর্পোরেট প্রেজেন্টেশন, আমি প্রতিটি ফ্রেমে সমান নির্ভুলতা বজায় রাখি। আমার লক্ষ্য শুধু সুন্দর ডিজাইন নয়, বরং এমন কন্টেন্ট তৈরি করা যা মানুষের মনে দাগ কাটে।",
            quality_title: "প্রিমিয়াম কোয়ালিটি",
            quality_desc: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড মান",
            delivery_title: "দ্রুত ডেলিভারি",
            delivery_desc: "দক্ষ এবং নির্ভরযোগ্য কাজের ধারা",
            strategy_title: "সৃজনশীল কৌশল",
            strategy_desc: "আপনার ব্র্যান্ডের লক্ষ্যের দিকে মনোযোগ",
            mission_title: "লক্ষ্য",
            mission_body: "একজন মোশন শিল্পী হিসেবে ক্রমাগত উন্নতি করা, ট্রেন্ডের সাথে তাল মিলিয়ে চলা এবং নতুন টুলস আয়ত্ত করা।",
            languages_tag: "ভাষা",
            languages: "জাপানিজ ও ইংরেজিতে সাবলীল, বাংলা মাতৃভাষা"
        },
        services: {
            tag: "বিশেষত্ব",
            headline: "নিবেদিত সৃজনশীল দক্ষতা",
            bento_headline: "ধারণাকে অসাধারণ ভিজ্যুয়াল রিয়েলিটিতে রূপান্তর করা",
            video_editing: "ভিডিও পোস্ট-প্রোডাকশন",
            video_desc: "সিনেমাটিক স্টোরি-ড্রাইভেন এডিটিং, সিমলেস ট্রানজিশন এবং প্রফেশনাল কালার গ্রেডিং এর মাধ্যমে গল্প বলা।",
            motion_graphics: "অ্যাডভান্সড মোশন ডিজাইন",
            motion_desc: "ডায়নামিক ২ডি/৩ডি টাইপোগ্রাফি এবং অ্যাবস্ট্রাকট মোশন ডিজাইন যা আপনার ডিজিটাল আইডেন্টিটিকে জীবন্ত করে তোলে।",
            vfx: "হাই-এন্ড ভিজ্যুয়াল ইফেক্টস",
            vfx_desc: "কম্পোজিটিং, রোটোস্কোপিং এবং উন্নত ৩ডি ইন্টিগ্রেশন যা সাধারণ ফুটেজকে অসাধারণ বাস্তবতায় রূপান্তর করে।",
            branding: "কৌশলগত ডিজিটাল ব্র্যান্ডিং",
            branding_desc: "একটি সুসংগত ভিজ্যুয়াল ল্যাঙ্গুয়েজ যা বিশ্বাস তৈরি করে এবং সব প্ল্যাটফর্মে দর্শকদের কাছে গ্রহণযোগ্য করে তোলে।",
            ai_title: "এআই ক্রিয়েটিভ ওয়ার্কফ্লো",
            ai_desc: "দ্রুত আইডিয়া জেনারেশন, স্ক্রিপ্টিং এবং স্মার্ট অটোমেশনের জন্য জেমিনি এবং চ্যাটজিপিটি ব্যবহার।",
            ai_tag: "এআই চালিত",
            journey: "পেশাদার বিবর্তন",
            journey_title: "পেশাদার বিবর্তন",
            journey_desc: "সৃজনশীল কাজের মাধ্যমে ডিজিটাল উৎকর্ষ অর্জনের দীর্ঘ অভিজ্ঞতা।",
            exp_desc: "বিশ্বব্যাপী ক্লায়েন্টদের জন্য সৃজনশীল সেবায় পেশাদার দক্ষতা।"
        },
        portfolio: {
            tag: "নির্বাচিত কাজ",
            headline: " কেস স্টাডিজ",
            view_all: "সব কাজ দেখুন",
            view_project: "প্রজেক্ট দেখুন",
            tags: {
                research: "ইউজার রিসার্চ",
                ux: "ইউএক্স ডিজাইন",
                ui: "ইউআই ডিজাইন",
                interaction: "ইন্টারঅ্যাকশন",
                video: "ভিডিও",
                vfx: "ভিএফএক্স",
                branding: "ব্র্যান্ডিং",
                logos: "লোগো"
            }
        },
        footer: {
            sitemap: "সাইটম্যাপ",
            socials: "সোশ্যাল",
            contact: "যোগাযোগ",
            rights: "সর্বস্বত্ব সংরক্ষিত।",
            description: "মোশন ইঞ্জিনিয়ারিং এবং ডিজিটাল অভিজ্ঞতা ডিজাইন করা যা দীর্ঘস্থায়ী প্রভাব ফেলে। চলুন একসাথে ভবিষ্যৎ গড়ি।",
            privacy: "প্রাইভেসি পলিসি",
            terms: "টার্মস অব সার্ভিস"
        },
        reviews: {
            tag: "প্রশংসাপত্র",
            headline: "বৈশ্বিক পার্টনারদের মতামত",
            subheadline: "বিশ্বজুড়ে অগ্রগামী ব্র্যান্ড এবং স্টার্টআপ দ্বারা বিশ্বস্ত।",
            review1: "মাইকেল চেন: হাসানুজ্জামান একজন খাঁটি পেশাদার। তার মোশন গ্রাফিক্স আমাদের ব্র্যান্ড আইডেন্টিটিকে সম্পূর্ণ বদলে দিয়েছে। কৌশলগত, দ্রুত এবং অবিশ্বাস্য প্রতিভাবান।",
            review2: "সারাহ জেনকিন্স: ভিডিও এডিটিংয়ে তার খুঁটিনাটি বিষয়ের প্রতি নজর অতুলনীয়। তিনি গল্পের ছন্দ বোঝেন এবং প্রতিটি প্রজেক্টে একটি অনন্য সৃজনশীলতা নিয়ে আসেন।",
            review3: "ডেভিড মিলার: হাসানের সাথে কাজ করা খুব সহজ ছিল। তিনি ফিডব্যাক খুব ভালোভাবে নেন এবং সবসময় প্রত্যাশার চেয়ে বেশি ডেলিভারি দেন। হাইলি রেকমেন্ডেড!",
            review4: "এমিলি ওয়াটস: আমি যাদের সাথে কাজ করেছি তাদের মধ্যে অন্যতম সেরা ভিডিও এডিটর। কোয়ালিটির সাথে কোনো আপস না করেই তার কাজেরগতি অসাধারণ।",
            review5: "রবার্ট ফক্স: আইটি সিস্টেম এবং মোশন ডিজাইনের এই সমন্বয় দুর্দান্ত। তিনি এমন একটি টেকনিকিয়াল এক্সপ্লেইনার তৈরি করেছেন যা তথ্যবহুল এবং সুন্দর।",
            review6: "জেসিকা আলবা: ক্লিন ডিজাইন, স্মুথ অ্যানিমেশন এবং রঙের নিখুঁত ব্যবহার। আমাদের সব হাই-এন্ড মার্কেটিং ক্লিপের জন্য হাসানই সেরা চয়েস।",
            review7: "অ্যালেক্স রিভেরা: তিনি আমার অ্যাপ ফিচারের জন্য অসাধারণ ২ডি অ্যানিমেশন তৈরি করে দিয়েছেন। প্রক্রিয়াটি ছিল মসৃণ এবং ফলাফলটি ছিল প্রত্যাশার বাইরে।",
            review8: "লিন্ডা ঝাং: পেশাদার, যোগাযোগে দক্ষ এবং অত্যন্ত মেধাবী। হাসান সৃজনশীল কাজের ব্যবসায়িক দিকটিও বোঝেন, যা বিরল।"
        },
        cta: {
            tag: "ঝুঁকিহীন",
            headline_talk: "যথেষ্ট কথা হয়েছে,",
            headline_build: "চলুন তৈরি করি",
            headline_incredible: "একসাথে অসাধারণ কিছু",
            subheadline: "আপনার ব্র্যান্ডকে কি আরও উন্নত করতে চান? আমি এমন ইমারসিভ অভিজ্ঞতা তৈরি করি যা প্রতিটি ইন্টারঅ্যাকশনে আপনার ব্যবসাকে অবিস্মরণীয় করে তোলে।",
            primary_btn: "চলুন শুরু করি"
        },
        contact: {
            tag: "যোগাযোগ করুন",
            headline: "চলুন কথা বলা শুরু করি",
            subheadline: "কোনো প্রজেক্টের আইডিয়া আছে, বা শুধু হ্যালো বলতে চান? নিচের ফর্মটি পূরণ করুন এবং আমি যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।",
            name: "আপনার নাম",
            email: "আপনার ইমেইল",
            message: "আপনার বার্তা",
            submit: "বার্তা পাঠান",
            sending: "পাঠানো হচ্ছে...",
            success: "বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই যোগাযোগ করব।",
            error: "বার্তা পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
            required: "অনুগ্রহ করে সব তথ্য পূরণ করুন।"
        },
        process: {
            tag: "ওয়ার্কফ্লো",
            headline: "আমার সৃজনশীল প্রক্রিয়া",
            subheadline: "একটি সুবিন্যস্ত, লক্ষ্য-চালিত প্রক্রিয়া যা আপনার ব্র্যান্ডকে ধারণা থেকে উচ্চ-মানের বাস্তবতায় নিয়ে যাওয়ার জন্য ডিজাইন করা হয়েছে।",
            step1_title: "আবিষ্কার ও ব্রিফিং",
            step1_desc: "মূল লক্ষ্য নিরূপণ করতে আপনার ব্র্যান্ডের উদ্দেশ্য এবং লক্ষ্য দর্শকদের সম্পর্কে গভীরভাবে জানা।",
            step2_title: "কৌশল ও ধারণা",
            step2_desc: "প্রথম ফ্রেম অ্যানিমেশন করার আগেই ভিজ্যুয়াল যাত্রা এবং বর্ণনা ম্যাপ করা।",
            step3_title: "উৎপাদন ও মোশন",
            step3_desc: "জাদু ঘটে—আপনার ভিশনকে বাস্তবতায় পরিণত করতে ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টুল সেট ব্যবহার করে কাজ করা।",
            step4_title: "ডেলিভারি ও ফিডব্যাক",
            step4_desc: "বিশ্বমানের আউটপুট নিশ্চিত করতে আপনার মতামতের ভিত্তিতে প্রতিটি বিবরণ নিখুঁত করা।",
            step1_short: "আবিষ্কার",
            step2_short: "ধারণা",
            step3_short: "মোশন",
            step4_short: "ফিডব্যাক"
        },
        insights: {
            tag: "বিশেষজ্ঞদের মতামত",
            headline: "মোশনের পেছনের জ্ঞান",
            read_more: "আরও পড়ুন",
            categories: {
                strategy: "মোশন কৌশল",
                technical: "প্রযুক্তিগত টিপ",
                trends: "সৃজনশীল প্রবণতা"
            },
            articles: {
                art1: "কেন ৭০% দর্শক সোশ্যাল ভিডিওতে সাবটাইটেল পছন্দ করেন",
                art2: "দ্রুত মোবাইল প্লেব্যাকের জন্য ৪কে ফুটেজ কীভাবে অপ্টিমাইজ করবেন",
                art3: "আধুনিক ব্র্যান্ড আইডেন্টিটিতে মিনিমালিস্ট থ্রিডির উত্থান"
            }
        },
        toolkit: {
            tag: "পাওয়ারহাউস",
            headline: "টেকনিক্যাল টুলকিট",
            desc: "প্রতিটি প্রজেক্টে উচ্চ-মানের উৎপাদন নিশ্চিত করার জন্য নির্বাচিত ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টুলস।",
            edu_tag: "ভিত্তি",
            edu_headline: "শিক্ষাগত পটভূমি",
            edu_desc: "আমার সৃজনশীল কাজের সাথে সামঞ্জস্যপূর্ণ টেকনিক্যাল ফাউন্ডেশন এবং ইঞ্জিনিয়ারিং লজিক।",
            badge_title: "গল্প",
            badge_date: "স্থাপিত ২০১৮",
            workstation_title: "হাই-এন্ড ওয়ার্কস্টেশন",
            workstation_desc: "জটিল থ্রিডি রেন্ডারিং এবং ৪কে এডিটিং এর জন্য বিশেষ হার্ডওয়্যার সম্বলিত প্রোডাকশন এনভায়রনমেন্ট।",
            workstation_status: "রিমোট কোলাবরেশনের জন্য উপলব্ধ",
            cert_btn: "সমস্ত সার্টিফিকেট দেখুন",
            lang_proficiency: "ভাষা দক্ষতা",
            prof_certs: "পেশাদার সার্টিফিকেট",
            philosophy_title: "সৃজনশীল দর্শন",
            philosophy_text: "\"সরলতা জটিলতার চেয়ে ভালো। জটিলতা শুধুমাত্র বর্ণনার পরিপূরক হতে হবে, তা থেকে বিভ্রান্ত করা যাবে না।\"",
            methodology_title: "পদ্ধতি",
            methodology_text: "উচ্চ রিটেনশন এবং ভিজ্যুয়াল স্টোরিটেলিং এ ফোকাস করা ইউজার-সেন্ট্রিক ডিজাইন।",
            availability_title: "বৈশ্বিক উপস্থিতি",
            availability_text: "জিএমটি +৬, ইএসটি এবং সিইটি টাইমজোনে কাজ করছি।",
            tech_systems_title: "প্রযুক্তিগত ব্যবস্থা",
            tech_systems_desc: "সৃজনশীল মোশন এবং প্রযুক্তিগত বাস্তবায়নের মধ্যে সেতুবন্ধন।",
            tech_systems: [
                "অ্যাডভান্সড ওএস ডিপ্লয়মেন্ট এবং সিকিউরিটি",
                "সার্ভার-সাইড ট্রাবলশুটিং",
                "এন্টারপ্রাইজ নেটওয়ার্ক কনফিগারেশন",
                "সিসিটিভি এবং অ্যাকসেস কন্ট্রোল সিস্টেম"
            ],
            levels: {
                fluent: "সাবলীল",
                native: "মাতৃভাষা",
                conversational: "কথোপকথনযোগ্য"
            },
            categories: {
                vfx: "অ্যানিমেশন এবং ভিএফএক্স",
                post: "পোস্ট-প্রোডাকশন",
                vector: "ভেক্টর এবং রাস্টার",
                mgmt: "ব্যবস্থাপনা",
                it_solutions: "আইটি সমাধান",
                it_networking: "আইটি নেটওয়ার্কিং",
                motion: "মোশন ওয়ার্কফ্লো",
                tech: "টেক ইন্টিগ্রেশন"
            },
            edu_list: [
                { degree: "কম্পিউটার ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা", institute: "কুমিল্লা পলিটেকনিক ইনস্টিটিউট (BTEB)", year: "২০১৯ - ২০২২" },
                { degree: "মাধ্যমিক সেকশন (ভোকেশনাল)", institute: "দাউদকান্দি আদর্শ উচ্চ বিদ্যালয়", year: "২০১৫ - ২০১৭" }
            ],
            cert_list: [
                { name: "অ্যাডভান্সড মোশন গ্রাফিক্স", issuer: "স্কুল অব মোশন", year: "২০২৩" },
                { name: "ইউআই/ইউএক্স ডিজাইন স্পেশালাইজেশন", issuer: "কোরসেরা (গুগল)", year: "২০২২" },
                { name: "ভিডিও এডিটিং মাস্টারক্লাস", issuer: "ইউডেমি", year: "২০২১" }
            ],
            journey_list: [
                { role: "মাস্টার অ্যানিমেশনস মিডিয়া লিমিটেড", year: "২০২৩ - বর্তমান" },
                { role: "রেফসমিডিয়া ডিজিটাল লিমিটেড", year: "২০২২ - ২০২৩" },
                { role: "স্বপ্ন যাত্রা লার্নিং ইনস্টিটিউট", year: "২০২১ - ২০২২" },
                { role: "গ্লোবাল ফ্রিল্যান্সিং (ফাইভার)", year: "২০১৮ - বর্তমান" },
                { role: "প্রারম্ভিক ডিজাইন প্রজেক্ট", year: "২০১৫ - ২০১৮" }
            ],
            studio: {
                tag: "ইঞ্জিন রুম",
                headline_part1: "উচ্চ-মানের",
                headline_part2: "হার্ডওয়্যার",
                headline_part3: "নির্ভুল কাজের জন্য",
                desc: "মোশন গ্রাফিক্স এবং ভিএফএক্স-এর জন্য প্রচুর কম্পিউটিং ক্ষমতার প্রয়োজন। নিরবচ্ছিন্ন রেন্ডার এবং প্রযুক্তিগত বাধা এড়াতে আমার স্টুডিওটি এন্টারপ্রাইজ-গ্রেড হার্ডওয়্যার দ্বারা সুসজ্জিত।",
                stats: {
                    stat1_val: "৪কে",
                    stat1_label: "রেন্ডার পাইপলাইন",
                    stat2_val: "রিয়েলটাইম",
                    stat2_label: "প্রিভিউ স্পিড",
                    stat3_val: "১০-বিট",
                    stat3_label: "কালার ডেপথ",
                    stat4_val: "জিরো",
                    stat4_label: "ড্রপড ফ্রেম"
                },
                specs: [
                    { title: "প্রসেসিং পাওয়ার", detail: "এএমডি রাইজেন ৯ ৫৯০০এক্স | ১২ কোর ৪.৮ গিগাহার্টজ" },
                    { title: "ভিএফএক্স অ্যাক্সিলারেশন", detail: "এনভিডিয়া জিফোর্স আরটিএক্স ৩০৮০ ১০জিবি" },
                    { title: "মেমরি এবং স্পিড", detail: "৬৪জিবি ডিডিআর৪ ৩৬০০ মেগাহার্টজ র‍্যাম | ২টিবি এনভিএমই এসএসডি" },
                    { title: "প্রোডাকশন ডিসপ্লে", detail: "প্রাথমিক ৪কে এইচডিআর কালার-ক্যালিব্রেটেড মনিটর" }
                ]
            }
        }
    },
    jp: {
        nav: {
            home: "ホーム",
            about: "自己紹介",
            portfolio: "実績",
            reviews: "レビュー",
            contact: "お問い合わせ",
            cta: "コラボレーション"
        },
        hero: {
            headline_1: "エンジニアリング",
            headline_2: "モーション。",
            headline_3: "デザイン",
            headline_4: "リアリティ。",
            subheadline: "ハイエンドなビデオ編集とダイナミックな視覚効果を専門とする、プロフェッショナルなグラフィックデザイナー＆モーションアーティスト。",
            cta: "始める",
            trusted: "100社以上の信頼",
            experience: "年の経験",
            exp_years: "5年以上の経験",
            projects_title1: "ウェブデザイナー・ポートフォリオ",
            projects_title2: "クリエイティブ・エージェンシー・サイト",
            projects_title3: "モーションデザイン・ショールール",
            projects_title4: "ブランド・アイデンティティ・システム",
            tags: {
                creativity: "創造性",
                production: "プロダクション",
                strategy: "戦略",
                innovation: "革新"
            }
        },
        about: {
            tag: "マイストーリー",
            headline: "ロジックとアートの架け橋。",
            bento_title: "モーションとデザインで物語を創る",
            body_p1: "こんにちは、MD Hasanujjamanです。情熱的なモーションデザイナー兼ビデオエディターとして、5年以上にわたり複雑なアイデアを視覚的に美しいデジタル現実に変えてきました。私の旅は、動きがいかに静的なデザインに命を吹き込むかという魅力から始まり、今では本格的なクリエイティブキャリアへと進化しました。",
            body_p2: "私はハイエンドのビデオ制作、2D/3Dアニメーション、そして戦略的なブランディングを専門としています。ソーシャルメディアの短いクリップでも、複雑な企業のプレゼンテーションでも、すべてのフレームに同じレベルの精密さと芸術的なセンスを注ぎ込みます。私の目標は、単に見た目が良いだけでなく、有意義なエンゲージメントを生み出すコンテンツを届けることです。",
            quality_title: "プレミアム品質",
            quality_desc: "業界最高水準のクオリティ",
            delivery_title: "迅速な納品",
            delivery_desc: "効率的かつ信頼性の高いワークフロー",
            strategy_title: "クリエイティブ戦略",
            strategy_desc: "ブランドの目標にフォーカス",
            mission_title: "ミッション",
            mission_body: "常にモーションアーティストとして成長し、トレンドを先取りし、最新のツールを習熟すること。",
            languages_tag: "言語能力",
            languages: "日本語・英語堪能、ベンガル語ネイティブ"
        },
        services: {
            tag: "専門分野",
            headline: "注力されたクリエイティブな専門知識",
            bento_headline: "アイデアを 驚異的な デジタル 現実に 変える",
            video_editing: "ビデオポストプロダクション",
            video_desc: "ハイエンドなナラティブのための、シームレスなトランジションとプロフェッショナルなカラーグレーディングを備えたシネマティックなストーリー重視の編集。",
            motion_graphics: "高度なモーションデザイン",
            motion_desc: "ブランドのデジタルアイデンティティに命を吹き込む、ダイナミックな2D/3Dタイポグラフィと抽象的なモーションデザイン。",
            vfx: "ハイエンドな視覚効果",
            vfx_desc: "普通の映像を非凡な現実に変える、コンポジット、ロトスコープ、高品質な3Dインテグレーション。",
            branding: "戦略的なデジタルブランディング",
            branding_desc: "すべてのプラットフォームで信頼を築き、ターゲットオーディエンスに響くように設計された一貫した視覚言語。",
            ai_title: "AIクリエイティブワークフロー",
            ai_desc: "GeminiやChatGPTを活用した超速のアイデア出し、スプリッティング、および制作におけるスマートな自動化。",
            ai_tag: "AI搭載",
            journey: "プロフェッショナルな進化",
            journey_title: "プロフェッショナルな 歩み",
            journey_desc: "デジタルエクセレンスを形作ってきた長年の経験。",
            exp_desc: "グローバルなクライアント向けのクリエイティブサービスにおけるプロフェッショナルな専門知識。"
        },
        portfolio: {
            tag: "注目の作品",
            headline: "ケーススタディ",
            view_all: "すべての作品を見る",
            view_project: "プロジェクトを見る",
            tags: {
                research: "ユーザーリサーチ",
                ux: "UXデザイン",
                ui: "UIデザイン",
                interaction: "インタラクション",
                video: "ビデオ",
                vfx: "VFX",
                branding: "ブランディング",
                logos: "ロゴ"
            }
        },
        footer: {
            sitemap: "サイトマップ",
            socials: "SNS",
            contact: "連絡先",
            rights: "All rights reserved.",
            description: "印象に残るデジタル体験をデザインし、モーションをエンジニアリングします。一緒に未来を築きましょう。",
            privacy: "プライバシーポリシー",
            terms: "利用規約"
        },
        reviews: {
            tag: "レビュー",
            headline: "グローバルパートナーからの声",
            subheadline: "世界中の先進的なブランドやスタートアップに信頼されています。",
            review1: "Michael Chen: Hasanujjamanは真のプロフェッショナルです。彼のモーショングラフィックスは私たちのブランドアイデンティティを完全に変えてくれました。戦略的で速く、信じられないほど才能があります。",
            review2: "Sarah Jenkins: ビデオ編集における細部へのこだわりは比類がありません。ストーリーテリングのリズムを理解しており、すべてのプロジェクトに独自のクリエイティブなエッジをもたらしてくれます。",
            review3: "David Miller: Hasanとの仕事はとてもスムーズでした。フィードバックを完璧に受け入れ、常に期待以上のものを納品してくれます。強くお勧めします！",
            review4: "Emily Watts: これまで仕事をした中で最高のビデオエディターの一人です。品質を妥協することなく、ターンアラウンドタイムが素晴らしいです。",
            review5: "Robert Fox: ITシステムとモーションデザインの理解の組み合わせは強力です。高密度でありながら美しいテクニカル・エクスプレイナーを作成してくれました。",
            review6: "Jessica Alba: クリーンなデザイン、スムーズなアニメーション、そして素晴らしい色彩感覚。Hasanは、私たちのハイエンドなマーケティングクリップの頼れる存在です。",
            review7: "Alex Rivera: Stunningな2Dアニメーションでアプリ機能を視覚化するのを助けてくれました。プロセスはスムーズで、結果は期待以上でした。",
            review8: "Linda Zhang: プロフェッショナルでコミュニケーション能力が高く、非常に熟練しています。Hasanはクリエイティブな仕事のビジネス面を理解しており、それは稀有なことです。"
        },
        cta: {
            tag: "リスクフリー",
            headline_talk: "話はこれくらいにして、",
            headline_build: "一緒に素晴らしいものを",
            headline_incredible: "作り上げましょう",
            subheadline: "ブランドを向上させたいとお考えですか？あらゆるインタラクションにおいて、お客様のビジネスを忘れられないものにする、没入型の体験を作り上げます。",
            primary_btn: "コラボレーション"
        },
        contact: {
            tag: "お問い合わせ",
            headline: "会話を始めましょう",
            subheadline: "プロジェクトのアイデアがありますか、それともただ挨拶したいですか？以下のフォームにご記入いただければ、できるだけ早くお返事いたします。",
            name: "お名前",
            email: "メールアドレス",
            message: "メッセージ",
            submit: "メッセージを送信",
            sending: "送信中...",
            success: "メッセージが正常に送信されました！すぐにご連絡いたします。",
            error: "メッセージの送信に失敗しました。後でもう一度お試しください。",
            required: "すべての項目を入力してください。"
        },
        process: {
            tag: "ワークフロー",
            headline: "クリエイティブプロセス",
            subheadline: "ブランドをコンセプトからハイエンドな現実へと導くために設計された、合理的で目標指向のプロセス。",
            step1_title: "ステップ1: 発見とヒアリング",
            step1_desc: "ブランドの目標とターゲットオーディエンスを深く掘り下げ、核心となる使命を定義します。",
            step2_title: "ステップ2: 戦略とコンセプト",
            step2_desc: "最初の一コマがアニメーション化される前に、視覚的な旅とナラティブを計画します。",
            step3_title: "ステップ3: 制作とモーション",
            step3_desc: "魔法が起こります。業界標準のツールを使用して、ビジョンを現実に構築します。",
            step4_title: "ステップ4: 納品とフィードバック",
            step4_desc: "世界クラスの結果を確実にするために、お客様のフィードバックに基づいて細部を磨き上げます。",
            step1_short: "発見",
            step2_short: "概念",
            step3_short: "モーション",
            step4_short: "フィードバック"
        },
        insights: {
            tag: "専門家の知見",
            headline: "モーションの背後にある知識",
            read_more: "詳細を見る",
            categories: {
                strategy: "モーション戦略",
                technical: "技術的なヒント",
                trends: "クリエイティブトレンド"
            },
            articles: {
                art1: "なぜ視聴者の70%がソーシャルビデオで字幕を好むのか",
                art2: "モバイル再生を高速化するために4K映像を最適化する方法",
                art3: "現代のブランドアイデンティティにおけるミニマリスト3Dの台頭"
            }
        },
        toolkit: {
            tag: "パワーハウス",
            headline: "テクニカルツールキット",
            desc: "あらゆるプロジェクトでハイエンドな制作結果を保証する、業界標準ツールの厳選されたセレクション。",
            edu_tag: "ファンデーション",
            edu_headline: "学歴",
            edu_desc: "私のクリエイティブな追求とエンジニアリングロジックを完璧に補完する技術的基盤。",
            badge_title: "ストーリー",
            badge_date: "2018年設立",
            workstation_title: "ハイエンド・ワークステーション",
            workstation_desc: "複雑な3Dレンダリングと4K編集のための専用ハードウェアを備えた、ダウンタイムのない制作環境。",
            workstation_status: "リモートコラボレーション可能",
            cert_btn: "すべての認定証を見る",
            lang_proficiency: "言語能力",
            prof_certs: "プロフェッショナル認定",
            philosophy_title: "クリエイティブな哲学",
            philosophy_text: "「シンプルは複雑よりも優れています。複雑さはナラティブ（物語）に奉仕するためだけにあり、決して注意をそらすものであってはなりません。」",
            methodology_title: "メソッド",
            methodology_text: "高い維持率と視覚的なストーリーテリングに焦点を当てたユーザー中心のデザイン。",
            availability_title: "グローバルな対応",
            availability_text: "GMT+6、EST、CETタイムゾーンで対応可能です。",
            tech_systems_title: "テクニカルシステム",
            tech_systems_desc: "クリエイティブなモーションと技術的な実行の間のギャップを埋める。",
            tech_systems: [
                "高度なOS導入とセキュリティ",
                "サーバー側のトラブルシューティング",
                "エンタープライズネットワーク構成",
                "CCTVおよびアクセス制御システム"
            ],
            levels: {
                fluent: "流暢",
                native: "母国語",
                conversational: "日常会話"
            },
            categories: {
                vfx: "アニメーション & VFX",
                post: "ポストプロダクション",
                vector: "ベクター & ラスター",
                mgmt: "マネジメント",
                it_solutions: "ITソリューション",
                it_networking: "ITネットワーキング",
                motion: "モーションワークフロー",
                tech: "技術統合"
            },
            edu_list: [
                { degree: "コンピューター工学ディプロマ", institute: "コミラ・ポリテクニック・インスティテュート (BTEB)", year: "2019年 - 2022年" },
                { degree: "中等職業教育", institute: "ダウドカンディ・アダルシャ・ハイスクール", year: "2015年 - 2017年" }
            ],
            cert_list: [
                { name: "高度なモーショングラフィックス", issuer: "スクール・オブ・モーション", year: "2023年" },
                { name: "UI/UXデザインスペシャライゼーション", issuer: "Coursera (Google)", year: "2022年" },
                { name: "ビデオ編集マスタークラス", issuer: "Udemy", year: "2021年" }
            ],
            journey_list: [
                { role: "MasterAnimations Media LTD", year: "2023年 - 現在" },
                { role: "Refsmedia Digital Limited", year: "2022年 - 2023年" },
                { role: "Shopno Jatra Learning Institute", year: "2021年 - 2022年" },
                { role: "グローバル・フリーランス (Fiverr)", year: "2018年 - 現在" },
                { role: "初期のデザインプロジェクト", year: "2015年 - 2018年" }
            ],
            studio: {
                tag: "メインシステム",
                headline_part1: "ハイエンド",
                headline_part2: "ハードウェア",
                headline_part3: "による精密な作業",
                desc: "モーショングラフィックスやVFXには膨大な計算能力が必要です。私のスタジオはエンタープライズグレードのハードウェアを備えており、スムーズなレンダリングと技術的なボトルネックのない制作環境を実現しています。",
                stats: {
                    stat1_val: "4K",
                    stat1_label: "レンダーパイプライン",
                    stat2_val: "リアルタイム",
                    stat2_label: "プレビュー速度",
                    stat3_val: "10ビット",
                    stat3_label: "色深度",
                    stat4_val: "ゼロ",
                    stat4_label: "ドロップフレーム"
                },
                specs: [
                    { title: "プロセッシングパワー", detail: "AMD Ryzen 9 5900X | 12コア 4.8GHz" },
                    { title: "VFXアクセラレーション", detail: "NVIDIA GeForce RTX 3080 10GB" },
                    { title: "メモリ & スピード", detail: "64GB DDR4 3600MHz RAM | 2TB NVMe SSD" },
                    { title: "プロダクションディスプレイ", detail: "プライマリ 4K HDR カラー校正済みモニター" }
                ]
            }
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];
        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    };

    useEffect(() => {
        document.body.className = language === 'bn' ? 'lang-bn' : '';
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
