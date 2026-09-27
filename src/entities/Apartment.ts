import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity("Apartment")
export class Apartment {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "uuid", unique: true })
    @Generated("uuid")
    uuid!: string

    @Column('varchar') 
    name!: string;
}
