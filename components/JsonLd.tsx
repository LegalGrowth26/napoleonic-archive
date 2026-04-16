interface JsonLdProps {
  data: object;
}

/**
 * Renders a JSON-LD <script> tag. Safe to place anywhere in the tree;
 * dangerouslySetInnerHTML is only populated with a JSON.stringify of a
 * plain object so no user input reaches raw HTML.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
