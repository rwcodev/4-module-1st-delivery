import { BaseEntity, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


enum RepairsStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

@Entity()
export class Repairs extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'date',
        nullable: false,
    })
    date: string;

    @Column({
        enum: RepairsStatus,
        nullable: false,
        defaul: RepairsStatus.PENDING
    })
    status: RepairsStatus;

    @Column({
        type: 'int',
        nullable: false,
    })
    user_id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}