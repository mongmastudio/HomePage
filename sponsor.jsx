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
            <li><a href="#tiers">TIERS</a></li>
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

const TiersSection = () => (
    <section id="tiers" className="section tiers-section">
        <motion.div {...fadeUp}>
            <p className="section-label">SPONSORSHIP TIERS</p>
        </motion.div>
        <motion.h2 className="section-title" {...fadeUp}>
            후원 등급
        </motion.h2>
        <motion.p className="section-desc" {...fadeUp}>
            소중한 마음에 보답하기 위해 등급별 특별한 혜택을 준비했습니다.
        </motion.p>

        <motion.div className="tiers-grid" {...staggerContainer}>
            {/* Tier 1 */}
            <motion.div className="tier-card" {...staggerItem}>
                <span className="tier-emoji">&#x1F331;</span>
                <h3 className="tier-name">서포터</h3>
                <div className="tier-price">5,000원</div>
                <div className="tier-period">월간 후원</div>
                <div className="tier-divider"></div>
                <ul className="tier-features">
                    <li>후원자 전용 디스코드 채널 접근</li>
                    <li>개발 진행 상황 주간 리포트</li>
                    <li>게임 크레딧에 이름 등재</li>
                    <li>후원자 전용 배경화면 제공</li>
                </ul>
                <button className="tier-btn">서포터 되기</button>
            </motion.div>

            {/* Tier 2 */}
            <motion.div className="tier-card featured" {...staggerItem}>
                <span className="tier-emoji">&#x2B50;</span>
                <h3 className="tier-name">챔피언</h3>
                <div className="tier-price">15,000원</div>
                <div className="tier-period">월간 후원</div>
                <div className="tier-divider"></div>
                <ul className="tier-features">
                    <li>서포터 등급의 모든 혜택</li>
                    <li>신작 게임 얼리 액세스 제공</li>
                    <li>월간 개발자 Q&A 세션 참여</li>
                    <li>미공개 컨셉아트 독점 공유</li>
                    <li>인게임 후원자 전용 아이템</li>
                </ul>
                <button className="tier-btn">챔피언 되기</button>
            </motion.div>

            {/* Tier 3 */}
            <motion.div className="tier-card" {...staggerItem}>
                <span className="tier-emoji">&#x1F48E;</span>
                <h3 className="tier-name">레전드</h3>
                <div className="tier-price">30,000원</div>
                <div className="tier-period">월간 후원</div>
                <div className="tier-divider"></div>
                <ul className="tier-features">
                    <li>챔피언 등급의 모든 혜택</li>
                    <li>베타 테스트 우선 참여권</li>
                    <li>게임 내 NPC 이름 커스텀 권한</li>
                    <li>개발팀과 1:1 미팅 기회 (분기별)</li>
                    <li>한정판 실물 굿즈 배송</li>
                </ul>
                <button className="tier-btn">레전드 되기</button>
            </motion.div>
        </motion.div>
    </section>
);

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
