import { Member } from '../../entities/member.entity';
import { User } from 'src/entities/user.entity';

export interface IMemberService {

    readAll(skip: number, take: number): Promise<Member[]>;
    readOne(id: number): Promise<Member>;
    create(member: Member): Promise<Member>;
    update(member: Member): Promise<Member>;
    giveMembership(user: User, startDate: Date, endDate: Date);
}
