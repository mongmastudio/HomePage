import React, { useState, useEffect, useRef, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// --- 3D Background Scene ---
const BackgroundScene = () => {
    const cameraRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        if (cameraRef.current) {
            cameraRef.current.position.x += (mousePosition.x * 1.5 - cameraRef.current.position.x) * 0.02;
            cameraRef.current.position.y += (mousePosition.y * 1.5 - cameraRef.current.position.y) * 0.02;
            cameraRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 8]} fov={60} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#66fcf1" />
            <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a855f7" />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            <FloatingGem position={[-5, 3, -4]} color="#66fcf1" speed={0.8} />
            <FloatingGem position={[5, -2, -6]} color="#a855f7" speed={1.2} />
            <FloatingGem position={[0, 4, -8]} color="#f0c040" speed={0.6} />
            <FloatingGem position={[-3, -4, -5]} color="#f43f5e" speed={1.0} />
        </>
    );
};

const FloatingGem = ({ position, color, speed }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005 * speed;
            meshRef.current.rotation.y += 0.008 * speed;
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.003;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[0.5]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.4}
                    roughness={0.1}
                    metalness={0.9}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
};

// --- Animation Variants ---
const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7 }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true, margin: "-80px" }
};

const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

// --- Page Components ---

const Navigation = () => (
    <nav className="nav">
        <a href="./index.html">
            <img src="./main_logo_transparent.png" alt="Mongma Studio" className="nav-logo" />
        </a>
        <ul className="nav-links">
            <li><a href="#vision">VISION</a></li>
            <li><a href="#why">WHY</a></li>
            <li><a href="#tiers">DONATE</a></li>
            <li><a href="#roadmap">ROADMAP</a></li>
        </ul>
        <a href="./index.html" className="nav-back">MAIN</a>
    </nav>
);

const HeroSection = () => (
    <section className="sponsor-hero">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ position: 'relative', zIndex: 10 }}
        >
            <span className="hero-badge">INDIE GAME STUDIO</span>
            <h1>
                상상을 현실로 만드는 여정에<br />
                함께해 주세요
            </h1>
            <p className="hero-desc">
                몽마스튜디오는 독립 게임 개발사로서, 대형 퍼블리셔에 의존하지 않고
                진정으로 플레이어가 원하는 게임을 만들기 위해 노력합니다.
                여러분의 후원이 우리의 창작 활동을 지속 가능하게 합니다.
            </p>
        </motion.div>
        <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
        >
            <span>SCROLL</span>
            <div className="arrow"></div>
        </motion.div>
    </section>
);

const VisionSection = () => (
    <section id="vision" className="section vision-section">
        <motion.div {...fadeUp}>
            <p className="section-label">OUR VISION</p>
        </motion.div>
        <motion.h2 className="section-title" {...fadeUp}>
            우리가 꿈꾸는 게임의 미래
        </motion.h2>
        <motion.p className="section-desc" {...fadeUp}>
            몽마스튜디오는 획일화된 게임 시장에서 벗어나,
            플레이어에게 진정한 감동과 몰입을 선사하는 독창적인 게임을 만듭니다.
        </motion.p>

        <motion.div className="vision-grid" {...staggerContainer}>
            <motion.div className="vision-card" {...staggerItem}>
                <span className="vision-icon">&#x1F3AE;</span>
                <h3>독창적인 게임플레이</h3>
                <p>
                    트렌드를 따르기보다 새로운 트렌드를 만듭니다.
                    플레이어가 경험하지 못한 혁신적인 메커니즘을 설계합니다.
                </p>
            </motion.div>
            <motion.div className="vision-card" {...staggerItem}>
                <span className="vision-icon">&#x2728;</span>
                <h3>예술적인 비주얼</h3>
                <p>
                    모든 장면이 하나의 작품이 되도록, 아름다운 그래픽과
                    감성적인 연출로 시각적 몰입감을 극대화합니다.
                </p>
            </motion.div>
            <motion.div className="vision-card" {...staggerItem}>
                <span className="vision-icon">&#x1F4D6;</span>
                <h3>깊이 있는 스토리</h3>
                <p>
                    게임이 끝나도 오래 기억에 남는 이야기.
                    플레이어의 선택이 세계를 바꾸는 서사 경험을 추구합니다.
                </p>
            </motion.div>
        </motion.div>
    </section>
);

