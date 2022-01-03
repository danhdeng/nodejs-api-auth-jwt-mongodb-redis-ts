import UserModel from '@/resources/user/user.model';
import token from '@/utils/token';
import { Err } from 'joi';

class UserService {
    private user = UserModel;

    /**
     * Regiser a new user
     */

    public async register(
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<String | Error> {
        try {
            const newUser = await this.user.create({
                name,
                email,
                password,
                role,
            });
            const accessToken = token.createToken(newUser);
            return accessToken;
        } catch (error) {
            throw new Error('Unable to create user');
        }
    }

    public async login(
        email: string,
        password: string
    ): Promise<String | Error> {
        try {
            const user = await this.user.findOne({ email });
            if (!user) {
                throw new Error(`Unable to find the user with email: ${email}`);
            }
            if (await user.isValidPassword(password)) {
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials was given');
            }
        } catch (error: any) {
            throw new Error(
                `Unable to login with invalid credentials: ${error.message}`
            );
        }
    }
}

export default UserService;
