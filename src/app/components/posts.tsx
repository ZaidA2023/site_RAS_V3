import fs from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

// Define the default image if none is found
const DEFAULT_IMAGE = '/default.jpg'; // Place this file in your public directory

// Posts directory: public/_posts
const postsDirectory = path.join(process.cwd(), 'public', 'posts');

export function getPosts(): Post[] {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }

  const posts = fileNames
    // Only process markdown files that are actual files
    .filter((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile() && fileName.endsWith('.md');
    })
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Split the file into lines.
      const lines = fileContents.split('\n');
      
      // Use the first line as the title (remove leading '#' if present)
      let title = lines[0].trim();
      if (title.startsWith('#')) {
        title = title.replace(/^#+\s*/, '');
      }
      
      // Get the content (everything after the first line)
      const content = lines.slice(1).join('\n');
      
      // Extract the first image from the content using regex
      const imageRegex = /!\[.*?\]\((.*?)\)/;
      const imageMatch = content.match(imageRegex);
      const image = imageMatch ? imageMatch[1] : DEFAULT_IMAGE;
      
      // Extract the date from the file name.
      // Expecting file names like: "2023-1-19-extra_text.md"
      const baseName = fileName.replace(/\.md$/, '');
      const parts = baseName.split('-');
      const date = parts.slice(0, 3).join('-');
      
      return {
        slug,
        title,
        date,
        content,
        image,
      };
    });
  
  // Sort posts by date (newest first, assuming date format is comparable)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
