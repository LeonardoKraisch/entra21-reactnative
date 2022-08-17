import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from "typeorm"

import  Users  from "./User"

import Products from "./Stock"

@Entity("tb_shopCart")
export default class Cart {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    total: string

    @OneToMany(() => Products, (product) => product.carrinho)
    produtos: Products[]

    @OneToOne(() => Users)
    @JoinColumn()
    user: Users
}