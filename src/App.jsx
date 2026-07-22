import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowUpRight,
    Award,
    BarChart2,
    Briefcase,
    ExternalLink,
    FileText,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Pause,
    Phone,
    Play,
    Quote,
    TrendingUp,
    Users,
    X
} from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/paridhi-sinha-0a7a941a5/';
const WHATSAPP_URL = 'https://wa.me/917804064032';
const LOR_URL = 'https://drive.google.com/file/d/1crGrJ-4HrPP_kgptgFF-N0tqCCYne0nQ/view?usp=sharing';
const ASIAN_BOSS_PLAYLIST = 'https://www.youtube.com/playlist?list=PLVLzqjWkt0FI';

const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer'
};

const WhatsAppIcon = ({ size = 18 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.718 2.006-1.412.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.8 9.8 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.9 7.025c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const selectedReels = [
    {
        id: 'atlas-1',
        title: 'Atlas Explorer: Stop going to Bali',
        src: '/reels/the.atlas.explorer_1746542468_3626580823771201873_74003670234.mp4'
    },
    {
        id: 'atlas-2',
        title: 'Atlas Explorer: European travel',
        src: '/reels/the.atlas.explorer_1747754561_3636750147483880711_74003670234.mp4'
    },
    {
        id: 'clearlytripping-1',
        title: 'Clearlytripping: Vietnam',
        src: '/reels/clearlytripping_1733378498_3516154606607557131_67742840028.mp4'
    },
    {
        id: 'clearlytripping-2',
        title: 'Clearlytripping: Travel short',
        src: '/reels/clearlytripping_1734761274_3527754395292776428_67742840028.mp4'
    },
    {
        id: 'clearlytripping-3',
        title: 'Clearlytripping: Travel short',
        src: '/reels/clearlytripping_1735106846_3530651335818976714_67742840028.mp4'
    },
    {
        id: 'cleartrip-1',
        title: 'Cleartrip Big Billion Days campaign reel',
        src: '/ads/cleartrip_1727181419_3464159664072706216_2208222441.mp4'
    },
    {
        id: 'cleartrip-2',
        title: 'Cleartrip Big Billion Days campaign reel',
        src: '/ads/cleartrip_1727342660_3465520122929019896_2208222441.mp4'
    },
    {
        id: 'cleartrip-3',
        title: 'Cleartrip Big Billion Days campaign reel',
        src: '/ads/cleartrip_1727678339_3468337905253411268_2208222441.mp4'
    }
];

const longFormGroups = [
    {
        name: 'Atlas Explorer',
        note: 'YouTube',
        links: [
            {
                label: 'Stupid Reasons That Led Indians to Lose Rs 136 Crores on Schengen Visas',
                href: 'https://youtu.be/WhI1gcgefk8?si=EWOB9fYrsXPaC0Uz'
            },
            {
                label: '5 INSANELY CHEAP International Trips from India (This Winter!)',
                href: 'https://youtu.be/sQE1R-Hyq4k?si=fSLbIvKaWsao745L'
            },
            {
                label: 'Best Country to RETIRE for INDIANS with Small Pension',
                href: 'https://youtu.be/9WUqmqNUr3U?si=U5AnaScBB8hueTCZ'
            }
        ]
    },
    {
        name: 'Full Disclosure',
        note: 'YouTube',
        links: [
            {
                label: 'How To SURVIVE Corporate? ft. Corporate PAGLUs',
                href: 'https://youtu.be/RAHXayh57W4?si=0z_p6VWq3Ei5313S'
            }
        ]
    },
    {
        name: 'Asian Boss',
        note: 'Street interviews',
        links: [
            {
                label: 'How Bad is the Gap Between Rich and Poor in India?',
                href: 'https://youtu.be/vPrJ6yo0M2Q?si=VqAZTxEiOPXXZG4F'
            },
            {
                label: 'What Do Indians Think Of MrBeast?',
                href: 'https://youtu.be/2O8tkMrbWK0?si=ELp7Y_f9bfZuDSX3'
            },
            {
                label: 'What Do Indians Think About The UK?',
                href: 'https://youtu.be/0k-USvGtNJ0?si=gQEB698MHQUUpxwK'
            },
            {
                label: 'View all Asian Boss work',
                href: ASIAN_BOSS_PLAYLIST
            }
        ]
    },
    {
        name: 'Newsroom credits',
        note: 'NDTV and Indian Express',
        links: [
            {
                label: 'NDTV India - Gold vs Crypto',
                href: 'https://www.youtube.com/watch?v=SPCCE9T7mcA'
            },
            {
                label: 'NDTV 24x7 - Fuel Price panel',
                href: 'https://www.youtube.com/watch?v=6i5BSL_9skU&t=32s'
            },
            {
                label: 'Indian Express - Video team contribution',
                href: 'https://www.youtube.com/watch?v=R_6acp16xpw'
            }
        ]
    }
];

const shortFormGroups = [
    {
        name: 'Atlas Explorer',
        note: 'Playlist and selected reels',
        links: [
            {
                label: 'Atlas Explorer shorts playlist',
                href: 'https://www.youtube.com/playlist?list=PLObwOTWRACGY'
            },
            {
                label: 'Atlas Explorer reel 01',
                href: 'https://www.instagram.com/reel/DJ4VP2loE0H/?igsh=d3JsaXQ1ZW9zaXpt'
            },
            {
                label: 'Atlas Explorer reel 02',
                href: 'https://www.instagram.com/reel/DJrenOYBgni/?igsh=Zm1ybjFtYmE3OTVn'
            },
            {
                label: 'Atlas Explorer reel 03',
                href: 'https://www.instagram.com/reel/DJUNAt2IEFR/?igsh=MWRnam8yd3l5ODVneQ=='
            }
        ]
    },
    {
        name: 'Clearlytripping',
        note: 'Selected reels',
        links: [
            {
                label: 'Clearlytripping reel 01',
                href: 'https://www.instagram.com/reel/DN7gc8ek_Cm/?igsh=MXhrcGZvejJ0N3dxNQ=='
            },
            {
                label: 'Clearlytripping reel 02',
                href: 'https://www.instagram.com/reel/DD1Ge6CP7fs/?igsh=MXVxYnQwZjdnMzV1Zw=='
            },
            {
                label: 'Clearlytripping reel 03',
                href: 'https://www.instagram.com/reel/DD_ZK8JP53K/?igsh=OTB3ZXZqeXZqaDE2'
            }
        ]
    },
    {
        name: 'Cleartrip Big Billion Days',
        note: 'Performance campaign',
        links: [
            {
                label: 'Big Billion Days reel 01',
                href: 'https://www.instagram.com/cleartrip/reel/DAnl-jVS2fm/'
            },
            {
                label: 'Big Billion Days reel 02',
                href: 'https://www.instagram.com/cleartrip/reel/DAkvfSDJvHA/'
            },
            {
                label: 'Big Billion Days reel 03',
                href: 'https://www.instagram.com/cleartrip/reel/DAiAvLjpunE/'
            }
        ]
    },
    {
        name: 'Asian Boss Shorts',
        note: 'Including the 41M+ view short',
        links: [
            {
                label: 'Asian Boss shorts playlist',
                href: 'https://youtube.com/playlist?list=PLVLzqjWkt0FI&si=hfpwU2ZDlbg484SB'
            },
            {
                label: 'Indians React to Ronny Chieng - 41M+ views',
                href: 'https://www.youtube.com/shorts/N5BUTJWwlcE'
            },
            {
                label: 'Asian Boss short 02',
                href: 'https://www.youtube.com/shorts/YDTj6gEUIC4'
            },
            {
                label: 'Asian Boss short 03',
                href: 'https://www.youtube.com/shorts/CqStZr9dWJQ'
            }
        ]
    }
];

const careerEntries = [
    {
        company: 'WSP',
        location: 'Bengaluru',
        role: 'Marketing Editor',
        period: 'Jul 2023 - Aug 2024',
        desc: 'Maintained a consistent brand voice across marketing and proposal content.',
        highlights: [
            'Edited engineering resumes to foreground technical skills and project experience',
            'Produced clear project descriptions for new-business proposals'
        ]
    },
    {
        company: 'Asian Boss',
        location: 'Delhi, India',
        role: 'Host / Interviewer',
        period: 'Nov 2022 - May 2023',
        desc: 'Reported and produced people-led stories for a global audience.',
        highlights: [
            'Interviewed 50+ people across seven long-form videos',
            'Created the channel\'s highest-viewed short, reaching 41M+ views'
        ],
        cta: {
            label: 'View Asian Boss playlist',
            href: ASIAN_BOSS_PLAYLIST
        }
    },
    {
        company: 'The Indian Express',
        location: 'Noida, Uttar Pradesh, India',
        role: 'Editorial Intern',
        period: 'Nov 2022 - Jan 2023',
        desc: 'Worked across the editorial desk, CMS and video team.',
        highlights: [
            'Edited copy and published through WordPress',
            'Contributed to a credited newsroom video'
        ],
        cta: {
            label: 'Watch video credit',
            href: 'https://www.youtube.com/watch?v=R_6acp16xpw'
        }
    },
    {
        company: 'NDTV India & NDTV 24x7',
        location: 'Delhi NCR',
        role: 'Student Journalist',
        period: 'Oct 2021 - Nov 2021',
        desc: 'Researched live panel topics and prepared questions for national television.',
        highlights: [
            'Researched and questioned panelists for NDTV India\'s "Gold vs Crypto" discussion',
            'Researched the fuel-price debate and questioned panelists for NDTV 24x7'
        ],
        links: [
            {
                label: 'Watch NDTV India',
                href: 'https://www.youtube.com/watch?v=SPCCE9T7mcA'
            },
            {
                label: 'Watch NDTV 24x7',
                href: 'https://www.youtube.com/watch?v=6i5BSL_9skU&t=32s'
            }
        ]
    }
];

const internships = [
    {
        company: 'BuSkills Education',
        role: 'Content Manager',
        period: 'Sep 2021 - Jan 2022',
        location: 'Lucknow, Uttar Pradesh',
        desc: 'Published and optimized content, managed editorial consistency and helped define the brand voice.'
    },
    {
        company: 'Those Archaic Flaws',
        role: 'Social Media Intern',
        period: 'Jul 2021 - Sep 2021',
        location: 'Remote',
        desc: 'Developed social content and publishing strategies that grew reach and engagement on Instagram.'
    },
    {
        company: 'CollegeTips.in',
        role: 'Graphic Design, Social Media & Content Intern',
        period: 'May 2021 - Jun 2021',
        location: 'Indore, Madhya Pradesh',
        desc: 'Created campaign posters, scripts and social copy while supporting CMS updates and digital outreach.'
    }
];

const projectEntries = [
    {
        title: 'Keyframe'
    },
    {
        title: 'The Print Podcast',
        role: 'Interviewer',
        impact: '90K+ Reach',
        desc: 'Interviewed Jyoti Yadav and secured guests while building the project from a new account.'
    },
    {
        title: 'LGBTQ+ Documentary',
        role: 'Storyteller',
        impact: 'Multimedia Story',
        desc: 'Produced a multimedia story exploring challenges faced by the LGBTQ+ community in India.'
    },
    {
        title: 'Panel Production',
        role: 'Executive Producer',
        impact: '15-minute Show',
        desc: 'Produced a panel show and managed a crew of more than six people.'
    }
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuButtonRef = useRef(null);
    const menuWasOpen = useRef(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if (isOpen) {
            menuWasOpen.current = true;
        } else if (menuWasOpen.current) {
            menuButtonRef.current?.focus();
            menuWasOpen.current = false;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Videos', href: '#video-work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Appreciation', href: '#appreciation' }
    ];

    return (
        <nav
            aria-label="Primary navigation"
            className="site-nav fixed top-0 left-0 w-full z-50 transition"
            data-scrolled={scrolled}
        >
            <div className="container flex justify-between items-center">
                <a href="#top" className="brand-link" aria-label="Paridhi Sinha - back to top">
                    PARIDHI<span>.</span>
                </a>

                <div className="md:flex gap-8 items-center hidden">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link transition">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn nav-cta">Get in touch</a>
                </div>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className="md:hidden mobile-menu-button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-navigation"
                        className="mobile-nav"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mobile-nav-close"
                            aria-label="Close navigation"
                            autoFocus
                        >
                            <X size={28} />
                        </button>
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            className="btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.32 }}
                            onClick={() => setIsOpen(false)}
                        >
                            Get in touch
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    const stats = [
        { value: '1.2M+', label: 'Followers grown', icon: Users, color: '#FF6B35' },
        { value: '100M+', label: 'Viral views', icon: TrendingUp, color: '#FF3366' },
        { value: '5+', label: 'IPs scaled', icon: BarChart2, color: '#00D4FF' },
        { value: '500+', label: 'Posts made', icon: FileText, color: '#B8B8C0' }
    ];

    return (
        <section id="top" className="hero-section">
            <div className="hero-glow animate-pulse-glow" aria-hidden="true" />
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        I scale <span>brands</span> from zero to millions.
                    </h1>

                    <p className="hero-copy">
                        Built content for AirAsia, Cleartrip, Atlas, and Leverage Edu, owning everything end to end: research, scripting, and post-production. Took a brand from 0 to 600K followers through organic content alone, and built performance ads that drove real reach and revenue.
                    </p>

                    <div className="hero-actions flex flex-wrap gap-4 items-center">
                        <a href="#experience" className="btn">
                            View my work <ArrowUpRight size={16} />
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            className="contact-pill"
                            aria-label="Chat with Paridhi on WhatsApp at 7804064032"
                            {...externalLinkProps}
                        >
                            <WhatsAppIcon size={18} />
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href={LINKEDIN_URL}
                            className="icon-button"
                            aria-label="Visit Paridhi Sinha on LinkedIn"
                            {...externalLinkProps}
                        >
                            <Linkedin size={19} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="stats-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="stat">
                                <Icon size={20} style={{ color: stat.color }} aria-hidden="true" />
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const VideoPlayer = ({ src, id, title, activeVideoId, setActiveVideoId }) => {
    const videoRef = useRef(null);
    const isPlaying = activeVideoId === id;

    useEffect(() => {
        if (!isPlaying && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setActiveVideoId(null);
            return;
        }

        const playPromise = videoRef.current.play();
        if (playPromise) {
            playPromise.catch(() => setActiveVideoId(null));
        }
        setActiveVideoId(id);
    };

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                src={src + '#t=0.001'}
                aria-label={title}
                onPlay={() => setActiveVideoId(id)}
                onPause={() => {
                    if (activeVideoId === id) setActiveVideoId(null);
                }}
                onEnded={() => setActiveVideoId(null)}
                loop
                playsInline
                preload="metadata"
            />
            {!isPlaying && (
                <button
                    type="button"
                    className="video-play-overlay"
                    onClick={togglePlay}
                    aria-label={'Play ' + title}
                >
                    <span>
                        <Play size={14} fill="currentColor" />
                    </span>
                </button>
            )}
            {isPlaying && (
                <button
                    type="button"
                    className="video-pause"
                    onClick={togglePlay}
                    aria-label={'Pause ' + title}
                >
                    <Pause size={12} />
                </button>
            )}
        </div>
    );
};

const LinkButton = ({ href, children }) => (
    <a href={href} className="text-link" {...externalLinkProps}>
        {children}
        <ArrowUpRight size={14} aria-hidden="true" />
    </a>
);

const YaasExperience = () => {
    const [activeVideoId, setActiveVideoId] = useState(null);
    const roles = [
        {
            role: 'Senior Creative Lead',
            period: 'May 2025 - Present',
            desc: 'Leading a 16-member team across content strategy, production and channel growth.',
            highlights: [
                'Scaled Atlas Explorer from 0 to 600K followers through organic content',
                'Grew YouTube to 200K subscribers',
                'Expanded ownership across multiple travel and lifestyle IPs'
            ]
        },
        {
            role: 'Channel Account Manager',
            period: 'Oct 2024 - Apr 2025',
            desc: 'Owned Atlas Explorer end to end, from audience research and scripting to post-production.',
            highlights: [
                'Wrote reels that reached 48M+ and 10M+ views',
                'Reached the first 100K followers in 11 posts'
            ]
        },
        {
            role: 'Scriptwriter & Content Operations Manager',
            period: 'Aug 2024 - Sep 2024',
            desc: 'Built travel content and performance-led campaign work for Cleartrip.',
            highlights: [
                'Helped scale Clearlytripping and produced high-performing organic reels',
                'Created seven Cleartrip Big Billion Days ads, including 1M+ view campaign work'
            ]
        }
    ];

    return (
        <motion.article
            className="card company-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
        >
            <div className="company-card-header">
                <div>
                    <p className="company-kicker">Current</p>
                    <h3>YAAS!</h3>
                    <p className="company-location">
                        <MapPin size={14} aria-hidden="true" /> Bengaluru, India
                    </p>
                </div>
                <span className="tag">Aug 2024 - Present</span>
            </div>

            <div className="role-timeline" aria-label="YAAS role progression">
                {roles.map((role) => (
                    <div className="role-entry" key={role.role}>
                        <div className="role-heading">
                            <h4>{role.role}</h4>
                            <span>{role.period}</span>
                        </div>
                        <p>{role.desc}</p>
                        <ul>
                            {role.highlights.map((highlight) => (
                                <li key={highlight}>
                                    <span aria-hidden="true">•</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="selected-reels">
                <div className="selected-reels-heading">
                    <div>
                        <p className="company-kicker">Selected work</p>
                        <h4>Atlas, Clearlytripping & Cleartrip</h4>
                    </div>
                    <a href="#video-work" className="text-link">
                        All video links <ArrowUpRight size={14} />
                    </a>
                </div>
                <div className="video-strip">
                    {selectedReels.map((video) => (
                        <VideoPlayer
                            key={video.id}
                            {...video}
                            activeVideoId={activeVideoId}
                            setActiveVideoId={setActiveVideoId}
                        />
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

const ClientExperience = () => {
    const entries = [
        {
            company: 'AirAsia',
            role: 'Campaign content with Asian Boss',
            desc: 'Selected campaign work created for AirAsia in collaboration with Asian Boss.'
        },
        {
            company: '1000 Media',
            role: 'Selected client experience'
        }
    ];

    return (
        <div className="client-experience-grid">
            {entries.map((entry, index) => (
                <motion.article
                    className="card compact-experience-card"
                    key={entry.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                >
                    <Briefcase size={19} aria-hidden="true" />
                    <div>
                        <p className="company-kicker">Client experience</p>
                        <h3>{entry.company}</h3>
                        <p className="compact-role">{entry.role}</p>
                        {entry.period && <span className="compact-period">{entry.period}</span>}
                        {entry.desc && <p>{entry.desc}</p>}
                    </div>
                </motion.article>
            ))}
        </div>
    );
};

const CareerCard = ({ experience, index }) => (
    <motion.article
        className="card career-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        viewport={{ once: true }}
    >
        <div className="career-card-heading">
            <div>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
                {experience.location && (
                    <span className="career-location">
                        <MapPin size={13} aria-hidden="true" /> {experience.location}
                    </span>
                )}
            </div>
            <span className="tag">{experience.period}</span>
        </div>

        <p className="career-desc">{experience.desc}</p>
        <ul className="highlight-list">
            {experience.highlights.map((highlight) => (
                <li key={highlight}>
                    <span aria-hidden="true">•</span>
                    {highlight}
                </li>
            ))}
        </ul>

        {experience.cta && (
            <LinkButton href={experience.cta.href}>{experience.cta.label}</LinkButton>
        )}

        {experience.links && (
            <div className="inline-links">
                {experience.links.map((link) => (
                    <LinkButton href={link.href} key={link.href}>{link.label}</LinkButton>
                ))}
            </div>
        )}
    </motion.article>
);

const Experience = () => (
    <section id="experience">
        <div className="container">
            <p className="section-subtitle">Career</p>
            <h2 className="section-title">Experience</h2>

            <YaasExperience />

            <div className="section-block">
                <div className="minor-heading">
                    <p className="section-subtitle">Brand partnerships</p>
                    <h3>Selected client experience</h3>
                </div>
                <ClientExperience />
            </div>

            <div className="career-list">
                {careerEntries.map((experience, index) => (
                    <CareerCard
                        key={experience.company}
                        experience={experience}
                        index={index}
                    />
                ))}
            </div>

            <div className="section-block">
                <div className="minor-heading">
                    <p className="section-subtitle">Early experience</p>
                    <h3>Internships</h3>
                </div>
                <div className="internship-grid">
                    {internships.map((internship, index) => (
                        <motion.article
                            className="card internship-card"
                            key={internship.company}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <span className="tag">{internship.period}</span>
                            <h4>{internship.role}</h4>
                            <p className="internship-company">{internship.company}</p>
                            <span className="internship-location">
                                <MapPin size={12} aria-hidden="true" /> {internship.location}
                            </span>
                            <p>{internship.desc}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const VideoLinkCard = ({ group, index }) => (
    <motion.article
        className="card video-link-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        viewport={{ once: true }}
    >
        <div className="video-link-card-heading">
            <div>
                <h4>{group.name}</h4>
                <p>{group.note}</p>
            </div>
            <Play size={17} aria-hidden="true" />
        </div>
        <ul>
            {group.links.map((link) => (
                <li key={link.href}>
                    <a href={link.href} {...externalLinkProps}>
                        <span>{link.label}</span>
                        <ExternalLink size={14} aria-hidden="true" />
                    </a>
                </li>
            ))}
        </ul>
    </motion.article>
);

const VideoWork = () => (
    <section id="video-work" className="surface-section">
        <div className="container">
            <p className="section-subtitle">Watch</p>
            <h2 className="section-title">Video work</h2>

            <div className="video-work-block">
                <div className="minor-heading">
                    <span>01</span>
                    <h3>Long-form</h3>
                </div>
                <div className="video-work-grid">
                    {longFormGroups.map((group, index) => (
                        <VideoLinkCard key={group.name} group={group} index={index} />
                    ))}
                </div>
            </div>

            <div className="video-work-block">
                <div className="minor-heading">
                    <span>02</span>
                    <h3>Short-form</h3>
                </div>
                <div className="video-work-grid">
                    {shortFormGroups.map((group, index) => (
                        <VideoLinkCard key={group.name} group={group} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Projects = () => (
    <section id="projects">
        <div className="container">
            <p className="section-subtitle">Work</p>
            <h2 className="section-title">Selected projects</h2>

            <div className="project-grid">
                {projectEntries.map((project, index) => (
                    <motion.article
                        key={project.title}
                        className="card project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-heading">
                            <div>
                                <h3>{project.title}</h3>
                                {project.role && <span>{project.role}</span>}
                            </div>
                        </div>
                        {project.desc && <p>{project.desc}</p>}
                        {project.impact && <span className="tag">{project.impact}</span>}
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

const Skills = () => {
    const skills = {
        Strategy: ['Content Strategy', 'Scripting', 'Client Management', 'Content Operations'],
        Creative: ['Adobe Creative Suite', 'Video Production', 'Audio Editing', 'Post-production'],
        Technical: ['CMS Management', 'Social Media Analytics', 'Performance Content']
    };

    const certifications = [
        {
            name: 'Content Creator Masterclass',
            issuer: 'All Things WTF',
            issued: 'Issued Jun 2024',
            href: 'https://drive.google.com/file/d/1rsf0aSB5fRpHzv12GzOcrexpedXY4LdQ/view?usp=sharing'
        },
        {
            name: 'Content Creator Masterclass',
            issuer: 'Nas Academy',
            issued: 'Issued Jun 2024',
            href: 'https://drive.google.com/file/d/1rsf0aSB5fRpHzv12GzOcrexpedXY4LdQ/view?usp=sharing'
        }
    ];

    return (
        <section id="skills" className="surface-section">
            <div className="container skills-layout">
                <div>
                    <p className="section-subtitle">Expertise</p>
                    <h2 className="section-title">Skills</h2>

                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-group">
                            <h3>{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span key={item} className="tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <p className="section-subtitle">Background</p>
                    <h2 className="section-title">Education</h2>

                    <div className="card education-card">
                        <h3>B.A. (Hons.) Journalism & Media Studies</h3>
                        <p>O.P. Jindal Global University, Sonipat</p>
                        <span>2020 - 2023</span>
                        <div><span className="tag">GPA: 6.35 / 8</span></div>
                    </div>

                    <div className="certification-block">
                        <p className="section-subtitle">Credentials</p>
                        <h3>Certifications</h3>
                        <div className="certification-grid">
                            {certifications.map((certification) => (
                                <a
                                    className="card certification-card"
                                    href={certification.href}
                                    key={certification.issuer}
                                    aria-label={'View ' + certification.name + ' credential from ' + certification.issuer}
                                    {...externalLinkProps}
                                >
                                    <Award size={19} aria-hidden="true" />
                                    <div>
                                        <h4>{certification.name}</h4>
                                        <p>{certification.issuer}</p>
                                        <span>{certification.issued}</span>
                                    </div>
                                    <ExternalLink className="certification-link-icon" size={14} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Appreciation = () => (
    <section id="appreciation">
        <div className="container">
            <p className="section-subtitle">Recognition</p>
            <h2 className="section-title">Appreciation & LOR</h2>

            <div className="appreciation-grid">
                <motion.blockquote
                    className="card quote-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Quote size={30} aria-hidden="true" />
                    <p>
                        Paridhi, thanks for sharing this! It was great working with you, and when I read your application I could see your drive and enthusiasm right away. My gut told me this would work out. And the result speaks for itself, even MrBeast noticed it. We cracked the viral code through strategy, timing, storytelling, and logistics, and none of it would have been possible without your execution on the ground, even when it wasn't always easy. I'm so glad you've used this experience as a stepping stone in the content industry. Wishing you all the best!
                    </p>
                    <footer>
                        <strong>Marie-Christine Schulz</strong>
                        <span>Chief Content Officer, Asian Boss</span>
                    </footer>
                </motion.blockquote>

                <motion.aside
                    className="card lor-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    viewport={{ once: true }}
                >
                    <div className="lor-icon">
                        <FileText size={24} aria-hidden="true" />
                    </div>
                    <p className="company-kicker">Letter of recommendation</p>
                    <h3>Read the full LOR</h3>
                    <p>
                        A detailed recommendation covering Paridhi's editorial judgment, creative execution and on-ground ownership.
                    </p>
                    <a href={LOR_URL} className="btn" {...externalLinkProps}>
                        Open LOR <ExternalLink size={15} />
                    </a>
                </motion.aside>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer id="contact" className="site-footer">
        <div className="container">
            <div className="footer-intro text-center">
                <p className="section-subtitle">Contact</p>
                <h2>Let's work together</h2>
                <p>Open to freelance collaborations and leadership roles in content strategy.</p>

                <div className="contact-list">
                    <a href="mailto:paridhisinha100@gmail.com">
                        <Mail size={18} aria-hidden="true" /> paridhisinha100@gmail.com
                    </a>
                    <a href="tel:+917804064032">
                        <Phone size={18} aria-hidden="true" /> +91 7804064032
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-socials">
                    <a
                        href={WHATSAPP_URL}
                        aria-label="Chat with Paridhi on WhatsApp"
                        {...externalLinkProps}
                    >
                        <WhatsAppIcon size={18} />
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        aria-label="Visit Paridhi Sinha on LinkedIn"
                        {...externalLinkProps}
                    >
                        <Linkedin size={18} />
                    </a>
                </div>
                <p>© 2026 Paridhi Sinha</p>
                <p className="credit">
                    Made by <a href="https://zetrr.media/" {...externalLinkProps}>Zetrr Media</a>
                </p>
            </div>
        </div>
    </footer>
);

const App = () => (
    <div>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navigation />
        <main id="main-content">
            <Hero />
            <Experience />
            <VideoWork />
            <Projects />
            <Skills />
            <Appreciation />
        </main>
        <Footer />
    </div>
);

export default App;
