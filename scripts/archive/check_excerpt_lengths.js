const { BLOG_POSTS } = require('./src/config/services.ts');
let max = 0;
let over155 = 0;
BLOG_POSTS.forEach(post => {
  if (post.excerpt.length > max) max = post.excerpt.length;
  if (post.excerpt.length > 158) {
    console.log(`${post.slug}: ${post.excerpt.length} chars - ${post.excerpt}`);
    over155++;
  }
});
console.log(`Max length: ${max}`);
console.log(`Over 158 chars: ${over155}`);
