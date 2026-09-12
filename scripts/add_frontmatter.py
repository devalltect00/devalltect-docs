#!/usr/bin/env python3
"""
Script to add frontmatter to all .mdx files in docs/ directory.
Reads _category_.json files to get sidebar_key and label.
"""

import json
from pathlib import Path

DOCS_DIR = Path("docs")

def get_category_info(file_path: Path) -> dict:
    """Get category info from _category_.json files by walking up the directory tree."""
    current = file_path.parent
    while current >= DOCS_DIR:
        category_file = current / "_category_.json"
        if category_file.exists():
            try:
                with open(category_file, 'r') as f:
                    data = json.load(f)
                    return {
                        'key': data.get('key', ''),
                        'label': data.get('label', ''),
                        'position': data.get('position')
                    }
            except Exception as e:
                print(f"Error reading {category_file}: {e}")
        current = current.parent
    return {'key': '', 'label': '', 'position': None}

def get_title_from_filename(file_path: Path) -> str:
    """Generate title from filename in Title Case."""
    name = file_path.stem
    if name == 'index':
        parent = file_path.parent
        if parent.name != 'docs':
            return parent.name.replace('-', ' ').title()
        return 'Introduction'
    title = name.replace('-', ' ').replace('_', ' ')
    return title.title()

def extract_first_line_description(content: str) -> str:
    """Extract a description from the first heading or paragraph."""
    lines = content.split('\n')
    start = 0
    if content.startswith('---'):
        end = content.find('---', 3)
        if end != -1:
            start = end + 3
    for line in lines[start:]:
        line = line.strip()
        if line.startswith('```') or line.startswith('`') or '=' in line:
            continue
        if line and not line.startswith('#') and len(line) > 10:
            desc = line.strip('#').strip()
            if 'path=' in desc or 'dir' in desc.lower() or desc.startswith('app/'):
                continue
            if len(desc) > 150:
                desc = desc[:147] + '...'
            return desc
        elif line.startswith('# ') and len(line) > 2:
            desc = line[2:].strip()
            if len(desc) > 150:
                desc = desc[:147] + '...'
            return desc
    return "Documentation for this section."

def has_frontmatter(content: str) -> bool:
    """Check if file already has frontmatter."""
    return content.strip().startswith('---') and content.find('---') != content.rfind('---')

def generate_frontmatter(file_path: Path, content: str) -> str:
    """Generate frontmatter for a file."""
    cat_info = get_category_info(file_path)
    title = get_title_from_filename(file_path)
    description = extract_first_line_description(content)
    sidebar_key = cat_info.get('key', '')
    position = cat_info.get('position')

    fm_parts = ['---']
    fm_parts.append(f'title: "{title}"')
    fm_parts.append(f'description: "{description}"')
    if position:
        fm_parts.append(f'sidebar_position: {position}')
    if sidebar_key:
        fm_parts.append(f'sidebar_key: "{sidebar_key}"')
    fm_parts.append('---')
    fm_parts.append('')
    return '\n'.join(fm_parts)

def process_file(file_path: Path) -> bool:
    """Process a single .mdx file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        if has_frontmatter(content):
            first_sec = content.split('---')[1] if content.startswith('---') else ""
            if 'title:' in first_sec and 'docs/' not in first_sec:
                return False

        frontmatter = generate_frontmatter(file_path, content)

        if content.startswith('---'):
            parts = content.split('---', 2)
            if len(parts) >= 3:
                content = parts[2].strip()
                if not content.startswith('\n'):
                    content = '\n' + content
            else:
                content = ''

        new_content = frontmatter + content.lstrip('\n')

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all .mdx files."""
    count = 0
    for file_path in DOCS_DIR.rglob('*.mdx'):
        if process_file(file_path):
            count += 1
    print(f"\nProcessed {count} files")

if __name__ == '__main__':
    main()
