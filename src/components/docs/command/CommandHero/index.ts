export { default } from "./CommandHero";

export type { CommandHeroLink, CommandHeroProps } from "./types";

/** Example Usage
 *
import * as Docs from "@site/src/components/docs";

<Docs.CommandHero
    command="custy init"
    description="Initialize a Custy project by generating configuration files, templates, examples, and project resources."
    category="Initialization"
    status="Stable"
    syntax="custy init"
    tags={[
        "Python",
        "Git",
        "Templates",
        "Configuration",
    ]}
    links={[
        {
            label: "Workflow",
            href: "#workflow",
        },
        {
            label: "Examples",
            href: "#examples",
        },
        {
            label: "Requirements",
            href: "#requirements",
        },
        {
            label: "FAQ",
            href: "#faq",
        },
    ]}
/>
 */
