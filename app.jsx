import React, { useState, useEffect, useRef, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// --- 3D Components ---
const FloatingPlatform = ({ text, color, position, speed, scale }) => {
    const meshRef = useRef();

    // Custom floating animation based on time
    useFrame((state) => {
        meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.005;
        meshRef.current.rotation.y += 0.005 * speed;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1;
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1} position={position}>
            <group ref={meshRef} scale={scale}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[3, 1, 0.5]} />
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
                <Text
                    position={[0, 0, 0.26]}
                    fontSize={0.4}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NJtEtq.woff"
                >
                    {text}
                </Text>
            </group>
        </Float>
    );
};

const Scene = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cameraRef = useRef();

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
            // Parallax effect: smoothly interpolate camera position towards mouse
            cameraRef.current.position.x += (mousePosition.x * 2 - cameraRef.current.position.x) * 0.05;
            cameraRef.current.position.y += (mousePosition.y * 2 - cameraRef.current.position.y) * 0.05;
            cameraRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 8]} fov={60} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#66fcf1" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#45a29e" />

            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

            {/* Platform Icons */}
            <FloatingPlatform text="STEAM" color="#1b2838" position={[-4, 2, -2]} speed={1.2} scale={1.2} />
            <FloatingPlatform text="GOOGLE PLAY" color="#3bccff" position={[4, -1, -3]} speed={0.8} scale={1.1} />
            <FloatingPlatform text="ONESTORE" color="#ff4040" position={[-2, -3, -1]} speed={1.5} scale={1} />
        </>
    );
};

// --- React App Components ---
const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.8, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.8, y: 50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn" onClick={onClose}>&times;</button>
                    <h3>문의하기</h3>
                    <p style={{ color: "var(--text-color)" }}>몽마스튜디오와 함께할 파트너를 찾습니다.</p>

                    <div className="contact-number">
                        📞 010-4656-5414
                    </div>

                    <form action="https://formsubmit.co/mongmastudio@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="[몽마스튜디오] 새로운 문의가 도착했습니다" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://mongma-studio.com" />
                        <input type="hidden" name="_template" value="box" />
                        <div className="form-group">
                            <label>이름 / 기업명</label>
                            <input type="text" name="name" className="form-control" placeholder="홍길동 / (주)게임회사" required />
                        </div>
                        <div className="form-group">
                            <label>이메일</label>
                            <input type="email" name="email" className="form-control" placeholder="example@email.com" required />
                        </div>
                        <div className="form-group">
                            <label>문의 내용</label>
                            <textarea name="message" className="form-control" placeholder="문의하실 내용을 자유롭게 적어주세요." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">보내기</button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="canvas-container">
                <Canvas shadows dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Fallback text if logo fails, otherwise img main_logo_transparent.png */}
                    <img src="./main_logo_transparent.png" alt="Mongma Studio Logo" className="hero-logo" onError={(e) => e.target.style.display = 'none'} />
                    <p className="hero-subtitle">가장 매혹적인 게임 경험을 창조합니다.</p>

                    <div className="action-buttons">
                        <button className="btn btn-home" onClick={scrollToAbout}>
                            홈
                        </button>
                        <button className="btn btn-contact" onClick={() => setIsModalOpen(true)}>
                            문의하기
                        </button>
                        <button className="btn btn-home" onClick={() => window.location.href = './sponsor.html'}>
                            후원하기
                        </button>
                    </div>
                </motion.div>
            </section>

            <section id="about" className="about-section">
                {/* Section Background Video */}
                <video className="about-video-bg" autoPlay loop muted playsInline>
                    <source src="./video.mp4" type="video/mp4" />
                </video>
                <div className="about-overlay"></div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-box">
                        <h2>WE ARE MONGMA</h2>
                        <p>
                            몽마스튜디오는 끝없는 아이디어와 열정으로 가득 찬 게임 개발 스튜디오입니다.<br />
                            우리는 플레이어의 상상력을 초월하는 독창적인 세계를 설계하며,
                            한 번 빠지면 헤어나올 수 없는 강렬한 몰입감을 선사합니다.
                        </p>
                        <br />
                        <p>
                            아름다운 그래픽, 정교한 시스템, 혁신적인 게임플레이까지.<br />
                            우리가 만드는 모든 순간이 곧 새로운 전설이 됩니다.
                        </p>
                    </div>
                </motion.div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
