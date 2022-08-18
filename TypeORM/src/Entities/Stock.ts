import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import Cart from "./ShoppingCart"

@Entity("tb_stock")
export default class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    quantidade: string
    
    @Column()
    preco: string

    @ManyToMany(() => Cart)
    @JoinTable({name: "produtos_id"})
    carrinho: Cart[]
}