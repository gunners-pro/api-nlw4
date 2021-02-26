import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('surveys_users')
class SurveyUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  survey_id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;
}

export default SurveyUser;
