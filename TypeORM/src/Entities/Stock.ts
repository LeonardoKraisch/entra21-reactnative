import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm"
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

    @ManyToOne(() => Cart, (cart) => cart.produtos)
    carrinho: Cart
}