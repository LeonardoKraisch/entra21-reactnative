import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_user")
export default class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    idade: string
}