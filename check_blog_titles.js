const { BLOG_POSTS } = require('./src/config/services.ts');
let max = 0;
let over60 = 0;
BLOG_POSTS.forEach(post => {
  if (post.title.length > max) max = post.title.length;
  if (post.title.length > 60) {
    console.log(`${post.slug}: ${post.title.length} chars - ${post.title}`);
    over60++;
  }
});
console.log(`Max length: ${max}`);
console.log(`Over 60 chars: ${over60}`);
