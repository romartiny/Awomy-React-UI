import React, {useEffect, useState, useRef} from 'react';
import './BubbleBackground.scss';

const BubbleBackground = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [targetPosition, setTargetPosition] = useState({x: 0, y: 0});
    const interBubbleRef = useRef(null);

    useEffect(() => {
        const interBubble = interBubbleRef.current;

        if (!interBubble) {
            return;
        }

        function move() {
            setPosition((prevPosition) => ({
                x: prevPosition.x + (targetPosition.x - prevPosition.x) / 20,
                y: prevPosition.y + (targetPosition.y - prevPosition.y) / 20,
            }));

            interBubble.style.transform = `translate(${Math.round(position.x)}px, ${Math.round(position.y)}px)`;
        }

        const handleMouseMove = (event) => {
            setTargetPosition({x: event.clientX, y: event.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animationFrame = requestAnimationFrame(move);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [targetPosition]);

    return (
        <div className="absolute lg:fixed inset-0 overflow-hidden">
            <div className="gradient-bubble-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="bubbles">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="bubbles"/>
                            <feBlend in="SourceGraphic" in2="bubbles"/>
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="color-bubble-first"></div>
                    <div className="color-bubble-second"></div>
                    <div className="color-bubble-third"></div>
                    <div className="color-bubble-fourth"></div>
                    <div className="color-bubble-fifth"></div>
                    <div className="bubble-interactive" ref={interBubbleRef}></div>
                </div>
            </div>
        </div>
    );
};

export default BubbleBackground;
