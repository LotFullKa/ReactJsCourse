import articles from '../data/article.json'

const ARTICLES_LOAD_DURATION = 10000;

export async function getArticles() {
    return new Promise(resolve => {
        setTimeout(() => resolve(articles), ARTICLES_LOAD_DURATION)
    })
}