import re

def extract_body(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.search(r'export const BLOG_CONTENT_[A-D](?:.*?) = \{(.*)\};', content, re.DOTALL)
        if match:
            return match.group(1).strip()
        else:
            # Fallback if the signature is slightly different
            match = re.search(r'\{([\s\S]*)\}', content)
            if match:
                # Remove the very last bracket if it matched the whole object
                inner = match.group(0).strip()[1:-1]
                return inner.strip()
    return ""

chunks = ['src/config/blog_content_chunk_a.tsx', 
          'src/config/blog_content_chunk_b.tsx', 
          'src/config/blog_content_chunk_c.tsx', 
          'src/config/blog_content_chunk_d.tsx']

bodies = []
for c in chunks:
    bodies.append(extract_body(c))

final_content = """import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';

export const BLOG_CONTENT: Record<string, React.ReactNode> = {
""" + ",\n".join(bodies) + """
};
"""

with open('src/config/blog_content.tsx', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Merged chunks successfully.")