const WhySection = () => {
    const reasons = [
        {
            title: "독립적인 창작 활동 유지",
            desc: "퍼블리셔의 간섭 없이, 우리가 믿는 게임을 만들 수 있는 자유를 지켜주세요."
        },
        {
            title: "소규모 팀의 큰 꿈",
            desc: "적은 인원이지만 열정과 실력으로 대형 스튜디오 못지않은 품질을 목표합니다."
        },
        {
            title: "개발 기간의 안정화",
            desc: "후원을 통해 급하게 타협하지 않고, 충분한 시간을 들여 완성도 높은 작품을 만듭니다."
        },
        {
            title: "커뮤니티와 함께 성장",
            desc: "후원자분들의 의견을 반영하며 함께 게임을 만들어가는 열린 개발 문화를 지향합니다."
        },
        {
            title: "다양한 플랫폼 출시",
            desc: "Steam, Google Play, OneStore 등 다양한 플랫폼에 동시 출시를 목표합니다."
        },
        {
            title: "한국 인디게임 생태계 활성화",
            desc: "우리의 성공이 더 많은 한국 인디 개발자에게 영감과 가능성을 보여줍니다."
        }
    ];

    return (
        <section id="why" className="section why-section">
            <motion.div {...fadeUp}>
                <p className="section-label">WHY SPONSOR</p>
            </motion.div>
            <motion.h2 className="section-title" {...fadeUp}>
                왜 후원이 필요한가요?
            </motion.h2>
            <motion.p className="section-desc" {...fadeUp}>
                인디게임 개발은 열정만으로 이어가기엔 현실적인 벽이 존재합니다.
                여러분의 후원 하나하나가 독창적인 게임이 세상에 나올 수 있는 힘이 됩니다.
            </motion.p>

            <motion.div className="why-grid" {...staggerContainer}>
                {reasons.map((r, i) => (
                    <motion.div className="why-item" key={i} {...staggerItem}>
                        <span className="why-number">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <h4>{r.title}</h4>
                            <p>{r.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

const TiersSection = () => {
    const [copied, setCopied] = useState(false);

    const copyAccount = () => {
        navigator.clipboard.writeText('957-027667-04-019').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section id="tiers" className="section tiers-section">
            <motion.div {...fadeUp}>
                <p className="section-label">HOW TO SPONSOR</p>
            </motion.div>
            <motion.h2 className="section-title" {...fadeUp}>
                후원 방법
            </motion.h2>
            <motion.p className="section-desc" {...fadeUp}>
                아래 계좌로 원하시는 금액을 입금해 주시면 됩니다.<br />
                후원 금액에 따라 등급이 자동으로 부여됩니다.
            </motion.p>

            <motion.div className="tiers-grid" style={{ gridTemplateColumns: '1fr' }} {...staggerContainer}>
                {/* 입금 안내 카드 */}
                <motion.div className="tier-card featured" {...staggerItem} style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                    <span className="tier-emoji">&#x1F3E6;</span>
                    <h3 className="tier-name">후원 계좌 안내</h3>
                    <div className="tier-divider" style={{ margin: '20px auto' }}></div>

                    <div style={{ textAlign: 'left', padding: '0 10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <span style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>은행</span>
                            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>IBK 기업은행</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <span style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>계좌번호</span>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>957-027667-04-019</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
                            <span style={{ color: 'var(--text-color)', fontSize: '0.95rem' }}>예금주</span>
                            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>주식회사몽마스튜디오</span>
                        </div>
                    </div>

                    <button className="tier-btn" onClick={copyAccount} style={{ marginTop: '28px', background: copied ? 'rgba(102, 252, 241, 0.3)' : 'var(--accent-gold)', color: copied ? 'var(--primary-color)' : '#000', border: 'none' }}>
                        {copied ? '복사 완료!' : '계좌번호 복사하기'}
                    </button>
                </motion.div>
            </motion.div>

            {/* 등급 안내 */}
            <motion.div {...fadeUp} style={{ marginTop: '60px', maxWidth: '700px', width: '100%' }}>
                <p className="section-label" style={{ textAlign: 'center' }}>TIER SYSTEM</p>
                <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#fff', marginBottom: '30px' }}>후원 금액별 자동 등급 부여</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <motion.div className="why-item" {...staggerItem}>
                        <span className="why-number" style={{ color: 'var(--secondary-color)' }}>&#x1F331;</span>
                        <div>
                            <h4>서포터 <span style={{ color: 'var(--secondary-color)', fontWeight: 400, fontSize: '0.9rem' }}>— 5,000원 이상</span></h4>
                            <p>후원자 전용 디스코드 채널 접근 / 주간 개발 리포트 / 크레딧 등재</p>
                        </div>
                    </motion.div>
                    <motion.div className="why-item" {...staggerItem}>
                        <span className="why-number" style={{ color: 'var(--accent-gold)' }}>&#x2B50;</span>
                        <div>
                            <h4>챔피언 <span style={{ color: 'var(--accent-gold)', fontWeight: 400, fontSize: '0.9rem' }}>— 15,000원 이상</span></h4>
                            <p>서포터 혜택 + 얼리 액세스 / 개발자 Q&A / 미공개 컨셉아트 / 전용 인게임 아이템</p>
                        </div>
                    </motion.div>
                    <motion.div className="why-item" {...staggerItem}>
                        <span className="why-number" style={{ color: 'var(--accent-purple)' }}>&#x1F48E;</span>
                        <div>
                            <h4>레전드 <span style={{ color: 'var(--accent-purple)', fontWeight: 400, fontSize: '0.9rem' }}>— 30,000원 이상</span></h4>
                            <p>챔피언 혜택 + 베타 테스트 우선권 / NPC 이름 커스텀 / 1:1 미팅 / 한정판 굿즈</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const RoadmapSection = () => {
    const milestones = [
        {
            icon: "&#x1F680;",
            title: "프로토타입 완성",
            date: "2026 Q2",
            desc: "첫 번째 신작의 핵심 메커니즘과 프로토타입을 완성하고, 후원자분들께 플레이 테스트를 공개합니다."
        },
        {
            icon: "&#x1F3A8;",
            title: "아트 & 사운드 제작",
            date: "2026 Q3",
            desc: "본격적인 아트 에셋 제작과 사운드트랙 작업에 돌입합니다. 후원자 전용 프리뷰를 제공합니다."
        },
        {
            icon: "&#x1F9EA;",
            title: "클로즈드 베타 테스트",
            date: "2026 Q4",
            desc: "후원자 우선 참여로 클로즈드 베타를 진행하고, 커뮤니티 피드백을 반영합니다."
        },
        {
            icon: "&#x1F30D;",
            title: "정식 출시",
            date: "2027 Q1",
            desc: "Steam, Google Play, OneStore 동시 출시를 목표로 합니다. 여러분의 후원이 이 순간을 만듭니다."
        }
    ];

    return (
        <section id="roadmap" className="section roadmap-section">
            <motion.div {...fadeUp}>
                <p className="section-label">ROADMAP</p>
            </motion.div>
            <motion.h2 className="section-title" {...fadeUp}>
                개발 로드맵
            </motion.h2>
            <motion.p className="section-desc" {...fadeUp}>
                후원금은 아래 로드맵에 따라 투명하게 사용됩니다.
            </motion.p>

            <div className="roadmap-timeline">
                {milestones.map((m, i) => (
                    <motion.div
                        className="roadmap-item"
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                        <div className="roadmap-dot" dangerouslySetInnerHTML={{ __html: m.icon }} />
                        <div className="roadmap-content">
                            <div className="roadmap-date">{m.date}</div>
                            <h4>{m.title}</h4>
                            <p>{m.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="cta-section">
        <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>함께 만들어갈 게임의 미래</h2>
            <p>
                작은 후원 하나가 독창적인 게임 하나를 세상에 탄생시킵니다.
                몽마스튜디오의 여정에 함께해 주세요.
            </p>
            <div className="cta-buttons">
                <a href="#tiers" className="cta-btn cta-btn-primary">후원 시작하기</a>
                <a href="./index.html" className="cta-btn cta-btn-secondary">메인으로 돌아가기</a>
            </div>
        </motion.div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2026 Mongma Studio. All rights reserved.</p>
    </footer>
);

// --- Main App ---
const SponsorApp = () => {
    return (
        <>
            <div className="canvas-bg">
                <Canvas dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <BackgroundScene />
                    </Suspense>
                </Canvas>
            </div>

            <Navigation />
            <HeroSection />
            <VisionSection />
            <WhySection />
            <TiersSection />
            <RoadmapSection />
            <CTASection />
            <Footer />
        </>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<SponsorApp />);
