import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommissionController } from './controllers/commission/commission.controller';
import { CommissionService } from './services/commission/commission.service';
import { MemberController } from './controllers/member/member.controller';
import { MemberService } from './services/member/member.service';
import { MemberModule } from './modules/member/member.module';
import { typeormconfig } from './typeormconfig';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { NodemailerModule } from 'nodemailer';
import { mailerconfig } from './mailerconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeormconfig),
        MemberModule,
    ],
    controllers: [CommissionController, MemberController, UserController],
    providers: [CommissionService, MemberService, UserService],
})
export class AppModule {}
