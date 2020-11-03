import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class Authentication {
    public static hash = (password: string): Promise<string> => {
        return bcrypt.hash(password, 12)
    }

    public static passwordCompare = async (text: string, encrypt: string): Promise<boolean> => {
        let result = await bcrypt.compare(text, encrypt);
        return result;
    }
    public static generateToken = async (id: number, name: string, email: string): Promise<string> => {
        const secretKey: string = process.env.JWT_SECRET_KEY || "secret";
        const token: string = jwt.sign({ id, name, email }, secretKey);
        console.log('minta' + token)
        return token;

    }
}

export default Authentication