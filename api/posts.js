import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://farridkuntoro.ghost.io',
  key: '84365a1892036703d26209074c',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    })
}

export async function getPage(pageSlug) {
  return await api.pages
      .read({
          slug: pageSlug
      })
      .catch(err => {
          console.error(err);
      })
}