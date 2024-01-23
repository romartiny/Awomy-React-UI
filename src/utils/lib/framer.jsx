import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import {Link} from "react-router-dom";

const transition = {type: 'tween', ease: 'easeOut', duration: 0.25,};

const Tabs = ({tabs, selectedTabIndex, setSelectedTab,}) => {
    const [buttonRefs, setButtonRefs] = useState([]);

    useEffect(() => {
        setButtonRefs((prev) => prev.slice(0, tabs.length));
    }, [tabs.length]);

    const navRef = useRef(null);
    const navRect = navRef.current?.getBoundingClientRect();

    const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

    const [hoveredTabIndex, setHoveredTabIndex] = useState(null);
    const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

    return (
        <nav ref={navRef} className="flex flex-shrink-0 justify-center items-center relative z-0" onPointerLeave={(e) => setHoveredTabIndex(null)}>
            {tabs.map((item, _id) => {
                const isActive = hoveredTabIndex === _id || selectedTabIndex === _id;

                return (
                        item.title && (<motion.button key={_id} className={classNames(
                                                         'text-lg relative rounded-md flex items-center h-10 px-4 z-20 bg-transparent  cursor-pointer select-none transition-colors hover:text-white mb-0.5',
                                                         {
                                                             'text-white/40': !isActive,
                                                             'text-white/90 ': isActive,
                                                         },
                                                     )}
                                                     ref={(el) => (buttonRefs[_id] = el)}
                                                     onPointerEnter={() => {setHoveredTabIndex(_id);}}
                                                     onFocus={() => {setHoveredTabIndex(_id);}}
                                                     onClick={() => {setSelectedTab([_id, _id > selectedTabIndex ? 1 : -1]);}}
                        >
                            <Link to={item.href}>
                                {item.title}
                            </Link>
                        </motion.button>
                        )

                );
            })}

            <AnimatePresence>
                {hoveredRect && navRect && (
                    <motion.div
                        key={'hover'}
                        className="absolute p-1 mb-1 z-10 top-0 left-0 rounded-md bg-purple-500 dark:bg-zinc-800"
                        initial={{
                            x: hoveredRect.left - navRect.left,
                            y: hoveredRect.top - navRect.top,
                            width: hoveredRect.width,
                            height: hoveredRect.height,
                            opacity: 0,
                        }}
                        animate={{
                            x: hoveredRect.left - navRect.left,
                            y: hoveredRect.top - navRect.top,
                            width: hoveredRect.width,
                            height: hoveredRect.height,
                            opacity: 0.2,
                        }}
                        exit={{
                            x: hoveredRect.left - navRect.left,
                            y: hoveredRect.top - navRect.top,
                            width: hoveredRect.width,
                            height: hoveredRect.height,
                            opacity: 0,
                        }}
                        transition={transition}
                    />
                )}
            </AnimatePresence>

            {/*{selectedRect && navRect && (*/}
            {/*    <motion.div*/}
            {/*        className={*/}
            {/*            'absolute z-10 bottom-0 left-0.5 h-[3px] bg-zinc-700 dark:bg-zinc-200'*/}
            {/*        }*/}
            {/*        initial={false}*/}
            {/*        animate={{*/}
            {/*            width: selectedRect.width * 0.8,*/}
            {/*            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,*/}
            {/*            opacity: 1,*/}
            {/*        }}*/}
            {/*        transition={transition}*/}
            {/*    />*/}
            {/*)}*/}
        </nav>
    );
};

export const Framer = { Tabs };
