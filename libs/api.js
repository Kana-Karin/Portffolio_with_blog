import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "karinachka",
  apiKey: process.env.API_KEY,
});

export async function getPostById(id) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: "contentId",
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostByContentId ~~");
    console.log(err);
  }
}

export async function getAllContentId(limit = 100) {
  try {
    const allPosts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,contentId",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return allPosts.title;
  } catch (err) {
    console.log("~~ getAllContentId ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllCategories ~~");
    console.log(err);
  }
}

export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(err);
  }
}
