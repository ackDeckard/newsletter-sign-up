"use client";

import { motion } from "framer-motion";

export default function ListItems() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <motion.ul
      className="grid list-outside gap-[10px]"
      initial="hidden"
      animate="visible"
      variants={list}
    >
      <motion.li
        className="grid w-full grid-flow-col grid-cols-[min-content_1fr] before:mr-4 before:align-middle before:content-[url('/icon-list.svg')]"
        variants={item}
      >
        Product discovery and building what matters
      </motion.li>
      <motion.li
        className="grid w-full grid-flow-col grid-cols-[min-content_1fr] before:mr-4 before:align-middle before:content-[url('/icon-list.svg')]"
        variants={item}
      >
        Measuring to ensure updates are a success
      </motion.li>
      <motion.li
        className="grid w-full grid-flow-col grid-cols-[min-content_1fr] before:mr-4 before:align-middle before:content-[url('/icon-list.svg')]"
        variants={item}
      >
        And much more!
      </motion.li>
    </motion.ul>
  );
}
