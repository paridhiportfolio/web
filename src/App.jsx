import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Instagram,
    Youtube,
    Linkedin,
    Mail,
    Phone,
    Menu,
    X,
    ArrowUpRight,
    Play,
    Pause,
    Users,
    TrendingUp,
    BarChart2,
    FileText
} from 'lucide-react';

// ============================================
// NAVIGATION
// ============================================
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition`}
            style={{
                padding: scrolled ? '12px 0' : '20px 0',
                background: scrolled ? 'rgba(10, 10, 12, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
        >
            <div className="container flex justify-between items-center">
                <a href="#" style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
                    PARIDHI<span style={{ color: '#FF6B35' }}>.</span>
                </a>

                {/* Desktop Nav */}
                <div className="md:flex gap-8 items-center hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontSize: '0.8rem', color: '#B8B8C0', fontWeight: 500 }}
                            className="transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>Get in Touch</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ padding: 8, color: '#fff' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(10, 10, 12, 0.98)',
                            zIndex: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 32
                        }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'absolute', top: 20, right: 20, padding: 8, color: '#fff' }}
                        >
                            <X size={28} />
                        </button>
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff' }}
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
                            transition={{ delay: 0.4 }}
                            onClick={() => setIsOpen(false)}
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// ============================================
// HERO
// ============================================
const Hero = () => {
    const stats = [
        { value: '1.2M+', label: 'Followers Grown', icon: Users, color: '#FF6B35' },
        { value: '100M+', label: 'Viral Views', icon: TrendingUp, color: '#FF3366' },
        { value: '5+', label: 'IPs Scaled', icon: BarChart2, color: '#00D4FF' },
        { value: '500+', label: 'Posts Made', icon: FileText, color: '#B8B8C0' },
    ];

    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(120px, 15vh, 160px)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div
                className="animate-pulse-glow"
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: '50%',
                    background: 'radial-gradient(ellipse, rgba(255, 51, 102, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B35', marginBottom: 16, fontWeight: 600 }}>
                        Senior Manager @ YAAS!
                    </p>

                    <h1 style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', lineHeight: 1.1, marginBottom: 24, fontWeight: 700, color: '#fff', maxWidth: 700 }}>
                        I scale <span style={{ color: '#fff' }}>brands</span> from zero to millions.
                    </h1>

                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, marginBottom: 40, maxWidth: 600, color: '#B8B8C0' }}>
                        Content Strategist & Brand Scaler. Grew Atlas Explorer from 0 to 600K followers in 143 posts. I challenge attention spans through high-impact storytelling.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a href="#experience" className="btn">
                            View My Work <ArrowUpRight size={16} />
                        </a>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={18} />, href: 'https://instagram.com' },
                                { icon: <Youtube size={18} />, href: 'https://youtube.com' },
                                { icon: <Linkedin size={18} />, href: 'https://linkedin.com' }
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" className="btn-ghost" style={{ padding: '10px 12px' }}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: 16,
                        marginTop: 80,
                        padding: 24,
                        background: 'rgba(19, 19, 22, 0.8)',
                        borderRadius: 20,
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} style={{ padding: '16px 20px', textAlign: 'center' }}>
                                <Icon size={20} style={{ color: stat.color, marginBottom: 12 }} />
                                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 4 }}>{stat.value}</div>
                                <div style={{ fontSize: '0.7rem', color: '#6B6B75', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

// ============================================
// VIDEO PLAYER
// ============================================
const VideoPlayer = ({ src, id, activeVideoId, setActiveVideoId }) => {
    const videoRef = React.useRef(null);
    const isPlaying = activeVideoId === id;

    useEffect(() => {
        if (!isPlaying && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setActiveVideoId(null);
        } else {
            videoRef.current.play();
            setActiveVideoId(id);
        }
    };

    return (
        <div
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: '9/16', width: 140, background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}
        >
            <video
                ref={videoRef}
                src={`${src}#t=0.001`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onPlay={() => setActiveVideoId(id)}
                controls={false}
                onClick={togglePlay}
                loop
                playsInline
                muted
                preload="metadata"
            />
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.4)',
                    opacity: isPlaying ? 0 : 1,
                    pointerEvents: isPlaying ? 'none' : 'auto',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s'
                }}
                onClick={togglePlay}
            >
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255, 107, 53, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={14} fill="white" />
                </div>
            </div>
            {isPlaying && (
                <button
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    style={{ position: 'absolute', top: 8, right: 8, padding: 6, borderRadius: 6, background: 'rgba(0,0,0,0.6)' }}
                >
                    <Pause size={12} />
                </button>
            )}
        </div>
    );
};

