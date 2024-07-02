import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')    
    id: string;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'date_birth'})
    dateBirth: string;

    @CreateDateColumn({name: 'created_at'})
    created_at: string;
    
    @UpdateDateColumn({name: 'updated_at'})
    updated_at: string;
    
    
    @DeleteDateColumn({name: 'deleted_at'})
    deleted_at: string;


}
