import { 
    Column, 
    CreateDateColumn, 
    Entity, Generated, 
    Index, PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm"

@Entity("Apartment")
export class Apartment {
    @PrimaryGeneratedColumn()
    id!: number

    @Index()
    @Column({ type: "uuid", unique: true })
    @Generated("uuid")
    uuid!: string

    @Index()
    @Column({ type: "varchar", length: 50 }) 
    title!: string;

    @Column({ type: "varchar", nullable: true })  
    description?: string | null;

    @Column({ type: "int", default: 2 })
    maxGuests!: number;

    @Column({ type: "int", default: 1 })
    rooms!: number;

    @Index()
    @Column({ type: "numeric", precision: 9, scale: 6 })  
    latitude!: number;

    @Index()
    @Column({ type: "numeric", precision: 9, scale: 6 })  
    longitude!: number;

    @Column({ type: "varchar", nullable: true })
    country?: string | null;

    @Column({ type: "varchar", nullable: true })
    region?: string | null;

    @Column({ type: "varchar", nullable: true })
    city?: string | null;

    @Column({ type: "varchar", nullable: true })
    district?: string | null;

    @Column({ type: "varchar", nullable: true })
    street?: string | null;

    @Column({ type: "varchar", nullable: true })
    buildNumber?: string | null;

    @Column({ type: "varchar", nullable: true })
    apartmentNumber?: string | null;

    @Column({ type: 'varchar', nullable: true })
    timezone?: string | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;
}