// ============================================
// EXPERIENCE
// ============================================
const Experience = () => {
    const [activeVideoId, setActiveVideoId] = useState(null);

    const experiences = [
        {
            company: 'YAAS!',
            location: 'Bengaluru',
            role: 'Senior Manager',
            period: 'May 2025 - Present',
            desc: 'Leading a 16-member team, directing content strategy, production, and overall channel growth.',
            highlights: [
                'Scaled "Atlas Explorer" Instagram from 0 to 600K followers in 143 posts',
                'Reached first 100K in just 11 posts',
                'Grew YouTube to 200K subscribers',
                'Launching Vodafone\'s new IP "TrvlPass Official"'
            ]
        },
        {
            company: 'YAAS! (Atlys)',
            role: 'Channel Account Manager',
            period: 'Oct 2024 - Apr 2025',
            desc: 'Solely managed and scaled Atlys\' IP "Atlas Explorer" to 600K.',
            highlights: [
                'Scripted viral reels with 48M+ and 10M+ views',
                'Promoted to manage additional IP under Atlas',
                'End-to-end creative and strategic execution'
            ],
            videos: [
                { id: 'ae1', src: '/reels/the.atlas.explorer_1746542468_3626580823771201873_74003670234.mp4' },
                { id: 'ae2', src: '/reels/the.atlas.explorer_1747754561_3636750147483880711_74003670234.mp4' },
                { id: 'ae3', src: '/reels/clearlytripping_1733378498_3516154606607557131_67742840028.mp4' },
                { id: 'ae4', src: '/reels/entrelevate_1753358405_3683759361239566206_75580083845.mp4' },
            ]
        },
        {
            company: 'YAAS! (Cleartrip)',
            role: 'Content Operations Manager',
            period: 'Aug 2024 - Sep 2024',
            desc: 'Built Clearlytripping to 100K in 5 months.',
            highlights: [
                '250K followers in 3 months',
                'Reels reaching 29M, 22M, 5M+ views',
                'Led Big Billion Days campaign (1M+ views)'
            ],
            videos: [
                { id: 'ct1', src: '/ads/cleartrip_1727181419_3464159664072706216_2208222441.mp4' },
                { id: 'ct2', src: '/ads/cleartrip_1727342660_3465520122929019896_2208222441.mp4' },
                { id: 'ct3', src: '/ads/cleartrip_1727678339_3468337905253411268_2208222441.mp4' },
            ]
        },
        {
            company: 'WSP',
            location: 'Bangalore',
            role: 'Marketing Editor',
            period: 'July 2023 - Aug 2024',
            desc: 'Ensured consistent brand voice across all marketing content.',
            highlights: [
                'Oversaw engineering resumes',
                'Produced project descriptions for proposals'
            ]
        },
        {
            company: 'Asian Boss',
            location: 'Seoul, South Korea',
            role: 'Host/Reporter (Freelance)',
            period: 'Nov 2022 - May 2023',
            desc: 'Created viral content for global audience.',
            highlights: [
                'Content with 40M+ views on YouTube',
                'Interviewed 50+ individuals',
                'Long-form videos with 400K+ views'
            ]
        },
        {
            company: 'Indian Express',
            location: 'Noida',
            role: 'Editorial Intern',
            period: 'Dec 2022 - Jan 2023',
            desc: 'Worked on editorial and video team.',
            highlights: [
                'Edited copies, worked on CMS',
                'Video team contributor'
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <p className="section-subtitle">Career</p>
                <h2 className="section-title">Experience</h2>

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: 4 }}>{exp.role}</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#B8B8C0' }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                                    </div>
                                    <span className="tag">{exp.period}</span>
                                </div>
                            </div>

                            <p style={{ color: '#B8B8C0', marginBottom: 16, fontSize: '0.9rem', lineHeight: 1.7 }}>{exp.desc}</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: exp.videos ? 20 : 0 }}>
                                {exp.highlights.map((h, j) => (
                                    <li key={j} style={{ display: 'flex', gap: 12, fontSize: '0.85rem' }}>
                                        <span style={{ color: '#FF6B35' }}>•</span>
                                        <span style={{ color: '#E8E8ED' }}>{h}</span>
                                    </li>
                                ))}
                            </ul>

                            {exp.videos && (
                                <div className="flex gap-3 overflow-x-auto" style={{ paddingTop: 8, paddingBottom: 4 }}>
                                    {exp.videos.map((vid) => (
                                        <VideoPlayer
                                            key={vid.id}
                                            {...vid}
                                            activeVideoId={activeVideoId}
                                            setActiveVideoId={setActiveVideoId}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================
// PROJECTS
// ============================================
const Projects = () => {
    const projects = [
        { title: 'Asian Boss', role: 'Host/Reporter', impact: '40M+ Views', desc: 'Viral street interviews in Seoul with 50+ individuals.' },
        { title: 'The Print Podcast', role: 'Interviewer', impact: '90K+ Reach', desc: 'Interviewed Jyoti Yadav. Secured guests from zero followers.' },
        { title: 'LGBTQ+ Documentary', role: 'Storyteller', impact: 'Award Quality', desc: 'Multimedia story on community challenges in India.' },
        { title: 'NDTV 24x7', role: 'Student Journalist', impact: 'National TV', desc: 'Researched & questioned panelists on "Fuel Price" topic.' },
        { title: 'NDTV India', role: 'Student Journalist', impact: 'National TV', desc: 'Researched "Gold vs Crypto" and questioned panelists.' },
        { title: 'Panel Production', role: 'Executive Producer', impact: '15-min Show', desc: 'Produced panel, managed crew of 6+ people.' }
    ];

    return (
        <section id="projects" style={{ background: '#0F0F12' }}>
            <div className="container">
                <p className="section-subtitle">Work</p>
                <h2 className="section-title">Selected Projects</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card"
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                <div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: 4 }}>{p.title}</h3>
                                    <span style={{ fontSize: '0.75rem', color: '#6B6B75' }}>{p.role}</span>
                                </div>
                                <ArrowUpRight size={16} style={{ color: '#6B6B75' }} />
                            </div>
                            <p style={{ flex: 1, fontSize: '0.85rem', color: '#B8B8C0', lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
                            <span className="tag">{p.impact}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================
// SKILLS
// ============================================
const Skills = () => {
    const skills = {
        'Strategy': ['Strategising', 'Scripting', 'Client Management', 'Content Operations'],
        'Creative': ['Adobe Creative Suite', 'Illustrator', 'Video Production', 'Audio Editing'],
        'Technical': ['CMS Management', 'Social Media Analytics']
    };

    return (
        <section id="skills">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
                    <div>
                        <p className="section-subtitle">Expertise</p>
                        <h2 className="section-title">Skills</h2>

                        {Object.entries(skills).map(([category, items], i) => (
                            <div key={i} style={{ marginBottom: 28 }}>
                                <h4 style={{ fontSize: '0.7rem', color: '#6B6B75', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item, j) => (
                                        <span key={j} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: 32 }}>
                            <h4 style={{ fontSize: '0.7rem', color: '#6B6B75', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Certification</h4>
                            <span className="tag">Content Creator Masterclass - WTF is X Nas Academy</span>
                        </div>
                    </div>

                    <div>
                        <p className="section-subtitle">Background</p>
                        <h2 className="section-title">Education</h2>

                        <div className="card" style={{ marginBottom: 32 }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: 6 }}>B.A. (Hons.) Journalism & Media Studies</h3>
                            <p style={{ fontSize: '0.875rem', color: '#B8B8C0', marginBottom: 4 }}>O.P. Jindal Global University, Sonipat</p>
                            <p style={{ fontSize: '0.8rem', color: '#6B6B75', marginBottom: 12 }}>Graduated: May 2023</p>
                            <span className="tag">GPA: 6.35 / 8</span>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '0.7rem', color: '#6B6B75', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Interests</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {[
                                    'Challenging people\'s ADHD through content',
                                    'Travel and Exploration',
                                    'Professional Doomscroller'
                                ].map((interest, i) => (
                                    <li key={i} style={{ fontSize: '0.85rem', color: '#B8B8C0' }}>• {interest}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => {
    return (
        <footer id="contact" style={{ paddingTop: 80, paddingBottom: 40 }}>
            <div className="container">
                <div className="text-center" style={{ maxWidth: 500, margin: '0 auto' }}>
                    <p className="section-subtitle">Contact</p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: 20, color: '#fff' }}>Let's work together</h2>
                    <p style={{ fontSize: '0.95rem', color: '#B8B8C0', marginBottom: 32, lineHeight: 1.7 }}>
                        Open to freelance collaborations and leadership roles in content strategy.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', marginBottom: 48 }}>
                        <a href="mailto:paridhisinha100@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#E8E8ED' }}>
                            <Mail size={18} style={{ color: '#FF6B35' }} /> paridhisinha100@gmail.com
                        </a>
                        <a href="tel:+917804064032" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#E8E8ED' }}>
                            <Phone size={18} style={{ color: '#FF6B35' }} /> +91 7804064032
                        </a>
                    </div>
                </div>

                <div className="border-t" style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    <div className="flex gap-6">
                        {[
                            { icon: <Instagram size={18} />, href: '#' },
                            { icon: <Linkedin size={18} />, href: '#' },
                            { icon: <Youtube size={18} />, href: '#' }
                        ].map((s, i) => (
                            <a key={i} href={s.href} style={{ color: '#6B6B75' }} className="transition">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                    <p style={{ fontSize: '0.7rem', color: '#6B6B75' }}>© 2026 Paridhi Sinha</p>
                    <p style={{ fontSize: '0.65rem', color: '#4B4B55' }}>
                        Made by <a href="https://zetrr.media/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B35', textDecoration: 'none' }} className="transition">Zetrr Media</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

// ============================================
// APP
// ============================================
const App = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
};

export default App;
