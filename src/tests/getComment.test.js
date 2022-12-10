import { getComments } from "../utils/get-comments-by-article"

describe('Get comment by id', () => {
    test("Should get async comment by id", async () => {
        expect.assertions(1)
        await expect(getComments(1)).resolves.toHaveLength(2)
    })

    test("Should return nothing", async () => {
        expect.assertions(1)
        await expect(getComments(0)).resolves.toHaveLength(0)
    })
})