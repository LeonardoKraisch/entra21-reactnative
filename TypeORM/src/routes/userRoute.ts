import { Request, Response, Router } from "express"
import dataSource from "../dataSource"
import Users from "../Entities/User"
const router = Router()

router.get("/", async function (req: Request, res: Response) {
    const users = await dataSource.getRepository(Users).find()
    res.json(users)
})

router.get("/:id", async function (req: Request, res: Response) {
    const results = await dataSource.getRepository(Users).findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
})

router.post("/", async function (req: Request, res: Response) {
    const user = await dataSource.getRepository(Users).create(req.body)
    const results = await dataSource.getRepository(Users).save(user)
    return res.send(results)
})

router.put("/:id", async function (req: Request, res: Response) {
    const user = await dataSource.getRepository(Users).findOneBy({
        id: parseInt(req.params.id),
    })
    dataSource.getRepository(Users).merge(user, req.body)
    const results = await dataSource.getRepository(Users).save(user)
    return res.send(results)
})

router.delete("/:id", async function (req: Request, res: Response) {
    const results = await dataSource.getRepository(Users).delete(req.params.id)
    return res.send(results)
})

export default router 