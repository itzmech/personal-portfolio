"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="skills.json"
      subtitle="Technologies and tools I work with — no arbitrary percentages, just honest categories."
      className="bg-background-alt/50"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
            className="neon-border rounded-lg bg-card/60 p-6"
          >
            <h3 className="mb-4 font-mono text-lg font-semibold text-foreground">
              <span className="text-accent">&quot;{category.title}&quot;</span>:
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
