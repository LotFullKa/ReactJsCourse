import { getArticles } from "../utils/get-article"

describe('getArticles', () => {
    test("Should async get all articles", async () => {
        expect.assertions(1)
        await expect(getArticles()).resolves.toBeTruthy()
    })
})