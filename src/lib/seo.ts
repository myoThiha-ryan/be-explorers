/**
 * Search engines are kept out until this is switched on deliberately.
 *
 * Preview deployments carry placeholder copy, placeholder photography and a
 * temporary domain — none of which should be indexed. Set SITE_INDEXABLE=true
 * in the environment at launch, on the real domain, and only then.
 *
 * Read at BUILD time: robots.txt and the page metadata are prerendered, so
 * changing the variable takes effect on the next deploy, not immediately.
 */
export const isIndexable = process.env.SITE_INDEXABLE === "true";
