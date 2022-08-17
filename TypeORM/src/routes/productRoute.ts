import { Request, Response, Router } from "express"
import dataSource from "../dataSource"
import Stock from "../Entities/Stock"
const router = Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

router.get("/", async function (req: Request, res: Response) {
    const products = await dataSource.getRepository(Stock).find()
    res.json(products)
})

router.get("/:id", async function (req: Request, res: Response) {
    const results = await dataSource.getRepository(Stock).findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
})

router.post("/", async function (req: Request, res: Response) {
    const product = await dataSource.getRepository(Stock).create(req.body)
    const results = await dataSource.getRepository(Stock).save(product)
    return res.send(results)
})

router.put("/:id", async function (req: Request, res: Response) {
    const product = await dataSource.getRepository(Stock).findOneBy({
        id: parseInt(req.params.id),
    })
    dataSource.getRepository(Stock).merge(product, req.body)
    const results = await dataSource.getRepository(Stock).save(product)
    return res.send(results)
})

router.delete("/:id", async function (req: Request, res: Response) {
    const results = await dataSource.getRepository(Stock).delete(req.params.id)
    return res.send(results)
})

export default router  